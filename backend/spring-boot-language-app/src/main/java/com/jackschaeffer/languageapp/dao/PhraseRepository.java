package com.jackschaeffer.languageapp.dao;

import com.jackschaeffer.languageapp.entity.Phrase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface PhraseRepository extends JpaRepository<Phrase, Long> {
}
