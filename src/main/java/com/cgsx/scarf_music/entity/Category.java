package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "category")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category implements Serializable {
    private static final long serialVersionUID = -6155596717853795151L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    private String tag;

    /**
     * 该分类所属歌单
     */
    @ManyToMany
    @JoinTable(name = "songSheetCategory", joinColumns = {@JoinColumn(name = "categoryId")},
            inverseJoinColumns = {@JoinColumn(name = "songSheetId")})
    private List<SongSheet> songSheetList = new ArrayList<>();
}
