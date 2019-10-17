package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

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

    @Lob
    @Column(columnDefinition = "TEXT")
    private String introduction;

    private String nationality;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String experience;

    private Integer listenTimes;
}
