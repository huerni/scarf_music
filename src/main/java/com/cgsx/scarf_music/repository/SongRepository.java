package com.cgsx.scarf_music.repository;


import com.cgsx.scarf_music.entity.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


import java.util.List;

public interface SongRepository extends JpaRepository<Song, Long>, JpaSpecificationExecutor<Song> {
    List<Song> findAllByIsOnline(Integer isOnline);

    Page<Song> findAllByIsOnline(Integer isOnline, Pageable pageable);

    Song findBySongIdAndIsOnline(Long songId, Integer isOnline);
}
