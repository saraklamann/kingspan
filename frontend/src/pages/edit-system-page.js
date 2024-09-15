import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SystemForm from '../components/edit-system-form';

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
        <div>
            <h1> Editar sistema </h1>
            {error && <div className="error">{error.message}</div>}
            <SystemForm system={system} handleChange={handleChange} handleSubmit={handleSubmit} reason={oldJustification}/>
        </div>
    );
};

export default EditSystemPage;