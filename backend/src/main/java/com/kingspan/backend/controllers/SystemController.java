package com.kingspan.backend.controllers;

import java.util.List;
import java.util.UUID;
import java.util.Optional;

import jakarta.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kingspan.backend.dtos.SystemRecordDto;
import com.kingspan.backend.models.SystemModel;
import com.kingspan.backend.repositories.SystemRepository;
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

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneSystem(@PathVariable(value="id") UUID id){
        Optional<SystemModel> systemOptional = systemRepository.findById(id);
        if(systemOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sistema não encontrado!");
        } else{
            return ResponseEntity.status(HttpStatus.OK).body(systemOptional.get());
        }
    } 
}
