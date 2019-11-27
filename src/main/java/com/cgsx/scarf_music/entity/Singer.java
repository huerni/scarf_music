package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

/**
 * 歌手
 */
@Entity
@Table(name = "singer")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Singer implements Serializable {

    private static final long serialVersionUID = -3793967580994241258L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long singerId;

    private String name;

    /**
     * 歌手头像
     */
    private String imgUri;

    /**
     * 歌手介绍
     */
    @Lob
    @Column(columnDefinition = "TEXT")
    private String introduction;


    private String nationality;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String experience;

    private Integer listenTimes;

    //是否上线
    private Integer isOnline;
}
