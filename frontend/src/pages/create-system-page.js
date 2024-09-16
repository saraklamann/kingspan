import React from 'react';
import SystemForm from '../components/new-system-form';
import { Link } from 'react-router-dom';
import "../styles/create-system/create-system-page/style.css";
import arrowBack from '../assets/icons/arrow-back.svg'; // Caminho relativo à imagem

const CreateSystemPage = () => {
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

            <div className='frame'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <h1 className='title'> Dados do sistema </h1>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <SystemForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSystemPage;