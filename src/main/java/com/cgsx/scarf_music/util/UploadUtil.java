package com.cgsx.scarf_music.util;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

/**
 * @program: scarf_music
 * @description: 图片上传工具类
 * @author: cgsx
 * @create: 2019-12-26 19:03
 **/

public class UploadUtil {

    public static String  fileUpload(String songSheetName, String path, MultipartFile file){
        if (file.isEmpty()) {
            System.out.println("文件为空");
        }
        String fileName = file.getOriginalFilename();  // 文件名
        String suffixName = fileName.substring(fileName.lastIndexOf("."));  // 后缀名
        String filePath = path; // 上传后的路径
        fileName = UUID.randomUUID() + suffixName; // 新文件名
        String filename = songSheetName + fileName;
        File dest = new File(filePath + filename);
        if (!dest.getParentFile().exists()) {
            dest.getParentFile().mkdirs();
        }
        try {
            file.transferTo(dest);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return filename;
    }
}
