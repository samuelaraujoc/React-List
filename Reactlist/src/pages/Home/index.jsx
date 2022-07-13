import React, {useState} from 'react';
import './styles.css';
import{ Card } from '../../componentes/Card';

export function Home() {
  const [studentName, setStudentName] = useState('');

  return (
    <div className='container'>
      <h1>Nome: {studentName} </h1>

      <input type="text" 
      placeholder="Digite o nome" 
      onChange={ e => setStudentName(e.target.value)}
      />
     

      <button type="button">Adicionar</button>
      
      <Card name="samuel" time="14:00:00"/>
      <Card name="Luana" time="16:00:00"/>
      <Card name="Copelia" time="15:00:00"/>
      
    
    </div>
  )
   
}

