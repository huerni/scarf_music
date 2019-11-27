package com.cgsx.scarf_music;

import lombok.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class ScarfMusicApplication{

    public static void main(String[] args) {
        SpringApplication.run(ScarfMusicApplication.class, args);
    }

}
