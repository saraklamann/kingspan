package com.kingspan.backend.repositories;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.kingspan.backend.models.SystemModel;

@Repository
public interface SystemRepository extends JpaRepository<SystemModel, UUID>{

}
