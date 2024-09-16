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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kingspan.backend.dtos.SystemRecordDto;
import com.kingspan.backend.models.SystemModel;
import com.kingspan.backend.repositories.SystemRepository;
import org.springframework.web.bind.annotation.PutMapping;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class SystemController {

    @Autowired
    SystemRepository systemRepository;

    @PostMapping(value = "")
    @Operation(summary = "Cria novo sistema")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Operação realizada com sucesso!")
    })
    public ResponseEntity <SystemModel> saveSystem(@RequestBody @Valid SystemRecordDto systemRecordDto){
        var systemModel = new SystemModel();
        BeanUtils.copyProperties(systemRecordDto, systemModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(systemRepository.save(systemModel));
    }

    @GetMapping("")
    @Operation(summary = "Lista todos os sistemas")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Operação realizada com sucesso!")
    })
    public ResponseEntity<List<SystemModel>> getAllSystems(){
        return ResponseEntity.status(HttpStatus.OK).body(systemRepository.findAll());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Retorna um sistema com base no UUID (ID)")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "404", description = "Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!"),
        @ApiResponse(responseCode = "200", description = "Operação realizada com sucesso!")
    })
    public ResponseEntity<Object> getOneSystem(@Parameter(description = "UUID (ID) do sistema") @PathVariable(value="id") UUID id){
        Optional<SystemModel> systemOptional = systemRepository.findById(id);
        if(systemOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!");
        } else{
            return ResponseEntity.status(HttpStatus.OK).body(systemOptional.get());
        }
    } 

    @PutMapping("/{id}")
    @Operation(summary = "Altera um sistema com base no UUID (ID)")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "404", description = "Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!"),
        @ApiResponse(responseCode = "200", description = "Operação realizada com sucesso!")
    })
    public ResponseEntity<Object> updateSystem(@Parameter(description = "UUID (ID) do sistema") @PathVariable(value="id") UUID id, @RequestBody @Valid SystemRecordDto systemRecordDto){
        Optional<SystemModel> systemOptional = systemRepository.findById(id);
        if(systemOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sistema não encontrado!");
        } else {
            var systemModel = systemOptional.get();
            BeanUtils.copyProperties(systemRecordDto, systemModel);
            return ResponseEntity.status(HttpStatus.OK).body(systemRepository.save(systemModel));
        }    
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Deleta um sistema com base no UUID (ID)")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "404", description = "Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!"),
        @ApiResponse(responseCode = "200", description = "Operação realizada com sucesso!")
    })
    public ResponseEntity<Object> deleteSystem(@Parameter(description = "UUID (ID) do sistema") @PathVariable(value="id") UUID id){
        Optional<SystemModel> systemOptional = systemRepository.findById(id);
        if(systemOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!");
        } else {
            systemRepository.delete(systemOptional.get());
            return ResponseEntity.status(HttpStatus.OK).body("Operação realizada com sucesso!");
        } 
    }
}
