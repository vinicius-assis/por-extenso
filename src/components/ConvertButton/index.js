import React from 'react'
import { Button, Icon } from './styles'

import ConvertIcon from '../../assets/convert-arrow.png'

const ConvertButton = ({ handleClick }) => (
  <Button onClick={handleClick}>
    <Icon img={ConvertIcon}/>
  </Button>
)

export default ConvertButton