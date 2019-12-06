package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.entity.Category;
import com.cgsx.scarf_music.entity.Singer;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.entity.SongSheet;
import com.cgsx.scarf_music.service.CategoryService;
import com.cgsx.scarf_music.service.SingerService;
import com.cgsx.scarf_music.service.SongService;
import com.cgsx.scarf_music.service.SongSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


@Controller
public class IndexController {

    @Autowired
    private SongService songService;
    @Autowired
    private SongSheetService songSheetService;
    @Autowired
    private SingerService singerService;
    @Autowired
    private CategoryService categoryService;

    /**
    * @Description: 跳转到主页
    * @Param: [model]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/3
    */
    @RequestMapping({"/", "/index"})
    public String index(Model model){
        Page<Song> songList = songService.findAllByIsOnlineOrderByDate(0, 4);

        Page<Song> newSongList = songService.findAllByIsOnlineOrderByDate(0, 6);
        List<Long> newSongListIds = new ArrayList<>();
        for(Song s : newSongList){
            newSongListIds.add(s.getSongId());
        }

        Page<Song> hotSongList = songService.findAllByIsOnlineOrderByTimes(0,6);
        List<Long> hotSongListIds = new ArrayList<>();
        for(Song s : hotSongList){
           hotSongListIds.add(s.getSongId());
        }

        List<Song> upSongList = songService.findAllByIsOnline().subList(0,6);
        List<Long> upSongListIds = new ArrayList<>();
        for(Song s : upSongList){
            upSongListIds.add(s.getSongId());
        }

        //System.out.println(songList.get(0).getSinger().getName());


        Page<Singer> singerList = singerService.findAllSingerByIsOnline(0,6);

        List<SongSheet> songSheetList = songSheetService.findAllSongSheet().subList(0,8);
        Collections.shuffle(songSheetList);

        List<Category> categoryList = categoryService.findAllCategory();
        if(categoryList.size() > 12)
            categoryList = categoryList.subList(0,12);


        model.addAttribute("songList", songList.getContent());
        model.addAttribute("newSongList", newSongList.getContent());
        model.addAttribute("newSongListIds", newSongListIds);

        model.addAttribute("hotSongList", hotSongList.getContent());
        model.addAttribute("hotSongListIds", hotSongListIds);

        model.addAttribute("upSongList", upSongList);
        model.addAttribute("upSongListIds", upSongListIds);

        model.addAttribute("songSheetList", songSheetList);

        model.addAttribute("categoryList", categoryList);

        model.addAttribute("singerList", singerList.getContent());
        return "index";
    }
}
