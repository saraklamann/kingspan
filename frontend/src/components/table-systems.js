import "../styles/view-systems/table-systems-component/style.css";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SystemTable() {
    const [systems, setSystems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080')
            .then(response => {
                setSystems(response.data);
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
                <table className="system-table">
                    <thead>
                        <tr>
                            <th> Descrição </th>
                            <th> Sigla </th>
                            <th> E-mail de atendimento </th>
                            <th> URL </th>
                            <th> Status </th>
                            <th> Ações </th>
                        </tr>
                    </thead>
                    <tbody>
                        {systems.map(system => (
                            <tr key={system.systemId}>
                                <td>{system.systemDescription}</td>
                                <td>{system.systemAcronym}</td>
                                <td>{system.systemServiceEmail}</td>
                                <td>{system.systemUrl}</td>
                                <td>{system.systemStatus}</td>
                                <td>
                                    <Link to={`/edit-system/${system.systemId}`} className="edit-button"> Editar </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="space-between buttons">   
                <button className="all-button pages-button"> Página anterior </button>
                <button className="all-button pages-button"> Próxima página </button>
            </div>
        </div>
    );
}

export default SystemTable;
