import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SystemForm from '../components/edit-system-form';
import { Link } from 'react-router-dom';
import "../styles/edit-system/edit-system-page/style.css";
import arrowBack from '../assets/icons/arrow-back.svg'; // Caminho relativo à imagem

const EditSystemPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [system, setSystem] = useState({ 
        systemDescription: '', 
        systemAcronym: '', 
        systemServiceEmail: '', 
        systemUrl: '', 
        systemStatus: '', 
        systemLastEditor: '', 
        systemLastUpdate: '', 
        systemUpdateJustification: '',
        lastUpdate: ''
    });

    const [oldJustification, setOldJustification] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get(`http://localhost:8080/${id}`)
        .then(response => {
            setSystem(response.data);
            setLoading(false);
            setOldJustification(response.data.systemUpdateJustification);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSystem({ ...system, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/${id}`, system)
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                setError(error);
        });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='main-element'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 margin-bottom'>
                    <Link to="/" className='previous-page-button'>
                        <img src={arrowBack} alt="Seta para voltar para página anterior"/>
                        <span> Voltar para página inicial </span>
                    </Link>
                </div>
            </div>
            <div className='justify-center'>
                <div className='frame'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <h1 className='title'> Dados e controle do sistema </h1>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            {error && <div className="error ">{error.message}</div>}
                            <SystemForm system={system} handleChange={handleChange} handleSubmit={handleSubmit} reason={oldJustification}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditSystemPage;