package com.jackschaeffer.languageapp.dao;

import com.jackschaeffer.languageapp.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepository extends JpaRepository<Song, Long> {
}
