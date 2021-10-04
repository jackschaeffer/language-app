package com.jackschaeffer.languageapp.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "region")
@Getter
@Setter
public class Region {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "region_name")
    private String artistName;

    @Column(name = "region_icon")
    private String regionIcon;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "region")
    private Set<Artist> artists;

}
