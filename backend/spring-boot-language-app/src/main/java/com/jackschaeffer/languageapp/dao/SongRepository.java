package com.jackschaeffer.languageapp.dao;

import com.jackschaeffer.languageapp.entity.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin("http://localhost:4200")
public interface SongRepository extends JpaRepository<Song, Long> {

    Page<Song> findByGenreId(@RequestParam("id") Long id, Pageable pageable);

    Page<Song> findByArtistId(@RequestParam("id") Long id, Pageable pageable);
}
