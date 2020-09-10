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

  function handleClick () {
    const regex = new RegExp('[^0-9,]', 'g')
    const [reais, centavos] = number.replace(regex, '').split(',')
       
    setExtenso(createResult(reais, centavos))
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
