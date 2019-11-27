package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
public class PlayController {

    @Autowired
    private SongService songService;

    @RequestMapping("/player")
    public String toPlayer(Model model, @RequestParam(name = "id") Long songId, HttpServletRequest request){
        Song song = songService.findSongBySongIdAndIsOnline(songId);
        HttpSession session = request.getSession();
        List<Song> listSong = new ArrayList<>();
        if(session.getAttribute("listSong") != null){
            listSong = (List<Song>) session.getAttribute("listSong");
            if(!listSong.contains(song))
                listSong.add(song);
            session.setAttribute("listSong", listSong);
        }else {
            listSong.add(song);
            session.setAttribute("listSong", listSong);
        }

        return "player";
    }

    @RequestMapping("/playerList")
    public String toPlayerList(Model model, @RequestParam(name = "songList") String songListIds, HttpServletRequest request){

        String[] ss = songListIds.split(",");
        List<Long> songIds = new ArrayList<>();
        for(String s : ss){
            songIds.add(Long.parseLong(s));
        }
        List<Song> listSong = new ArrayList<>();
        for(Long id : songIds){
            Song song = songService.findSongBySongIdAndIsOnline(id);
            listSong.add(song);
        }
        HttpSession session = request.getSession();
        session.setAttribute("listSong", listSong);
        System.out.println(songListIds);
        return "player";
    }
}