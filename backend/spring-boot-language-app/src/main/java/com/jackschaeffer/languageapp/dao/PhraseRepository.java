package com.jackschaeffer.languageapp.dao;

import com.jackschaeffer.languageapp.entity.Phrase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhraseRepository extends JpaRepository<Phrase, Long> {
}
