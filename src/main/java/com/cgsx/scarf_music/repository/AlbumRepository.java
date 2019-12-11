package com.cgsx.scarf_music.repository;

import com.cgsx.scarf_music.entity.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AlbumRepository extends JpaRepository<Album, Long>, JpaSpecificationExecutor<Album> {
    Album findByAlbumIdAndIsOnline(Long albumId, Integer isOnline);
}
