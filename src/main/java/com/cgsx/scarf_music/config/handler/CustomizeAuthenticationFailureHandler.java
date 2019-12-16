package com.cgsx.scarf_music.config.handler;

import com.alibaba.fastjson.JSON;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @program: scarf_music
 * @description: 登录失败处理逻辑
 * @author: cgsx
 * @create: 2019-12-14 14:38
 **/
@Component
public class CustomizeAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
        Map<String,Object> result = new HashMap<String,Object>();
        result.put("success",false);
        if (e instanceof BadCredentialsException){
            result.put("message", "密码错误");
//            System.out.println("密码错误");
        }
        else if (e instanceof InternalAuthenticationServiceException){
            result.put("message", "用户名不存在");
            System.out.println("用户名不存在");
        }
        //处理编码方式，防止中文乱码的情况
        httpServletResponse.setContentType("text/json;charset=utf-8");
        //塞到HttpServletResponse中返回给前台
        httpServletResponse.getWriter().write(JSON.toJSONString(result));

    }
}
