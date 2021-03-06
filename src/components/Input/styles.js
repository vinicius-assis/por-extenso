import styled from 'styled-components'

export const Label = styled.label`
  font-size: 1.8rem;
  text-align: center;

  display: flex;
  flex-direction: column;
`

export const Field = styled.input.attrs( props => ({
  placeholder: props.placeholder,
  maxLength: 19
}))`
  height: 45px;
  margin-top: 10px;
  font-size: 1.4rem;
  text-align: center;
  border: ${ props => props.err ? "2px solid rgba(255, 0, 0, 0.6)" : "2px solid #fff"};
  border-radius: 5px;
  `