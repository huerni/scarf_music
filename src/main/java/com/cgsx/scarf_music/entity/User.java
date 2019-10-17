package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

    private static final long serialVersionUID = 8615073248717693891L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String username;

    private String password;

    private Integer sex;

    @Temporal(TemporalType.DATE)
    private Date birthday;

    private String qq;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "userRole", joinColumns = {@JoinColumn(name = "userId")},
    inverseJoinColumns = @JoinColumn(name = "roleId"))
    private List<Role> roleList;

}
