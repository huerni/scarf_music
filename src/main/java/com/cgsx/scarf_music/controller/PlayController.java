package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.entity.SongSheet;
import com.cgsx.scarf_music.entity.User;
import com.cgsx.scarf_music.service.AuthenticationService;
import com.cgsx.scarf_music.service.SongService;
import com.cgsx.scarf_music.service.SongSheetService;
import com.cgsx.scarf_music.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

/**
 * TODO 删除播放列表歌曲
 */
@Controller
public class PlayController {

    @Autowired
    private SongService songService;

    @Autowired
    private SongSheetService songSheetService;

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserService userService;

    /**
    * @Description: 单个跳转播放页面
    * @Param: [model, songId, request]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/2
    */
    @RequestMapping("/player")
    public String toPlayer(Model model, @RequestParam(name = "id") Long songId,HttpSession session){
        Song song = songService.findSongBySongIdAndIsOnline(songId);
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

        Authentication authentication = authenticationService.getAuthentication();
        if (authentication != null) {
            String username = authentication.getName();
            List<User> users = userService.findByUserNameOrEmail(username).getContent();
            if(users.size() > 0) {
                User user = users.get(0);
                if (user != null) {
                    user.setListenTimes(user.getListenTimes()+1);
                    userService.saveUser(user);
                }
            }
        }

        return "player";
    }

    /**
    * @Description: 多首歌跳转播放页面
    * @Param: [model, songListIds, request]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/2
    */
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

        Authentication authentication = authenticationService.getAuthentication();
        if (authentication != null) {
            String username = authentication.getName();
            List<User> users = userService.findByUserNameOrEmail(username).getContent();
            if(users.size() > 0) {
                User user = users.get(0);
                if (user != null) {
                    user.setListenTimes(user.getListenTimes()+1);
                    userService.saveUser(user);
                }
            }
        }

        return "player";
    }

    @RequestMapping("/playSongSheet")
    public String playSongSheet(Model model, @RequestParam(name = "songSheetId")Long songSheetId,  HttpServletRequest request){
        SongSheet songSheet = songSheetService.findSongSheetById(songSheetId);

        List<Song> songList = songSheet.getSongList();
        HttpSession session = request.getSession();
        session.setAttribute("listSong", songList);

        Authentication authentication = authenticationService.getAuthentication();
        if (authentication != null) {
            String username = authentication.getName();
            List<User> users = userService.findByUserNameOrEmail(username).getContent();
            if(users.size() > 0) {
                User user = users.get(0);
                if (user != null) {
                    user.setListenTimes(user.getListenTimes()+1);
                    userService.saveUser(user);
                }
            }
        }

        return "player";
    }
}
