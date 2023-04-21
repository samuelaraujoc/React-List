import React, {useState, useEffect} from 'react';
import './styles.css';
//cardProps importando typagem
import{ Card, CardsProps} from '../../componentes/Card';

//estado, armazenando conteudo atual digitado no Input
export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setstudents] = useState<CardsProps[]>([]);
  const [ user, setUser] = useState({name:'', avatar: ''});

  /*quando esta função for chamada ela vai criar um novo objetos com duas propriedades, (Nome que vai esta armazenado no estado atual e hora atual do sistema)
  */
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",  {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    // Utilizando spread operator (...) para pegar oconteudo do estado anterior e colocar dentro do vetor/Array e mostrar na interface. princípio da imutabilidade.
    setstudents(sprevState => [...sprevState, newStudent]);
  }


  //utilizando API do Github para pegar de forma dinâmica nome e avatar e colocar na interface.
  useEffect(() => {
   fetch('https://api.github.com/users/samuelaraujoc')
   .then(response => response.json())
   .then(data =>{
    setUser({
      name: data.name,
      avatar: data.avatar_url,
    })
   })
  },[]);

  return (
    
    <div className="container">
      <header>
      <h1>Lista de presença</h1>
        <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto do perfil GitHub"/>
        </div>
      </header>

      <input type="text" 
      placeholder="Digite o nome..." 
      onChange={ e => setStudentName(e.target.value)}
      />

    <button type="button" onClick={handleAddStudent}>
      Adicionar
    </button> 
    
    {/* deixando cartões dinâmicos. Utilizando Time como Key  já que os segundo vão ser unicos para deixar o componente unico*/
      students.map(student => (
      <Card 
        key={student.name}
        name={student.name} 
        time={student.time}
      />
    ))
    }
    </div>
  )
}

