import styled from 'styled-components'

export const Button = styled.button`
  width: 60px;
  height: 60px;
  overflow: hidden;
  padding: 0;
  margin-top: 20px;
`
export const Icon = styled.img.attrs( props => ({
  src: props.img,
}))`
  width: 30px;
  height: 30px;
`

