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
        <div className='row justify-center'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <form onSubmit={handleSubmit} className='main'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <input placeholder="Descrição" className='input-field' type="text" name="systemDescription" value={system.systemDescription} onChange={handleChange} required/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <input placeholder='Sigla' className='input-field' type="text" name="systemAcronym" value={system.systemAcronym} onChange={handleChange} required/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <input placeholder='E-mail de atendimento' className='input-field' type="text" name="systemServiceEmail" value={system.systemServiceEmail} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <input placeholder='URL' className='input-field' type="text" name="systemUrl" value={system.systemUrl} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 justify-center'>
                            <button className='all-button submit-button' type="submit"> Salvar </button>
                            {error && <p>Error: {error.message}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
  }
  
  export default CreateSystemForm;