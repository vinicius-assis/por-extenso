import React from 'react';
import GlobalStyle from './styles/GlobalStyle'
import Input from './components/Input';
import Button from './components/ConvertButton';
import Display from './components/Display';

const App = () => {
  const [number, setNumber] = React.useState('')

  function handleChange (e) {
    e.preventDefault()
    setNumber(e.target.value)
  }

  return (
    <>
      <GlobalStyle />
      <Input action={handleChange}/>
      <Button />
      <Display>{number}</Display>
    </>
  );
}

export default App;
