package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.entity.SongSheet;
import com.cgsx.scarf_music.entity.User;
import com.cgsx.scarf_music.service.AuthenticationService;
import com.cgsx.scarf_music.service.SongService;
import com.cgsx.scarf_music.service.SongSheetService;
import com.cgsx.scarf_music.service.UserService;
import com.cgsx.scarf_music.util.UploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.*;

/**
 * @program: scarf_music
 * @description: 个人主页界面控制器
 * @author: cgsx
 * @create: 2019-12-25 19:07
 **/

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private SongSheetService songSheetService;
    
    @Autowired
    private SongService songService;

    @Autowired
    private AuthenticationService authenticationService;

    @RequestMapping("/user")
    public String  toUser(Model model, @RequestParam(name = "userId")Long userId){
        System.out.println(userId);

        User user = userService.findByUserId(userId);
        /**
         * 收藏的歌单
         */
        String str = user.getSongSheetStr();
        List<SongSheet> songSheetLists = new ArrayList<>();
        if(str != null){
            String[] ss = str.split(",");

            for(String s : ss){
                SongSheet songSheet = songSheetService.findSongSheetById(Long.parseLong(s));
                songSheetLists.add(songSheet);
                System.out.println(songSheet.getSongSheetName());
            }
        }

        /**
         * 创建的歌单
         */
        List<SongSheet> songSheetList = songSheetService.findSongSheetByUser(user.getUserId());
//        user.setSongSheets(songSheetList);

        model.addAttribute("user", user);
        model.addAttribute("songSheetLists", songSheetLists);

        return "userDetail";
    }

    /**
    * @Description: 收藏歌单
    * @Param: [songSheetId, userId]
    * @return: java.util.Map<java.lang.String,java.lang.Object>
    * @Author: cgsx
    * @Date: 2019/12/26
    */
    @RequestMapping("/user/favorite")
    @ResponseBody
    public Map<String, Object> Favorite(@RequestParam(name = "songSheetId") Long songSheetId, @RequestParam(name = "userId")Long userId){
        Map<String, Object> map = new HashMap<>();
//        System.out.println(songSheetId);
//        System.out.println(userId);
        User user = userService.findByUserId(userId);
        String[] ss = user.getSongSheetStr().split(",");
        StringBuffer stringBuffer = new StringBuffer();
        int flag = 0;
        for(String s : ss){
            if(Long.parseLong(s) == songSheetId){
//                map.put("success", true);
//                map.put("message", "你已收藏该歌单");
                flag = 1;
                continue;
//                return map;
            }
            stringBuffer.append(s+",");
        }
        if(flag == 1){
            user.setSongSheetStr(stringBuffer.toString());
            userService.saveUser(user);
            map.put("success", true);
            map.put("message", "取消收藏成功");
            return map;
        }
        SongSheet songSheet = songSheetService.findSongSheetById(songSheetId);
        if(songSheet.getUser() == userId){
            map.put("success", true);
            map.put("message", "该歌单是你自己的歌单，不能收藏");
            return map;
        }
        user.setSongSheetStr(user.getSongSheetStr()+","+songSheetId);
        userService.saveUser(user);
        map.put("success", true);
        map.put("message", "收藏成功");
        return map;
    }

    @RequestMapping("/user/toEdit")
    private String editUser(Model model){

        return "editUser";
    }

    /**
    * @Description: 添加歌曲到歌单
    * @Param: [model, songId, songSheetId]
    * @return: java.util.Map<java.lang.String,java.lang.Object>
    * @Author: cgsx
    * @Date: 2019/12/26
    */
    @RequestMapping("/user/addSong")
    @ResponseBody
    private Map<String, Object> addSong(Model model, @RequestParam(name = "songId")Long songId, @RequestParam(name = "songSheetId")Long songSheetId){
        Map<String, Object> map = new HashMap<>();
        System.out.println(songId);
        System.out.println(songSheetId);
        SongSheet songSheet = songSheetService.findSongSheetById(songSheetId);
        List<Song> songList = songSheet.getSongList();
        for(Song song : songList){
            if(song.getSongId() == songId){
                System.out.println(11);
                map.put("success", true);
                map.put("message", "此歌单已有该歌曲，无法添加");
                return map;
            }
        }
        Song song = songService.findSongBySongIdAndIsOnline(songId);
        songList.add(song);
        songSheet.setSongList(songList);
        songSheetService.saveSongSheet(songSheet);
        System.out.println(22);
        map.put("success", true);
        map.put("message", "添加成功");
        return map;
    }

    @RequestMapping("/user/toAddSongSheet")
    private String toAddSongSheet(Model model){

        return "addSongSheet";
    }

    @RequestMapping("/user/addSongSheet")
    @ResponseBody
    private Map<String, Object> addSongSheet(Model model, @RequestParam(name = "file")MultipartFile file,   @RequestParam(name = "songSheetName")String songSheetName, @RequestParam(name = "introduction")String introduction){
        Map<String, Object> map = new HashMap<>();

        SongSheet songSheet = new SongSheet();
//        System.out.println(songSheetName);
//        System.out.println(introduction);
//        System.out.println(file);

        songSheet.setSongSheetName(songSheetName);
        songSheet.setIntroduction(introduction);
        Authentication authentication = authenticationService.getAuthentication();
        if (authentication != null) {
            String username = authentication.getName();
            List<User> users = userService.findByUserNameOrEmail(username).getContent();
            if(users.size() > 0) {
                User user = users.get(0);
                if (user != null) {
                    songSheet.setUser(user.getUserId());
                }
            }
        }
        songSheet.setCreateDate(new Date());
        songSheet.setIsOnline(Constants.YES);
        songSheet.setListenTimes(0);
        songSheet.setCollectionTimes(0);
        String os = System.getProperty("os.name");
        if (os.toLowerCase().startsWith("win")) {  //如果是Windows系统
            String filename = UploadUtil.fileUpload(songSheetName, "D:\\scarf_music_resource\\songSheetImage\\", file);
            songSheet.setImgUri("songSheetImages/" + filename);
        }else {
            String filename = UploadUtil.fileUpload(songSheetName, "/usr/local/scarf_music_resource/songSheetImage/", file);
            songSheet.setImgUri("songSheetImages/" + filename);
        }

//        System.out.println(filename);
        songSheetService.saveSongSheet(songSheet);
        map.put("success", true);
        map.put("message", "新增成功");
        return map;
    }


    @RequestMapping("/toEditUser")
    public String toEditUser(Model model){

        return "editUser";
    }

    @RequestMapping("/user/removeSongSheet")
    @ResponseBody
    public Map<String, Object> removeSongSheet(@RequestParam(name = "songSheetId")Long songSheetId){
        Map<String, Object> map = new HashMap<>();

        SongSheet songSheet = songSheetService.findSongSheetById(songSheetId);
        songSheet.setIsOnline(Constants.NO);
        songSheetService.saveSongSheet(songSheet);
        map.put("success", true);
        map.put("message", "删除成功");
        return map;
    }

    @RequestMapping("/user/removeCollectionSongSheet")
    @ResponseBody
    public Map<String, Object> removeCollectionSongSheet(@RequestParam(name = "songSheetId")Long songSheetId){
        Map<String, Object> map = new HashMap<>();

        Authentication authentication = authenticationService.getAuthentication();
        if (authentication != null) {
            String username = authentication.getName();
            List<User> users = userService.findByUserNameOrEmail(username).getContent();
            if(users.size() > 0) {
                User user = users.get(0);
                if (user != null) {
                    String[] str = user.getSongSheetStr().split(",");
                    StringBuffer stringBuffer = new StringBuffer();
                    for(String s : str){
                        if(!s.equals(songSheetId.toString())){
                            stringBuffer.append(s + ",");
                        }
                    }
                    user.setSongSheetStr(stringBuffer.toString());
                    map.put("success", true);
                    map.put("message", "取消收藏成功");
                    return map;
                }
            }
        }
        map.put("success", false);
        map.put("message", "取消收藏失败");
        return map;
    }

}
