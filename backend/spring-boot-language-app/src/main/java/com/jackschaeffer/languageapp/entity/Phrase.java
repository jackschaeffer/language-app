package com.jackschaeffer.languageapp.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "phrase")
@Getter
@Setter
public class Phrase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToMany
    @JoinTable(
        name = "song_phrase",
        joinColumns = @JoinColumn(name = "phrase_id"),
        inverseJoinColumns = @JoinColumn(name = "song_id")
    )
    private Set<Song> songs;

    @Column(name = "fr_phrase")
    private String frPhrase;

    @Column(name = "en_phrase")
    private String enPhrase;

}
