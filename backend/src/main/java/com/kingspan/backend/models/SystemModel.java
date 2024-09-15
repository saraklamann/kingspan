package com.kingspan.backend.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "TABLE_SYSTEMS")
public class SystemModel implements Serializable {
    private static final long serialVersionUID = 1L; // Identificador de versão

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private UUID systemId;

    @Size(max = 100, message = "A descrição do sistema não deve conter mais que 100 caracteres")
    private String systemDescription;

    @Size(max = 10, message = "A sigla do sistema não deve conter mais que 10 caracteres")
    private String systemAcronym;

    @Size(max = 100, message = "O e-mail de atendimento não deve conter mais que 100 caracteres")
    private String systemServiceEmail = "-";

    @Size(max = 50, message = "A url do sistema não deve conter mais que 50 caracteres")
    private String systemUrl = "-";

    @Size(max = 50, message = "O status do sistema não deve conter mais que 50 caracteres")
    private String systemStatus = "ATIVO";

    @Size(max = 100, message = "O nome do último editor não deve conter mais que 100 caracteres")
    private String systemLastEditor;

    private LocalDateTime systemLastUpdate;

    @Size(max = 500, message = "A justificativa de alteração não deve conter mais que 500 caracteres")
    private String systemUpdateJustification;

    // Getters and Setters
    public void setSystemId(UUID systemId) {
        this.systemId = systemId;
    }

    public void setSystemDescription(String systemDescription) {
        this.systemDescription = systemDescription;
    }

    public void setSystemAcronym(String systemAcronym) {
        this.systemAcronym = systemAcronym;
    }

    public void setSystemServiceEmail(String systemServiceEmail) {
        if (systemServiceEmail == null || systemServiceEmail.isBlank()) {
            this.systemServiceEmail = "-";  // Define o valor padrão
        } else {
            this.systemServiceEmail = systemServiceEmail;
        }
    }

    public void setSystemUrl(String systemUrl) {
        if (systemUrl == null || systemUrl.isBlank()) {
            this.systemUrl = "-";  // Define o valor padrão
        } else {
            this.systemUrl = systemUrl;
        }
    }

    public void setSystemStatus(String systemStatus) {
        this.systemStatus = systemStatus;
    }

    public void setSystemLastEditor(String systemLastEditor) {
        this.systemLastEditor = systemLastEditor;
    }

    public void setSystemLastUpdate(LocalDateTime systemLastUpdate) {
        this.systemLastUpdate = systemLastUpdate;
    }

    public void setSystemUpdateJustification(String systemUpdateJustification) {
        this.systemUpdateJustification = systemUpdateJustification;
    }

    public UUID getSystemId() {
        return systemId;
    }

    public String getSystemDescription() {
        return systemDescription;
    }

    public String getSystemAcronym() {
        return systemAcronym;
    }

    public String getSystemServiceEmail() {
        return systemServiceEmail;
    }

    public String getSystemUrl() {
        return systemUrl;
    }

    public String getSystemStatus() {
        return systemStatus;
    }

    public String getSystemLastEditor() {
        return systemLastEditor;
    }

    public LocalDateTime getSystemLastUpdate() {
        return systemLastUpdate;
    }

    public String getSystemUpdateJustification() {
        return systemUpdateJustification;
    }
}
