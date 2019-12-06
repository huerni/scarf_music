package com.cgsx.scarf_music.service;

import com.cgsx.scarf_music.entity.Singer;
import org.springframework.data.domain.Page;


public interface SingerService {
    Page<Singer> findAllSingerByIsOnline(int page, int size);

    Singer findSingerBySingerId(Long singerId);

    Page<Singer> findSearchSinger(int page, int size, String keyword);
}
