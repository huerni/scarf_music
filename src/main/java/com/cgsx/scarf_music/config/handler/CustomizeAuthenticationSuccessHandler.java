package com.cgsx.scarf_music.config.handler;

import com.alibaba.fastjson.JSON;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @program: scarf_music
 * @description: 登录成功处理逻辑
 * @author: cgsx
 * @create: 2019-12-14 14:29
 **/

@Component
public class CustomizeAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {


            Map<String, Object> result = new HashMap<String, Object>();
            result.put("success", true);
            result.put("message", "登录成功");
            //处理编码方式，防止中文乱码的情况
            httpServletResponse.setContentType("text/json;charset=utf-8");
            //塞到HttpServletResponse中返回给前台
            httpServletResponse.getWriter().write(JSON.toJSONString(result));
    }
}
