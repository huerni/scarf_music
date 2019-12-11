package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Album;
import com.cgsx.scarf_music.entity.Singer;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.entity.SongSheet;
import com.cgsx.scarf_music.service.AlbumService;
import com.cgsx.scarf_music.service.SingerService;
import com.cgsx.scarf_music.service.SongService;

import com.cgsx.scarf_music.service.SongSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.*;


@Controller
public class SearchController {

    @Autowired
    private SongService songService;
    @Autowired
    private SingerService singerService;
    @Autowired
    private AlbumService albumService;
    @Autowired
    private SongSheetService songSheetService;


    /**
    * @Description: 跳转搜索页面
    * @Param: [model, keyword, pageNumber]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/2
    */
    @RequestMapping("/search")
    public String toSearch(Model model, @RequestParam(name = "keyword", defaultValue = " ")String keyword){
        List<Song> songList = songService.findAllByIsOnline().subList(0,10);

        model.addAttribute("songL", songList);
        model.addAttribute("keyword", keyword);
        return "searchList";
    }

    /**
    * @Description: 搜索页面歌曲列表分页
    * @Param: [model, pageNumber, keyword]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/6
    */
    @RequestMapping("/search/songList")
    public String toSearchSongList(Model model,  @RequestParam(name = "pageNumber", defaultValue = "0") Integer pageNumber, @RequestParam(name = "keyword", defaultValue = " ")String keyword){

        Page<Song> songPage = songService.findSearchSongList(pageNumber, Constants.defaultPageSize, keyword);
        System.out.println(keyword);
        model.addAttribute("songList", songPage.getContent());
        model.addAttribute("pageNumber", pageNumber);
        model.addAttribute("totalPages", songPage.getTotalPages());
        model.addAttribute("keyword", keyword);

        return "searchList_songList";
    }

    /**
    * @Description: 搜索页面歌手列表分页
    * @Param: [model, pageNumber, keyword]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/6
    */
    @RequestMapping("/search/singerList")
    public String toSearchSingerList(Model model,@RequestParam(name = "pageNumber", defaultValue = "0") Integer pageNumber, @RequestParam(name = "keyword", defaultValue = " ")String keyword){
//        Page<Singer> singerPage = singerService.findSearchSinger(pageNumber, Constants.defaultPageSize, keyword);

        Page<Song> songPage = songService.findSearchSongList(0, 10000, keyword);
        Set<Singer> set = new HashSet<>();
        for(Song song : songPage){
            set.add(song.getSinger());
        }
        List<Singer> singerList = new ArrayList<>(set);
        /**
         * 将list转换为page对象
         */
        Pageable pageable = PageRequest.of(pageNumber, Constants.defaultPageSize, Sort.Direction.DESC,"listenTimes");
        int start = (int) pageable.getOffset();
        int end = (start+pageable.getPageSize()>singerList.size())?singerList.size():(start+pageable.getPageSize());
        Page<Singer> singerPage = new PageImpl<Singer>(singerList.subList(start, end), pageable, singerList.size());


        model.addAttribute("singerList", singerPage.getContent());
        model.addAttribute("pageNumber", pageNumber);
        model.addAttribute("totalPages", singerPage.getTotalPages());
        model.addAttribute("keyword", keyword);
        return "searchList_singerList";
    }

    /**
    * @Description: 搜索页面专辑列表分页
    * @Param: [model, pageNumber, keyword]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/6
    */
    @RequestMapping("/search/albumList")
    public String toSearchAlbumList(Model model,@RequestParam(name = "pageNumber", defaultValue = "0") Integer pageNumber, @RequestParam(name = "keyword", defaultValue = " ")String keyword){
        Page<Album> albumPage = albumService.findSearchAlbum(pageNumber, Constants.YES*2, keyword);

        model.addAttribute("albumList", albumPage.getContent());
        model.addAttribute("pageNumber", pageNumber);
        model.addAttribute("totalPages", albumPage.getTotalPages());
        model.addAttribute("keyword", keyword);

        return "searchList_albumList";
    }

    /**
    * @Description: 搜索列表歌单列表分页
    * @Param: [model, pageNumber, keyword]
    * @return: java.lang.String
    * @Author: cgsx
    * @Date: 2019/12/6
    */
    @RequestMapping("/search/sheetList")
    public String toSearchSheet(Model model,@RequestParam(name = "pageNumber", defaultValue = "0") Integer pageNumber, @RequestParam(name = "keyword", defaultValue = " ")String keyword){
        Page<SongSheet> songSheets = songSheetService.findSearchSongSheet(pageNumber, Constants.defaultPageSize*2, keyword);


        model.addAttribute("songSheetList", songSheets.getContent());
        model.addAttribute("pageNumber", pageNumber);
        model.addAttribute("totalPages", songSheets.getTotalPages());
        model.addAttribute("keyword", keyword);

        return "searchList_songSheetList";
    }

}
