package com.cgsx.scarf_music.repository;

import com.cgsx.scarf_music.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByCategoryId(Long categoryId);
}
