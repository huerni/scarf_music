package com.cgsx.scarf_music.config;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;

import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 配置静态资源文件映射
 */

@Configuration
public class ResourceConfigAdapter extends WebMvcConfigurerAdapter {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String os = System.getProperty("os.name");
        if (os.toLowerCase().startsWith("win")) {  //如果是Windows系统
            registry.addResourceHandler("/singerImages/**").
                    addResourceLocations("file:D:/scarf_music_resource/singerImage/");
            registry.addResourceHandler("/songImages/**").
                    addResourceLocations("file:D:/scarf_music_resource/songImage/");
            registry.addResourceHandler("/songSheetImages/**").
                    addResourceLocations("file:D:/scarf_music_resource/songSheetImage/");
            registry.addResourceHandler("/songs/**").
                    addResourceLocations("file:D:/scarf_music_resource/songMp3/");
        } else {
            //linux和mac系统
            registry.addResourceHandler("/singerImages/**").
                    addResourceLocations("file:/usr/local/scarf_music_resource/singerImage/");
            registry.addResourceHandler("/songImages/**").
                    addResourceLocations("file:/usr/local/scarf_music_resource/songImage/");
            registry.addResourceHandler("/songSheetImages/**").
                    addResourceLocations("file:/usr/local/scarf_music_resource/songSheetImage/");
            registry.addResourceHandler("/songs/**").
                    addResourceLocations("file:/usr/local/scarf_music_resource/songMp3/");
        }
        super.addResourceHandlers(registry);
    }
}

