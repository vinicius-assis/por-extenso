import React from 'react'
import { Label, Field } from './styles'



const Input = ({ action, value }) => (
  <Label>
    Valor
    <Field onChange={action} value={value} placeholder="R$0,00"/>
  </Label>
)

export default Input