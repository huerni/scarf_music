package com.cgsx.scarf_music.service.impl;

import com.cgsx.scarf_music.constants.Constants;
import com.cgsx.scarf_music.entity.Singer;
import com.cgsx.scarf_music.repository.SingerRepository;
import com.cgsx.scarf_music.service.SingerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class SingerServiceImpl implements SingerService {
    @Autowired
    private SingerRepository singerRepository;

    @Override
    public Page<Singer> findAllSingerByIsOnline(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "listenTimes");
        return singerRepository.findAllByIsOnline(Constants.YES, pageable);
    }
}
