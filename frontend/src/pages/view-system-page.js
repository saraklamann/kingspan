import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/view-systems/view-systems-page/style.css";
import SystemTable from '../components/table-systems'
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
        <div className="main-element">
            <div className="justify-center">
                <div className="frame">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="title"> Filtro de consulta </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 justify-center">
                            <input className='search-input' type='text' placeholder='Descrição'/>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 justify-center">
                            <input className='search-input' type='text'placeholder='Sigla'/>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 justify-center">
                            <input className='search-input' type='text' placeholder='E-mail de atendimento'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 justify-end">
                            <button className="all-button"> Pesquisar </button>
                            <button className="all-button"> Limpar campos </button>
                            <Link to="/new-system" className="margin"><button className="new-system-button"> Adicionar sistema </button></Link>
                            {error && <p>Error: {error.message}</p>}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="justify-center">
                <div className="frame">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="title"> Sistemas </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 justify-center">
                            <SystemTable/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewSystemsPage;