package com.cgsx.scarf_music.service.impl;

import com.cgsx.scarf_music.entity.SongSheet;
import com.cgsx.scarf_music.repository.SongSheetRepository;
import com.cgsx.scarf_music.service.SongSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongSheetServiceImpl implements SongSheetService {

    @Autowired
    SongSheetRepository songSheetRepository;

    @Override
    public List<SongSheet> findAllSongSheet() {
        return songSheetRepository.findAll();
    }
}
