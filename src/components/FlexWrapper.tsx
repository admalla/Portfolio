import styled from "styled-components";

type Props = {
  direction?: string
  align?: string
  justify?: string
  wrap?: string
  gap?: string
}

export const FlexWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap}
`