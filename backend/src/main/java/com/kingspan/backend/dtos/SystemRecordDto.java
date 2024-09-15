package com.kingspan.backend.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;

public record SystemRecordDto(
    @NotBlank 
    @Size(max = 100, message = "A descrição do sistema não deve conter mais que 100 caracteres!")
    String systemDescription, 

    @NotBlank 
    @Size(max = 10, message = "A sigla do sistema não deve conter mais que 10 caracteres!")
    String systemAcronym,

    @Size(max = 100, message = "O e-mail de atendimento não deve conter mais que 100 caracteres!")
    String systemServiceEmail,

    @Size(max = 50, message = "A url do sistema não deve conter mais que 50 caracteres!")
    String systemUrl,

    @Size(max = 50, message = "O status do sistema não deve conter mais que 50 caracteres!")
    String systemStatus,

    @Size(max = 100, message = "O nome do último editor não deve conter mais que 50 caracteres!")
    String systemLastEditor,

    LocalDateTime systemLastUpdate,

    @NotBlank
    @Size(max = 500, message = "A justificativa de alteração não deve conter mais que 500 caracteres!")
    String systemUpdateJustification
    )
{
    public SystemRecordDto(
        String systemDescription, 
        String systemAcronym,
        String systemServiceEmail,
        String systemUrl,
        String systemStatus,
        String systemLastEditor,
        LocalDateTime systemLastUpdate,
        String systemUpdateJustification
        ) 
    {
        this.systemDescription = systemDescription;
        this.systemAcronym = systemAcronym;
        this.systemServiceEmail = (systemServiceEmail == null || systemServiceEmail.isBlank()) ? "-" : systemServiceEmail;
        this.systemUrl = (systemUrl == null || systemUrl.isBlank()) ? "-" : systemUrl;   
        this.systemStatus = (systemStatus == null || systemStatus.isBlank()) ? "ATIVO" : systemStatus;   
        this.systemLastEditor = (systemLastEditor == null || systemLastEditor.isBlank()) ? "Admin" : systemLastEditor;   
        this.systemLastUpdate = (systemLastUpdate == null) ? LocalDateTime.now() : systemLastUpdate;   
        this.systemUpdateJustification = (systemUpdateJustification == null || systemUpdateJustification.isBlank()) ? "Criação" : systemUpdateJustification;   
    }
}

