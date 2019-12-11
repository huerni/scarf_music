package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Category;
import com.cgsx.scarf_music.entity.Singer;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.entity.SongSheet;
import com.cgsx.scarf_music.service.CategoryService;
import com.cgsx.scarf_music.service.SongSheetService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @program: scarf_music
 * @description: 歌单页面控制器
 * @author: cgsx
 * @create: 2019-12-06 18:13
 **/
@Controller
public class SongSheetController {

    @Autowired
    private CategoryService categoryService;
    @Autowired
    private SongSheetService songSheetService;


    /**
    * @Description: 跳转到歌单列表页面
    * @Param: [model]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/10
    */
    @RequestMapping("/songSheetList")
    public String toSongSheetList(Model model){
        List<Category> categoryList = categoryService.findAllCategory();

        model.addAttribute("categoryList", categoryList);

        return "songSheepList";
    }

    /**
    * @Description: 获取不同类别歌单列表数据，实现局部刷新
    * @Param: [model, pageNumber, type]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/10
    */
    @RequestMapping("/songSheetList/data")
    public String getSongSheetList(Model model, @RequestParam(name="pageNumber", defaultValue = "0")Integer pageNumber,@RequestParam(name = "type", defaultValue = "-1")Long type){
        /**
         * 最新
         */
        if(type == -1L){
            Page<SongSheet> songSheetPage = songSheetService.findSongSheetSort(pageNumber, Constants.defaultPageSize*2, "createDate");
            model.addAttribute("totalPages", songSheetPage.getTotalPages());
            model.addAttribute("songSheetList", songSheetPage.getContent());
        }
        /**
         * 最热
         */
        else if(type == 0L){
            Page<SongSheet> songSheetPage = songSheetService.findSongSheetSort(pageNumber, Constants.defaultPageSize*2, "listenTimes");
            model.addAttribute("totalPages", songSheetPage.getTotalPages());
            model.addAttribute("songSheetList", songSheetPage.getContent());
        }
        /**
         * 通过分类查找
         */
        else {
            List<SongSheet> songSheetList = new ArrayList<>();
            Category category = categoryService.findCategoryByCategoryId(type);
            songSheetList = category.getSongSheetList();
            /**
             * 将list转换为page对象
             */
            Pageable pageable = PageRequest.of(pageNumber, Constants.defaultPageSize, Sort.Direction.DESC,"listenTimes");
            int start = (int) pageable.getOffset();
            int end = (start+pageable.getPageSize()>songSheetList.size())?songSheetList.size():(start+pageable.getPageSize());
            Page<SongSheet> songSheets = new PageImpl<SongSheet>(songSheetList.subList(start, end), pageable, songSheetList.size());
            model.addAttribute("totalPages", songSheets.getTotalPages());
            model.addAttribute("songSheetList", songSheets.getContent());
        }

        model.addAttribute("pageNumber", pageNumber);
        model.addAttribute("type", type);

        return "songSheetList_data";
    }


}
