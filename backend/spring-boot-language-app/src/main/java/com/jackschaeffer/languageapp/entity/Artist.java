package com.jackschaeffer.languageapp.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "artist")
@Getter
@Setter
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "artist_name")
    private String artistName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "artist")
    private Set<Song> songs;

    @ManyToOne
    @JoinColumn(name = "region_id", nullable = false)
    private Region region;

}
