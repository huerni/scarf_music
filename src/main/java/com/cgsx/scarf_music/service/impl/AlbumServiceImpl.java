package com.cgsx.scarf_music.service.impl;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Album;
import com.cgsx.scarf_music.entity.Singer;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.repository.AlbumRepository;
import com.cgsx.scarf_music.service.AlbumService;
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

/**
 * @program: scarf_music
 * @description: 专辑服务层
 * @author: cgsx
 * @create: 2019-12-06 16:21
 **/
@Service
public class AlbumServiceImpl implements AlbumService {

    @Autowired
    private AlbumRepository albumRepository;

    /**
    * @Description: keyword模糊搜索专辑
    * @Param: [page, size, keyword]
    * @return: org.springframework.data.domain.Page<com.cgsx.scarf_music.entity.Album>
    * @Author: cgsx
    * @Date: 2019/12/10
    */
    @Override
    public Page<Album> findSearchAlbum(int page, int size, String keyword) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "listenTimes");

        return albumRepository.findAll(getWhereClause(keyword), pageable);
    }

    /**
    * @Description: 通过id查找专辑
    * @Param: [albumId]
    * @return: com.cgsx.scarf_music.entity.Album
    * @Author: cgsx
    * @Date: 2019/12/10
    */
    @Override
    public Album findAlbumById(Long albumId) {
        return albumRepository.findByAlbumIdAndIsOnline(albumId, Constants.YES);
    }

    public Specification<Album> getWhereClause(String keyword){
        return new Specification<Album>() {
            @Override
            public Predicate toPredicate(Root<Album> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> predicates = new ArrayList<>();
                if(StringUtils.isNotBlank(keyword)){
                    predicates.add(
                            criteriaBuilder.and(
                                    criteriaBuilder.or(
                                            criteriaBuilder.like(root.get("albumName"),"%" + keyword + "%")
                                    )
                            )
                    );
                }
                predicates.add(criteriaBuilder.equal(root.get("isOnline"), Constants.YES));
                Predicate[] pre = new Predicate[predicates.size()];
                return criteriaQuery.where(predicates.toArray(pre)).getRestriction();
            }
        };
    }
}
