package com.cgsx.scarf_music.controller;

import com.google.code.kaptcha.Producer;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Controller
public class CaptchaController {

    @Autowired
    private Producer producer;

    @GetMapping("/captcha.jpg")
    public void getImage(HttpServletResponse response, HttpServletRequest request) throws IOException {
        response.setContentType("image/jpeg");
        String text = producer.createText();
        request.getSession(true).setAttribute("captcha", text);
        BufferedImage bufferedImage = producer.createImage(text);
        ServletOutputStream servletOutputStream = response.getOutputStream();
        ImageIO.write(bufferedImage, "jpg", servletOutputStream);
        try{
            servletOutputStream.flush();
        }finally {
            servletOutputStream.close();
        }
    }

    @RequestMapping("/judge")
    @ResponseBody
    public Map<String, Object> judgeCode(String captcha, HttpSession session){

        String saveCode = (String) session.getAttribute("captcha");
        //System.out.println(saveCode);
        //System.out.println("sss" + captcha);
        captcha = captcha.toUpperCase();
        Map<String, Object> map = new HashMap<>();
        if(captcha.equals(saveCode))
            map.put("success", true);
        else {
            map.put("success", false);
            map.put("message", "验证码错误");
        }

        return map;
    }
}
