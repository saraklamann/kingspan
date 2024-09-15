import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SystemTable from '../components/table-systems';
import axios from 'axios';

const ViewSystemsPage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080')
            .then(response => {
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Sistemas</h1>
            <Link to="/new-system">
                <button> Adicionar novo sistema </button>
            </Link>
            {error && <p>Error: {error.message}</p>}
            <SystemTable/>
        </div>
    );
};

export default ViewSystemsPage;