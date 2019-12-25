package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

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

    private String gender;

    private String E_name;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String experience;

    private Integer listenTimes;

    //是否上线
    private Integer isOnline;

    @OneToMany(mappedBy = "singer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Song> songList = new ArrayList<>();

    @OneToMany(mappedBy = "singer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Album> albumList = new ArrayList<>();
}
