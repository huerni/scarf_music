package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "comment")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment implements Serializable {
    private static final long serialVersionUID = 8449643074303535208L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String content;

    //评论时间
    @Temporal(TemporalType.TIMESTAMP)
    private Date creatDate;

    //点赞数
    private Integer pointNumber;
}
