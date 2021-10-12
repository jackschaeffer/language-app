package com.jackschaeffer.languageapp.dao;

import com.jackschaeffer.languageapp.entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface RegionRepository extends JpaRepository<Region, Long> {
}
