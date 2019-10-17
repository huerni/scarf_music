package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "album")
@Data
@AllArgsConstructor
@NoArgsConstructor
//专辑
public class Album implements Serializable {
    private static final long serialVersionUID = 597003067836105597L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long albumId;

    @Temporal(TemporalType.DATE)
    private Date issueDate;

    private String issueCompany;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String introduction;

    private Integer collectionTimes;

    private Integer listenTimes;
}
