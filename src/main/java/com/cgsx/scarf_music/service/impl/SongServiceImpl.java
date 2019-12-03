package com.cgsx.scarf_music.service.impl;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Singer;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.repository.SongRepository;
import com.cgsx.scarf_music.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.apache.commons.lang.StringUtils;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class SongServiceImpl implements SongService {

    @Autowired
    private SongRepository songRepository;

    @Override
    public List<Song> findAllSong() {
        return songRepository.findAll();
    }

    @Override
    public List<Song> findAllByIsOnline() {
        return songRepository.findAllByIsOnline(Constants.YES);
    }

    @Override
    public Page<Song> findAllByIsOnlineOrderByDate(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "issueDate");

        return songRepository.findAllByIsOnline(Constants.YES, pageable);
    }

    @Override
    public Page<Song> findAllByIsOnlineOrderByTimes(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "listenTimes");

        return songRepository.findAllByIsOnline(Constants.YES, pageable);
    }

    @Override
    public Page<Song> findSearchSongList(int page, int size, String keyword) {
        Pageable pageable = PageRequest.of(page,size,Sort.Direction.DESC,"listenTimes");
        return songRepository.findAll(this.getWhereClause(keyword), pageable);
    }

    @Override
    public Song findSongBySongIdAndIsOnline(Long id) {
        return songRepository.findBySongIdAndIsOnline(id, Constants.YES);
    }

    public Specification<Song> getWhereClause(String keyword){
        return new Specification<Song>() {
            @Override
            public Predicate toPredicate(Root<Song> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> predicates = new ArrayList<>();
                /**
                 * 多表查询
                 */
                Join<Song, Singer> sroot = root.join("singer", JoinType.LEFT);
                if(StringUtils.isNotBlank(keyword)){
                    predicates.add(
                            criteriaBuilder.and(
                                    criteriaBuilder.or(
                                        criteriaBuilder.like(root.get("songName"),"%" + keyword + "%"),
                                            criteriaBuilder.like(sroot.get("name"), "%" + keyword + "%")
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
