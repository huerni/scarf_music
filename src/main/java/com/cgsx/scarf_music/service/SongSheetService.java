package com.cgsx.scarf_music.service;

import com.cgsx.scarf_music.entity.SongSheet;
import org.springframework.data.domain.Pageable;


import java.util.List;

public interface SongSheetService {
    List<SongSheet> findAllSongSheet();
}
