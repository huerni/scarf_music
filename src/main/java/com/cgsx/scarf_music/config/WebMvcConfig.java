package com.cgsx.scarf_music.config;


import com.cgsx.scarf_music.interceptors.RequestInterceptors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Component
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    @Autowired
    RequestInterceptors requestInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(requestInterceptor);
    }
}
