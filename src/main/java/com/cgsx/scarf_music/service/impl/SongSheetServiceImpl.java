package com.cgsx.scarf_music.service.impl;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Singer;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.entity.SongSheet;
import com.cgsx.scarf_music.repository.SongSheetRepository;
import com.cgsx.scarf_music.service.SongSheetService;
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
public class SongSheetServiceImpl implements SongSheetService {

    @Autowired
    SongSheetRepository songSheetRepository;

    @Override
    public List<SongSheet> findAllSongSheet() {
        return songSheetRepository.findAll();
    }

    @Override
    public Page<SongSheet> findSearchSongSheet(int page, int size, String keyword) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "listenTimes");

        return songSheetRepository.findAll(getWhereClause(keyword), pageable);
    }

    @Override
    public Page<SongSheet> findSongSheetSort(int page, int size, String sort) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, sort);

        return songSheetRepository.findAll(getWhereClause(""), pageable);
    }

    @Override
    public SongSheet findSongSheetById(Long songSheetId) {
        return songSheetRepository.findBySongSheetIdAndIsOnline(songSheetId, Constants.YES);
    }

    public Specification<SongSheet> getWhereClause(String keyword){
        return new Specification<SongSheet>() {
            @Override
            public Predicate toPredicate(Root<SongSheet> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> predicates = new ArrayList<>();
                if(StringUtils.isNotBlank(keyword)){
                    predicates.add(
                            criteriaBuilder.and(
                                    criteriaBuilder.or(
                                            criteriaBuilder.like(root.get("songSheetName"),"%" + keyword + "%")
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
