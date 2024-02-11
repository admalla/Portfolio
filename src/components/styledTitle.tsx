import styled from "styled-components";

type Props = {
  size?: string;
  color?: string
}

export const StyledTitle = styled.h2<Props>`
  font-size: ${props => props.size};
  color: ${props => props.color}
`