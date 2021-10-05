package com.jackschaeffer.languageapp.dao;

import com.jackschaeffer.languageapp.entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtistRepository extends JpaRepository<Artist, Long> {
}
