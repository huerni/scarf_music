package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class TopController {

    @Autowired
    private SongService songService;

    /**
    * @Description: 跳转热门排行榜
    * @Param: [model, pageNumber]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/2
    */
    @RequestMapping("/tophot")
    public String topHot(Model model, @RequestParam(name = "pageNumber", defaultValue = "0") Integer pageNumber){
        Page<Song> songPage = songService.findAllByIsOnlineOrderByTimes(pageNumber, 15);

        //System.out.println(songPage.getContent().size());
        List<Long> songListIds = new ArrayList<>();
        for(Song s : songPage.getContent()){
            songListIds.add(s.getSongId());
        }
        model.addAttribute("songList", songPage.getContent());
        model.addAttribute("songListIds", songListIds);
        model.addAttribute("type", 1);
        model.addAttribute("rank", "热歌榜");
        model.addAttribute("totalPages", songPage.getTotalPages());
        model.addAttribute("pageNumber", pageNumber);
        return "rankList";
    }

    /**
    * @Description: 跳转飙升排行榜
    * @Param: [model, pageNumber]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/2
    */
    @RequestMapping("/topup")
    public String topUp(Model model, @RequestParam(name = "pageNumber", defaultValue = "0") Integer pageNumber){
        Page<Song> songPage = songService.findAllByIsOnlineOrderByTimes(pageNumber, 15);

        List<Long> songListIds = new ArrayList<>();
        for(Song s : songPage.getContent()){
            songListIds.add(s.getSongId());
        }
        model.addAttribute("songList", songPage.getContent());
        model.addAttribute("songListIds", songListIds);
        model.addAttribute("type", 2);
        model.addAttribute("rank", "飙升榜");
        model.addAttribute("totalPages", songPage.getTotalPages());
        model.addAttribute("pageNumber", pageNumber);
        return "rankList";
    }

    /**
    * @Description: 跳转新歌排行榜
    * @Param: [model, pageNumber]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/2
    */
    @RequestMapping("/topnew")
    public String topNew(Model model, @RequestParam(name = "pageNumber", defaultValue = "0") Integer pageNumber){
        Page<Song> songPage = songService.findAllByIsOnlineOrderByDate(pageNumber, 15);

        List<Long> songListIds = new ArrayList<>();
        for(Song s : songPage.getContent()){
            songListIds.add(s.getSongId());
        }
        model.addAttribute("songList", songPage.getContent());
        model.addAttribute("songListIds", songListIds);
        model.addAttribute("type", 3);
        model.addAttribute("rank", "新歌榜");
        model.addAttribute("totalPages", songPage.getTotalPages());
        model.addAttribute("pageNumber", pageNumber);
        return "rankList";
    }
}
