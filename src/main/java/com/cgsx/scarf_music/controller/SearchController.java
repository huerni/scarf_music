package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.service.SongService;
import com.cgsx.scarf_music.util.Aes;
import org.apache.commons.lang.StringUtils;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class SearchController {

    @Autowired
    private SongService songService;


    /**
    * @Description: 
    * @Param: [model, keyword, pageNumber]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/2
    */
    @RequestMapping("/search")
    public String toSearch(Model model, @RequestParam(name = "keyword", defaultValue = " ")String keyword,  @RequestParam(name = "pageNumber", defaultValue = "0") Integer pageNumber){

//        String keyword1 = "";
//        try {
//            keyword1 = Aes.aesDecrypt(keyword, Aes.getKEY());
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
        Page<Song> songPage = songService.findSearchSongList(pageNumber, Constants.defaultPageSize, keyword);
        System.out.println(keyword);
        model.addAttribute("songList", songPage.getContent());
        model.addAttribute("pageNumber", pageNumber);
        model.addAttribute("totalPages", songPage.getTotalPages());
        model.addAttribute("keyword", keyword);
        return "searchList";
    }
}
