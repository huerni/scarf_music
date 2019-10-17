package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

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

    //简介
    @Lob
    @Column(columnDefinition = "TEXT")
    private String introduction;

    private Integer listenTimes;

    private Integer collectionTimes;

}
