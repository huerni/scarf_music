package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "song")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Song implements Serializable {
    private static final long serialVersionUID = 6465763914545950852L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long songId;

    private String songName;

    private String imgUri;

    private String fileUri;

    @Lob
    @Column(columnDefinition = "TEXT")
    //歌词
    private String lyric;

    private Integer listenTimes;

    @Temporal(TemporalType.DATE)
    //发行日期
    private Date issueDate;

    @Temporal(TemporalType.TIME)
    //时长
    private Date duration;



    //是否上线
    private Integer isOnline;

    @ManyToOne
    @JoinColumn(name = "singer_id")
    private Singer singer;


}
