package com.cgsx.scarf_music.controller;


import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Singer;
import com.cgsx.scarf_music.service.SingerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;


/**
 * @program: scarf_music
 * @description: 歌手列表页面
 * @author: cgsx
 * @create: 2019-12-03 21:51
 **/

@Controller
public class SingerController {

    @Autowired
    private SingerService singerService;

    /**
    * @Description: 跳转歌手列表页面
    * @Param: [model, pageNumber]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/4
    */
    @RequestMapping("/singers")
    public String toSingerList(Model model, @RequestParam(name = "pageNumber", defaultValue = "0")Integer pageNumber){

        Page<Singer> singers = singerService.findAllSingerByIsOnline(pageNumber, Constants.defaultPageSize*60);

        model.addAttribute("singerList", singers.getContent());
        return "singers";
    }

}
