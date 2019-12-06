package com.cgsx.scarf_music.repository;

import com.cgsx.scarf_music.entity.Singer;
import com.cgsx.scarf_music.entity.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


public interface SingerRepository extends JpaRepository<Singer, Long> , JpaSpecificationExecutor<Singer> {
    Page<Singer> findAllByIsOnline(Integer isOnline, Pageable pageable);

    Singer findBySingerIdAndIsOnline(Long singerId, Integer isOnline);
}
