package com.jackschaeffer.languageapp.dao;

import com.jackschaeffer.languageapp.entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionRepository extends JpaRepository<Region, Long> {
}
