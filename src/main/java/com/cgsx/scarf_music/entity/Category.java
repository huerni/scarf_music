package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "category")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category implements Serializable {
    private static final long serialVersionUID = -6155596717853795151L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long caregoryId;

    private String tag;
}
