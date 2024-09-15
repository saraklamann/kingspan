import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/create-system/system-form-component/style.css";

function CreateSystemForm() {
    const [system, setSystem] = useState({
        systemDescription: '', 
        systemAcronym: '', 
        systemServiceEmail: '', 
        systemUrl: '', 
        systemStatus: 'ATIVO', 
        systemLastEditor: 'Admin', 
        systemLastUpdate: null, 
        systemUpdateJustification: 'Criação' 
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSystem({ ...system, [name]: value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/', system);
            console.log('Operação realizada com sucesso!', response.data);
            navigate('/')
        } catch (error) {
            console.error('Dados obrigatórios não informados! Error:', error.response ? error.response.data : error.message);
        }
    };
  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Descrição: </label>
                    <input type="text" name="systemDescription" value={system.systemDescription} onChange={handleChange} required/>
                </div>
                <div>
                    <label> Sigla: </label>
                    <input type="text" name="systemAcronym" value={system.systemAcronym} onChange={handleChange} required/>
                </div>
                <div>
                    <label> E-mail de atendimento: </label>
                    <input type="text" name="systemServiceEmail" value={system.systemServiceEmail} onChange={handleChange}/>
                </div>
                <div>
                    <label> URL: </label>
                    <input type="text" name="systemUrl" value={system.systemUrl} onChange={handleChange}/>
                </div>
                <button type="submit"> Salvar </button>
            </form>
            {error && <p>Error: {error.message}</p>}
        </div>
    );
  }
  
  export default CreateSystemForm;