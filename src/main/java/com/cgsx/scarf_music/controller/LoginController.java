package com.cgsx.scarf_music.controller;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.User;
import com.cgsx.scarf_music.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @program: scarf_music
 * @description: 登录控制器
 * @author: cgsx
 * @create: 2019-12-13 16:22
 **/
@RestController
public class LoginController {

    @Autowired
    private UserService userService;

    /**
    * @Description: 登录控制器 返回json数据
    * @Param: [username, password, email]
    * @return: java.util.Map<java.lang.String,java.lang.Object>
    * @Author: cgsx
    * @Date: 2019/12/14
    */
    @RequestMapping("/register")
    @ResponseBody
    public Map<String, Object> register(String username, String password, String email){
        List<User> userPage1 = userService.findByUserNameOrEmail(username).getContent();
        List<User> userPage2 = userService.findByUserNameOrEmail(email).getContent();
        Map<String, Object> result = new HashMap<>();

        System.out.println(userPage1.size());
        if(userPage1.size() != 0){
            result.put("success", false);
            result.put("message", "用户名已存在");

        }
        else if(userPage2.size() != 0){
            result.put("success", false);
            result.put("message", "邮箱已存在");
        }else {
            User user = new User();
            user.setUsername(username);
            user.setEmail(email);
            user.setPassword(password);
            user.setLoginTimes(1);
            user.setListenTimes(1);
            user.setImgUri("userImages/moren.jpg");
            user.setSex(Constants.MALE);
            userService.saveUser(user);
            result.put("success", true);
        }
        return result;
    }

}
