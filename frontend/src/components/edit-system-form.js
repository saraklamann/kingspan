import "../styles/edit-system/system-form-component/style.css";

const EditSystem = ({ system, handleChange, handleSubmit, reason}) => {
    return (
        <div className="justify-center">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label> Descrição: </label>
                        <input className="input-field" type="text" name="systemDescription" value={system.systemDescription} onChange={handleChange} required />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label> Sigla:</label>
                        <input className="input-field" type="text" name="systemAcronym" value={system.systemAcronym} onChange={handleChange} required />
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label> Email de atendimento:</label>
                        <input className="input-field" type="text" name="systemServiceEmail" value={system.systemServiceEmail} onChange={handleChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label> Url:</label>
                        <input className="input-field" type="text" name="systemUrl" value={system.systemUrl} onChange={handleChange} />
                    </div>
                
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label> Status:</label>
                        <input className="input-field" type="text" name="systemStatus" value={system.systemStatus} onChange={handleChange}  required/>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label> Usuário responsável pela última alteração:</label>
                        <input className="input-field" type="text" name="systemLastEditor" value={system.systemLastEditor} readOnly />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label> Data da última alteração:</label>
                        <input className="input-field" type="text" name="systemLastUpdate" value={system.systemLastUpdate} readOnly/>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label> Última justificativa de edição:</label>
                        <input className="input-field" type="text" name="lastUpdate" value={system.systemUpdateJustification} readOnly/>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label> Motivo da alteração:</label>
                        <input className="input-field" type="text" name="systemUpdateJustification" value={reason.oldJustification} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 justify-center">
                        <button className="all-button submit-button" type="submit">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditSystem;
