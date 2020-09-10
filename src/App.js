import React from 'react';
import numero from 'numero-por-extenso'

import GlobalStyle from './styles/GlobalStyle'

import Input from './components/Input';
import Button from './components/ConvertButton';
import Display from './components/Display';

const App = () => {
  const [number, setNumber] = React.useState('')
  const [extenso, setExtenso] = React.useState('')

  function handleChange (e) {
    e.preventDefault()
    let value = money(e.target.value)
    setNumber(value)
  }

  function handleClick () {
    const regex = new RegExp('[^0-9,]', 'g')
    const [reais, centavos] = number.replace(regex, '').split(',')

    if(centavos === '00') {
      return reais === '1' 
        ? setExtenso(`${numero.porExtenso(reais)} real`) 
        : setExtenso(`${numero.porExtenso(reais)} reais`)
    } else if (centavos == '01') {
      return reais === '1' 
        ? setExtenso(`${numero.porExtenso(reais)} real e ${numero.porExtenso(centavos)} centavo`) 
        : setExtenso(`${numero.porExtenso(reais)} reais e ${numero.porExtenso(centavos)} centavo`)
    } 
    else {
      return reais === '1' 
        ? setExtenso(`${numero.porExtenso(reais)} real e ${numero.porExtenso(centavos)} centavos`) 
        : setExtenso(`${numero.porExtenso(reais)} reais e ${numero.porExtenso(centavos)} centavos`)
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
      <Input action={handleChange} value={number}/>
      <Button handleClick={handleClick} />
      {extenso && <Display>{extenso}</Display>}
    </>
  );
}

export default App;
