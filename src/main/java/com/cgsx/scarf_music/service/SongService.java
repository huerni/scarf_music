package com.cgsx.scarf_music.service;

import com.cgsx.scarf_music.entity.Song;
import org.springframework.data.domain.Page;

import java.util.List;

public interface SongService {
    List<Song> findAllSong();

    List<Song> findAllByIsOnline();

    Page<Song> findAllByIsOnlineOrderByDate(int page, int size);

    Page<Song> findAllByIsOnlineOrderByTimes(int page, int size);

    Song findSongBySongIdAndIsOnline(Long id);
}
