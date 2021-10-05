package com.jackschaeffer.languageapp.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="song")
@Data
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "artist_id", nullable = false)
    private Artist artist;

    @ManyToOne
    @JoinColumn(name = "genre_id", nullable = false)
    private Genre genre;

    @ManyToMany
    @JoinTable(
        name = "song_phrase",
        joinColumns = @JoinColumn(name = "song_id"),
        inverseJoinColumns = @JoinColumn(name = "phrase_id")
    )
    private Set<Phrase> phrases;

    @Column(name = "fr_name")
    private String frName;

    @Column(name = "en_name")
    private String enName;

    @Column(name = "description")
    private String description;

    @Column(name = "fr_lyrics")
    private String frLyrics;

    @Column(name = "en_lyrics")
    private String enLyrics;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "date_created")
    @CreationTimestamp
    private Date dateCreated;

    @Column(name = "last_updated")
    @UpdateTimestamp
    private Date lastUpdated;
}
