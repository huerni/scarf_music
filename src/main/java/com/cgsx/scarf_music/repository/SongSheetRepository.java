package com.cgsx.scarf_music.repository;

import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.entity.SongSheet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface SongSheetRepository extends JpaRepository<SongSheet, Long>, JpaSpecificationExecutor<SongSheet> {
    SongSheet findBySongSheetIdAndIsOnline(Long songSheetId, Integer isOnline);

    List<SongSheet> findByUserAndIsOnline(Long userId, Integer isOnline);
}
