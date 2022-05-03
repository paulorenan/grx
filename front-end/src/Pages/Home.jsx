import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import axios from 'axios';

function Home() {
  const [question1, setQuestion1] = useState(null);
  const [question2, setQuestion2] = useState(null);
  const [question3, setQuestion3] = useState('Sim');
  const [question4, setQuestion4] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate() ;

  useEffect(() => {
    if (question1 && question2 && question4.length >= 15) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [question1, question2, question4]);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/answer', {
      question1,
      question2,
      question3,
      question4
    }).then(res => {
      navigate('/total');
    })
  }


  return (
    <div className="Home">
      <div className="homePage">
        <section>
          <h2>
            {'1) Você se considera bom em lógica?'}
          </h2>
          <button onClick={() => setQuestion1('Sim')} className={question1 === 'Sim' ? 'chooseBtn activeG' : 'chooseBtn'}>
            Sim
          </button>
          <button onClick={() => setQuestion1('Não')} className={question1 === 'Não' ? 'chooseBtn activeR' : 'chooseBtn'}>
            Não
          </button>
        </section>
        <section>
          <h2>
            {'2) Gosta de aprender com desafios?'}
          </h2>
          <button onClick={() => setQuestion2('Sim')} className={question2 === 'Sim' ? 'chooseBtn activeG' : 'chooseBtn'}>
            Sim
          </button>
          <button onClick={() => setQuestion2('Não')} className={question2 === 'Não' ? 'chooseBtn activeR' : 'chooseBtn'}>
            Não
          </button>
        </section>
        <section>
          <h2>
            {'3) Gostaria de fazer parte da GRX?'}
          </h2>
          <select value={question3} onChange={e => setQuestion3(e.target.value)} className="select">
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
            <option value="Não sei">Não Sei</option>
            <option value="Agora!!">Agora!!</option>
          </select>
        </section>
        <section>
          <h2>
            {'4) Por favor, justifique a resposta anterior.'}
          </h2>
          <textarea
            value={question4}
            onChange={e => setQuestion4(e.target.value)}
            maxLength="200"
            className="textarea"
          />
        </section>
        <button disabled={disabled} className="submitBtn" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
      <button className="button" onClick={() => navigate('/total')}>
        Ver Total
      </button>
    </div>
  );
}

export default Home;