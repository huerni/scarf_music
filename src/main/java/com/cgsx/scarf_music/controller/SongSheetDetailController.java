package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.entity.SongSheet;
import com.cgsx.scarf_music.service.SongSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @program: scarf_music
 * @description: 歌单详细页面控制器
 * @author: cgsx
 * @create: 2019-12-10 12:24
 **/
@Controller
public class SongSheetDetailController {

    @Autowired
    private SongSheetService songSheetService;

    @RequestMapping("/songSheet")
    public String toSongSheet(Model model, @RequestParam(name = "songSheetId")Long songSheetId){
        SongSheet songSheet = songSheetService.findSongSheetById(songSheetId);

        model.addAttribute("songSheet", songSheet);

        return "songSheet";
    }
}
