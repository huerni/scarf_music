package com.cgsx.scarf_music.service;

import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.entity.SongSheet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;

public interface SongSheetService {
    List<SongSheet> findAllSongSheet();

    Page<SongSheet> findSearchSongSheet(int page, int size, String keyword);

    Page<SongSheet> findSongSheetSort(int page, int size, String sort);

    SongSheet findSongSheetById(Long songSheetId);
}
