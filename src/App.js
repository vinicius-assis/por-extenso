import React from 'react';
import numero from 'numero-por-extenso'

import GlobalStyle from './styles/GlobalStyle'

import Input from './components/Input';
import Button from './components/ConvertButton';
import Display from './components/Display';

const App = () => {
  const [number, setNumber] = React.useState('')
  const [extenso, setExtenso] = React.useState('')
  const [err, setErr] =  React.useState(null)

  function handleChange (e) {
    let value = e.target.value
    if (!value) {
      setErr(true)
    } else {
      setErr(false)
      setNumber(money(value))
    }
  }

  function createResult(reais, centavos) {
    const reaisExtenso = reais === '0' 
      ? ''
      :  reais === '1' 
        ?  `${numero.porExtenso(reais)} real` 
        : `${numero.porExtenso(reais)} reais`

    const centExtenso = centavos === '00' 
      ? '' 
      : centavos === '01' 
        ? `${numero.porExtenso(centavos)} centavo`
        : `${numero.porExtenso(centavos)} centavos`
  
    return !!reaisExtenso && !!centExtenso ? `${reaisExtenso} e ${centExtenso}` : `${reaisExtenso}${centExtenso}`
  }

  function handleClick (e) {
    if (number && !(number.match(/R\$\s0,0{0,}$/g))) {
      const regex = new RegExp('[^0-9,]', 'g')
      const [reais, centavos] = number.replace(regex, '').split(',')
           
      setExtenso(createResult(reais, centavos))
    } else {
      setExtenso('')
      setErr(true)
    }
  }

  function money (value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(+value.replace(/\D+/g, '') / 100)
  }

  return (
    <>
      <GlobalStyle />
      <Input action={handleChange} value={number} err={err}/>
      <Button handleClick={handleClick} />
      {extenso && <Display>{extenso}</Display>}
    </>
  );
}

export default App;
