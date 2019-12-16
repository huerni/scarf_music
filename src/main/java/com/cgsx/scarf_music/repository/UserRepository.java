package com.cgsx.scarf_music.repository;

import com.cgsx.scarf_music.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @program: scarf_music
 * @description: 用户数据库操作层
 * @author: cgsx
 * @create: 2019-12-13 16:01
 **/
public interface UserRepository extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {
    User findByUsername(String username);

}
