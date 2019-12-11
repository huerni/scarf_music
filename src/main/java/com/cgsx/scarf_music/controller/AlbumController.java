package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Album;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.service.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * @program: scarf_music
 * @description: 专辑页面控制器
 * @author: cgsx
 * @create: 2019-12-10 14:36
 **/
@Controller
public class AlbumController {

    @Autowired
    private AlbumService albumService;

    @RequestMapping("/album")
    public String toAlbum(Model model, @RequestParam(name = "albumId") Long albumId){
        Album album = albumService.findAlbumById(albumId);

        if(album.getIntroduction().length() > 100){
            album.setShowIntro(album.getIntroduction().substring(0,100));
        }else {
            album.setShowIntro(album.getIntroduction());
        }

        model.addAttribute("album", album);

        return "album";
    }

    @RequestMapping("/album/songList")
    public String AlbumSongList(Model model, @RequestParam(name="albumId")Long albumId, @RequestParam(name = "pageNumber", defaultValue = "0")Integer pageNumber){
        Album album = albumService.findAlbumById(albumId);

        List<Song> songList = album.getSongList();
        /**
         * 将list转换为page对象
         */
        Pageable pageable = PageRequest.of(pageNumber, Constants.defaultPageSize, Sort.Direction.DESC,"listenTimes");
        int start = (int) pageable.getOffset();
        int end = (start+pageable.getPageSize()>songList.size())?songList.size():(start+pageable.getPageSize());
        Page<Song> songPage = new PageImpl<Song>(songList.subList(start, end), pageable, songList.size());

        model.addAttribute("songList", songPage.getContent());
        model.addAttribute("pageNumber", pageNumber);
        model.addAttribute("albumId", albumId);
        model.addAttribute("totalPages", songPage.getTotalPages());

        return "album_songList";
    }
}
