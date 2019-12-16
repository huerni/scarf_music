package com.cgsx.scarf_music.config;

import com.cgsx.scarf_music.entity.Role;
import com.cgsx.scarf_music.entity.User;
import com.cgsx.scarf_music.repository.UserRepository;
import com.cgsx.scarf_music.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;


@Service
public class MyUserDetailService implements UserDetailsService {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<User> userList = userService.findByUserNameOrEmail(username).getContent();
//        User user = userRepository.findByUsername(username);
        System.out.println(username);
//        System.out.println(userList.size());

        if(userList.size() == 0 || userList == null){
//        if(user == null){
            throw new RuntimeException("用户不存在");
        }
        User user = userList.get(0);
//        System.out.println(user.getPassword());
        List<SimpleGrantedAuthority> simpleGrantedAuthorityList = new ArrayList<>();
        for(Role role : user.getRoleList()){
            simpleGrantedAuthorityList.add(new SimpleGrantedAuthority(role.getRoleName()));
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), simpleGrantedAuthorityList);
    }

}
