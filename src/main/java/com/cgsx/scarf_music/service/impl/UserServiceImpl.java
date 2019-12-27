package com.cgsx.scarf_music.service.impl;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.User;
import com.cgsx.scarf_music.repository.UserRepository;
import com.cgsx.scarf_music.service.UserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

/**
 * @program: scarf_music
 * @description: 用户服务层
 * @author: cgsx
 * @create: 2019-12-13 16:12
 **/
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Page<User> findByUserNameOrEmail(String keyword) {
        Pageable pageable = PageRequest.of(0, 1, Sort.Direction.DESC, "userId");
        return userRepository.findAll(getWhereClause(keyword), pageable);
    }

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }

    @Override
    public User findByUserId(Long userId) {
        return userRepository.findById(userId).get();
    }

    Specification<User> getWhereClause(String keyword) {
        return new Specification<User>() {
            @Override
            public Predicate toPredicate(Root<User> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> predicates = new ArrayList<>();
                if (StringUtils.isNotBlank(keyword)) {
                    predicates.add(
                            criteriaBuilder.or(
                                    criteriaBuilder.like(root.get("email"),  ""+keyword),
                                    criteriaBuilder.like(root.get("username"),  ""+keyword)
                            )
                    );
                }
                Predicate[] pre = new Predicate[predicates.size()];
                return criteriaQuery.where(predicates.toArray(pre)).getRestriction();
            }
        };
    }
}
