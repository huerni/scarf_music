package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Singer;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.service.SingerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * @program: scarf_music
 * @description: 歌手详细页面
 * @author: cgsx
 * @create: 2019-12-04 14:32
 **/
@Controller
public class SingerDetailController {


    @Autowired
    private SingerService singerService;

    /**
    * @Description: 跳转到歌手详细页面
    * @Param: [model, singerId]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/5
    */
    @RequestMapping("/singerDetail")
    public String toSingerDetail(Model model, @RequestParam(name = "singerId")Long singerId){
        Singer singer = singerService.findSingerBySingerId(singerId);

        model.addAttribute("singer", singer);

        return "singerDetail";
    }

    
    /**
    * @Description: 歌曲列表局部刷新
    * @Param: [model, singerId, pageNumber]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/5
    */
    @RequestMapping("/singerDetail/songList")
    public String singerDetail(Model model, @RequestParam(name = "singerId")Long singerId, @RequestParam(name = "pageNumber", defaultValue = "0")Integer pageNumber){
        Singer singer = singerService.findSingerBySingerId(singerId);
        List<Song> songList = singer.getSongList();

        /**
         * 将list转换为page对象
         */
        Pageable pageable = PageRequest.of(pageNumber, Constants.defaultPageSize, Sort.Direction.DESC,"listenTimes");
        int start = (int) pageable.getOffset();
        int end = (start+pageable.getPageSize()>songList.size())?songList.size():(start+pageable.getPageSize());
        Page<Song> page = new PageImpl<Song>(songList.subList(start, end), pageable, songList.size());

        model.addAttribute("singer", singer);
        model.addAttribute("songList", page.getContent());
        model.addAttribute("pageNumber", pageNumber);
        model.addAttribute("totalPages", page.getTotalPages());

        return "singerDetail_songList";
    }

}
