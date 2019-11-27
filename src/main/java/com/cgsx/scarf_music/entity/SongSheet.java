package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

/**
 * 歌单
 */
@Entity
@Table(name = "songSheet")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SongSheet implements Serializable {
    private static final long serialVersionUID = -8446010143131694480L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long songSheetId;

    private String songSheetName;

    /**
     * 图片地址
     */
    private String imgUri;

    /**
     * 简介
     */
    @Lob
    @Column(columnDefinition = "TEXT")
    private String introduction;

    /**
     * 听歌次数
     */
    private Integer listenTimes;

    /**
     * 收藏次数
     */
    private Integer collectionTimes;

    @Transient
    private String userName;

}
