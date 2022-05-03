import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Total() {
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);
  const [nonAvaiable, setNonAvaiable] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalArray, setTotalArray] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/').then(res => {
      setPositive(res.data.positive);
      setNegative(res.data.negative);
      setNonAvaiable(res.data.nonAvaiable);
    })
  }, []);

  useEffect(() => {
    const positivePercent = (positive * 100) / total;
    const negativePercent = (negative * 100) / total;
    const nonAvaiablePercent = (nonAvaiable * 100) / total;
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
      value: nonAvaiable,
      percent: nonAvaiablePercent
    }];
    // sort array by percent
    setTotalArray(allArray.sort((a, b) => b.percent - a.percent));
}, [positive, negative, nonAvaiable, total]);

  useEffect(() => {
    setTotal(positive + negative + nonAvaiable);
  }, [positive, negative, nonAvaiable]);

  return (
    <div>Total</div>
  )
}

export default Total