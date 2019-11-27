package com.cgsx.scarf_music.repository;

import com.cgsx.scarf_music.entity.Singer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SingerRepository extends JpaRepository<Singer, Long> {
    Page<Singer> findAllByIsOnline(Integer isOnline, Pageable pageable);
}
