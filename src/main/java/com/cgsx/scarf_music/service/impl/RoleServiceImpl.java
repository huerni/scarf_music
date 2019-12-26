package com.cgsx.scarf_music.service.impl;

import com.cgsx.scarf_music.entity.Role;
import com.cgsx.scarf_music.repository.RoleRepository;
import com.cgsx.scarf_music.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @program: scarf_music
 * @description: 权限表服务层
 * @author: cgsx
 * @create: 2019-12-26 09:43
 **/
@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Role findById(Long roleId) {
        return roleRepository.findByRoleId(roleId);
    }
}
