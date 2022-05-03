import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowPercent from '../components/ShowPercent';
import axios from 'axios';
import '../styles/Total.css';

function Total() {
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);
  const [nonAvailable, setNonAvailable] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalArray, setTotalArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/').then(res => {
      setPositive(res.data.positive);
      setNegative(res.data.negative);
      setNonAvailable(res.data.nonAvailable);
    })
  }, []);

  useEffect(() => {
    const positivePercent = ((positive * 100) / total).toFixed(2);
    const negativePercent = ((negative * 100) / total).toFixed(2);
    const nonAvailablePercent = ((nonAvailable * 100) / total).toFixed(2);
    const allArray = [{
      name: 'Positiva',
      value: positive,
      percent: positivePercent
    }, {
      name: 'Negativa',
      value: negative,
      percent: negativePercent
    }, {
      name: 'Não Avaliada',
      value: nonAvailable,
      percent: nonAvailablePercent
    }];
    // sort array by percent
    setTotalArray(allArray.sort((a, b) => b.percent - a.percent));
}, [positive, negative, nonAvailable, total]);

  useEffect(() => {
    setTotal(positive + negative + nonAvailable);
  }, [positive, negative, nonAvailable]);

  return (
    <div className="Home">
      <div className="totalPage">
        <section className="totalSection">
          <h2>
            Total
          </h2>
          <section className="total">
            {total}
          </section>
        </section>
        <section className="percentSection">
          {totalArray.map(answer => (
            <ShowPercent answer={answer} />
          ))}
        </section>
      </div>
      <button className="button" onClick={() => navigate('/')}>
        Pagina Inicial
      </button>
    </div>
  )
}

export default Total