package com.cgsx.scarf_music.service.impl;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.repository.SongRepository;
import com.cgsx.scarf_music.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongServiceImpl implements SongService {

    @Autowired
    private SongRepository songRepository;

    @Override
    public List<Song> findAllSong() {
        return songRepository.findAll();
    }

    @Override
    public List<Song> findAllByIsOnline() {
        return songRepository.findAllByIsOnline(Constants.YES);
    }

    @Override
    public Page<Song> findAllByIsOnlineOrderByDate(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "issueDate");

        return songRepository.findAllByIsOnline(Constants.YES, pageable);
    }

    @Override
    public Page<Song> findAllByIsOnlineOrderByTimes(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "listenTimes");

        return songRepository.findAllByIsOnline(Constants.YES, pageable);
    }

    @Override
    public Song findSongBySongIdAndIsOnline(Long id) {
        return songRepository.findBySongIdAndIsOnline(id, Constants.YES);
    }
}
