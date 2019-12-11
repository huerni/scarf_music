package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.entity.SongSheet;
import com.cgsx.scarf_music.service.SongSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.rmi.MarshalledObject;
import java.util.List;

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

    /**
    * @Description: 跳转到歌单详细页面
    * @Param: [model, songSheetId]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/10
    */
    @RequestMapping("/songSheet")
    public String toSongSheet(Model model, @RequestParam(name = "songSheetId")Long songSheetId){
        SongSheet songSheet = songSheetService.findSongSheetById(songSheetId);

        model.addAttribute("songSheet", songSheet);

        return "songSheet";
    }

    /**
    * @Description: 得到歌单歌曲列表数据，实现局部刷新
    * @Param: [model, pageNumber, songSheetId]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/10
    */
    @RequestMapping("/songSheet/songList")
    public String songList(Model model, @RequestParam(name = "pageNumber") Integer pageNumber, @RequestParam(name = "songSheetId")Long songSheetId){
        System.out.println(songSheetId);
        SongSheet songSheet = songSheetService.findSongSheetById(songSheetId);
        List<Song> songList = songSheet.getSongList();
        /**
         * 将list转换为page对象
         */
        Pageable pageable = PageRequest.of(pageNumber, Constants.defaultPageSize, Sort.Direction.DESC,"listenTimes");
        int start = (int) pageable.getOffset();
        int end = (start+pageable.getPageSize()>songList.size())?songList.size():(start+pageable.getPageSize());
        Page<Song> songPage = new PageImpl<Song>(songList.subList(start, end), pageable, songList.size());

        model.addAttribute("songList", songPage.getContent());
        model.addAttribute("pageNumber", pageNumber);
        model.addAttribute("songSheetId", songSheetId);
        model.addAttribute("totalPages", songPage.getTotalPages());

        return "songSheet_songList";
    }
}
