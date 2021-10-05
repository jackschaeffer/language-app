package com.jackschaeffer.languageapp.dao;

import com.jackschaeffer.languageapp.entity.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre, Long> {
}
