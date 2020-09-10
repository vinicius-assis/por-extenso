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
    setNumber(e.target.value)
  }

  function handleClick () {
    const value = number
    if (number.match(/^[0-9]*$/)) {
      setExtenso(numero.porExtenso(value, numero.estilo.monetario))
    }
  }

  return (
    <>
      <GlobalStyle />
      <Input action={handleChange}/>
      <Button handleClick={handleClick} />
      <Display>{extenso}</Display>
    </>
  );
}

export default App;
