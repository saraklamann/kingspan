import "../styles/edit-system/system-form-component/style.css";

const EditSystem = ({ system, handleChange, handleSubmit, reason}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Descrição: </label>
                    <input type="text" name="systemDescription" value={system.systemDescription} onChange={handleChange} required />
                </div>
                <div>
                    <label> Sigla:</label>
                    <input type="text" name="systemAcronym" value={system.systemAcronym} onChange={handleChange} required />
                </div>
                <div>
                    <label> Email de atendimento:</label>
                    <input type="text" name="systemServiceEmail" value={system.systemServiceEmail} onChange={handleChange} />
                </div>
                <div>
                    <label> Url:</label>
                    <input type="text" name="systemUrl" value={system.systemUrl} onChange={handleChange} />
                </div>
                <div>
                    <label> Status:</label>
                    <input type="text" name="systemStatus" value={system.systemStatus} onChange={handleChange}  required/>
                </div>
                <div>
                    <label> Usuário responsável pela última alteração:</label>
                    <input type="text" name="systemLastEditor" value={system.systemLastEditor} readOnly />
                </div>
                <div>
                    <label> Data da última alteração:</label>
                    <input type="text" name="systemLastUpdate" value={system.systemLastUpdate} readOnly/>
                </div>
                <div>
                    <label> Última justificativa de edição:</label>
                    <input type="text" name="lastUpdate" value={system.systemUpdateJustification} readOnly/>
                </div>
                <div>
                    <label> Motivo da alteração:</label>
                    <input type="text" name="systemUpdateJustification" value={reason.oldJustification} onChange={handleChange} required/>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default EditSystem;
