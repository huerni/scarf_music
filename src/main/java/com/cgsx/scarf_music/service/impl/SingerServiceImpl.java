package com.cgsx.scarf_music.service.impl;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Singer;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.repository.SingerRepository;
import com.cgsx.scarf_music.service.SingerService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class SingerServiceImpl implements SingerService {
    @Autowired
    private SingerRepository singerRepository;

    /**
    * @Description: 查找所有上线歌手
    * @Param: [page, size]
    * @return: org.springframework.data.domain.Page<com.cgsx.scarf_music.entity.Singer>
    * @Author: cgsx
    * @Date: 2019/12/4
    */
    @Override
    public Page<Singer> findAllSingerByIsOnline(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "listenTimes");
        return singerRepository.findAllByIsOnline(Constants.YES, pageable);
    }

    /**
    * @Description: 根据歌手ID查找上线歌手
    * @Param: [singerId]
    * @return: com.cgsx.scarf_music.entity.Singer
    * @Author: cgsx
    * @Date: 2019/12/4
    */
    @Override
    public Singer findSingerBySingerId(Long singerId) {
        return singerRepository.findBySingerIdAndIsOnline(singerId, Constants.YES);
    }

    @Override
    public Page<Singer> findSearchSinger(int page, int size, String keyword) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "listenTimes");
        return singerRepository.findAll(getWhereClause(keyword), pageable);
    }

    public Specification<Singer> getWhereClause(String keyword){
        return new Specification<Singer>() {
            @Override
            public Predicate toPredicate(Root<Singer> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> predicates = new ArrayList<>();
                /**
                 * 多表查询
                 */
                //Join<Singer, Song> sroot = root.join("songList", JoinType.INNER);
                if(StringUtils.isNotBlank(keyword)){
                    predicates.add(
                            criteriaBuilder.and(
                                    criteriaBuilder.or(
                                            //criteriaBuilder.like(root.get("songName"),"%" + keyword + "%"),
                                            criteriaBuilder.like(root.get("name"), "%" + keyword + "%")
                                    )
                            )
                    );
                }
                predicates.add(criteriaBuilder.equal(root.get("isOnline"),Constants.YES));
                Predicate[] pre = new Predicate[predicates.size()];
                return criteriaQuery.where(predicates.toArray(pre)).getRestriction();
            }
        };
    }
}
