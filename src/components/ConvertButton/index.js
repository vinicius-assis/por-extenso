import React from 'react'
import { Button, Icon } from './styles'

import ConvertIcon from '../../assets/convert-arrow.png'

const ConvertButton = () => (
  <Button>
    <Icon img={ConvertIcon}/>
  </Button>
)

export default ConvertButton