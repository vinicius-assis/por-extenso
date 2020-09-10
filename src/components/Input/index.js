import React from 'react'
import { Label, Field } from './styles'



const Input = ({ action, value, err }) => (
  <Label>
    Valor
    <Field onChange={action} value={value} err={err} placeholder="R$0,00"/>
  </Label>
)

export default Input