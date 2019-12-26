package com.cgsx.scarf_music.interceptors;

import com.cgsx.scarf_music.entity.SongSheet;
import com.cgsx.scarf_music.entity.User;
import com.cgsx.scarf_music.service.AuthenticationService;
import com.cgsx.scarf_music.service.SongSheetService;
import com.cgsx.scarf_music.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * @program: scarf_music
 * @description: 拦截器
 * @author: cgsx
 * @create: 2019-12-16 08:28
 **/
@Component
public class RequestInterceptors extends HandlerInterceptorAdapter {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserService userService;

    @Autowired
    private SongSheetService songSheetService;

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object object, ModelAndView modelAndView) {
        if (modelAndView != null) {
            ModelMap modelMap = modelAndView.getModelMap();
//            System.out.println(111);
            Authentication authentication = authenticationService.getAuthentication();
            if (authentication != null) {
                String username = authentication.getName();
                List<User> users = userService.findByUserNameOrEmail(username).getContent();
                if(users.size() > 0) {
                    User user = users.get(0);
                    if (user != null) {
                        List<SongSheet> songSheetList = songSheetService.findSongSheetByUser(user.getUserId());
//                        user.setSongSheets(songSheetList);

                        modelMap.addAttribute("mySongSheet", songSheetList);
                        modelMap.addAttribute("myUser", user);
                    }
                }
            }
        }
    }
}
