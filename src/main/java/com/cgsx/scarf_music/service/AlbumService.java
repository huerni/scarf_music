package com.cgsx.scarf_music.service;

import com.cgsx.scarf_music.entity.Album;
import org.springframework.data.domain.Page;

public interface AlbumService {

    Page<Album> findSearchAlbum(int page, int size, String keyword);
}
