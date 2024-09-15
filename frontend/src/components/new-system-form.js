// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "../styles/create-system-page/style.css";

// function CreateSystem() {
//     const [system, setSystem] = useState({
//         systemDescription: '', 
//         systemAcronym: '', 
//         systemServiceEmail: '', 
//         systemUrl: '', 
//         systemStatus: '', 
//         systemLastEditor: '', 
//         systemLastUpdate: '', 
//         systemUpdateJustification: '' 
//     });

//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
  
//     const handleChange = (e) => {
//         const { systemDescription, value } = e.target;
//         setSystem({ ...system, [systemDescription]: value });
//     };
  
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:8080', system)
//         .then(() => {
//             navigate(''); // Redireciona para a página de visualização de sistemas após a criação
//         })
//         .catch(error => {
//             setError(error);
//         });
//     };
  
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label> Descrição: </label>
//                     <input type="text" name="system-description" value={system.systemDescription} onChange={handleChange} required/>
//                 </div>
//                 <div>
//                     <label> Sigla: </label>
//                     <input type="text" name="system-acronym" value={system.systemAcronym} onChange={handleChange} required/>
//                 </div>
//                 <button type="submit"> Salvar </button>
//             </form>
//             {error && <p>Error: {error.message}</p>}
//         </div>
//     );
//   }
  
//   export default CreateSystem;