package com.kingspan.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kingspan.backend.models.SystemModel;
import com.kingspan.backend.repositories.SystemRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SystemController {

    @Autowired
    SystemRepository systemRepository;
}
