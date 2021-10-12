package com.jackschaeffer.languageapp.dao;

import com.jackschaeffer.languageapp.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface SongRepository extends JpaRepository<Song, Long> {
}
