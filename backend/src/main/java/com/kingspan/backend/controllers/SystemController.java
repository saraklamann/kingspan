package com.kingspan.backend.controllers;

import java.util.List;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.kingspan.backend.dtos.SystemRecordDto;
import com.kingspan.backend.models.SystemModel;
import com.kingspan.backend.repositories.SystemRepository;
import jakarta.validation.Valid;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SystemController {

    @Autowired
    SystemRepository systemRepository;

    @PostMapping(value = "")
    public ResponseEntity <SystemModel> saveSystem(@RequestBody @Valid SystemRecordDto systemRecordDto){
        var systemModel = new SystemModel();
        BeanUtils.copyProperties(systemRecordDto, systemModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(systemRepository.save(systemModel));
    }

    @GetMapping("")
    public ResponseEntity<List<SystemModel>> getAllSystems(){
        return ResponseEntity.status(HttpStatus.OK).body(systemRepository.findAll());
    }
}
