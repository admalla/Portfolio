import styled from "styled-components"

type Props = {
  placeholder?: string
}
export const StyledInput = styled.input<Props>`
  width: 540px;
  height: 25px;
  color: white;
  padding: 13px 10px;
  background: #4A4A4A;
  border: 1px solid grey;
  placeholder: ${props => props.placeholder};

  &:hover {
    border: 1px solid pink
  }
`