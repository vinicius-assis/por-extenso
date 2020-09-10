import React from 'react'
import { Label, Field } from './styles'



const Input = ({ action }) => (
  <Label>
    Valor
    <Field onChange={action}/>
  </Label>
)

export default Input