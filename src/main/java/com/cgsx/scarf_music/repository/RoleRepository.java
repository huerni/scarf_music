package com.cgsx.scarf_music.repository;

import com.cgsx.scarf_music.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findByRoleId(Long roleId);
}
