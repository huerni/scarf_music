package com.cgsx.scarf_music.repository;

import com.cgsx.scarf_music.entity.Song;
import com.cgsx.scarf_music.entity.SongSheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SongSheetRepository extends JpaRepository<SongSheet, Long >, JpaSpecificationExecutor<SongSheet> {

}
