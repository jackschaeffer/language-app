package com.jackschaeffer.languageapp.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "genre")
@Getter
@Setter
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "genre_name")
    private String genreName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "genre")
    private Set<Song> songs;
}
