package com.cgsx.scarf_music.service;

import com.cgsx.scarf_music.entity.User;
import org.springframework.data.domain.Page;

public interface UserService {
    Page<User> findByUserNameOrEmail(String keyword);

    void saveUser(User user);
}
