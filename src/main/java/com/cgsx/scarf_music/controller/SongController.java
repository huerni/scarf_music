package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @program: scarf_music
 * @description: 歌曲详细页面
 * @author: cgsx
 * @create: 2019-12-02 14:59
 **/
@Controller
public class SongController {

    @Autowired
    private SongService songService;

    /**
    * @Description: 跳转到歌曲详情页面
    * @Param: [model, songId]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/3
    */
    @RequestMapping("/song")
    public String toSong(Model model, @RequestParam(name = "songId") Long songId){
        Song song = songService.findSongBySongIdAndIsOnline(songId);

        String[] lyric = song.getLyric().split("\n");
        song.setLyricShow(lyric);
        model.addAttribute("song", song);

        return "song";
    }
}
