package com.cgsx.scarf_music.service.impl;

import com.cgsx.scarf_music.entity.Category;
import com.cgsx.scarf_music.repository.CategoryRepository;
import com.cgsx.scarf_music.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> findAllCategory() {
        return categoryRepository.findAll();
    }
}
