package com.cgsx.scarf_music.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @program: scarf_music
 * @description: 歌单页面控制器
 * @author: cgsx
 * @create: 2019-12-06 18:13
 **/
@Controller
public class SongSheetController {

    @RequestMapping("/songSheetList")
    public String toSongSheetList(){

        return "songSheepList";
    }
}
