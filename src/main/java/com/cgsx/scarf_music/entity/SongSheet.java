package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
     * 创建日期
     */
    @Temporal(TemporalType.DATE)
    private Date createDate;

    /**
     * 听歌次数
     */
    private Integer listenTimes;

    /**
     * 收藏次数
     */
    private Integer collectionTimes;

    /**
     * 歌单创建用户
     */
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    /**
     * 歌单收藏用户
     */
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "userSongSheet", joinColumns = {@JoinColumn(name = "songSheetId")},
            inverseJoinColumns = {@JoinColumn(name = "userId")})
    private List<User> userList = new ArrayList<>();

    /**
     * 歌单分类
     */
    @ManyToMany
    @JoinTable(name = "songSheetCategory", joinColumns = {@JoinColumn(name = "songSheetId")},
            inverseJoinColumns = {@JoinColumn(name = "categoryId")})
    private List<Category> categoryList = new ArrayList<>();

    private Integer isOnline;

}
