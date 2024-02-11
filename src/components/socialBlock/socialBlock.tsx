import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type Props = {
  items: string[];
};

export function SocialBlock({ items }: Props) {
  const links: { [key: string]: string } = {
    'social-github': "https://github.com/admalla",
    'telegram': "https://t.me/admalla",
    "in": "https://www.linkedin.com/in/adam-suskhanov-99a52b107/"
  }
  
  return (
    <StyledBlock>
      {items.map((item: string) => {
        return (
          <StyledItem>
            <StyledLink href={links[item]} target="_blank">
              <Icon width="30" height="30" viewBox="0 0 32 32" iconId={item} />
            </StyledLink>
          </StyledItem>
        );
      })}
    </StyledBlock>
  );
}

const StyledBlock = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;
const StyledItem = styled.li`
`;
const StyledLink = styled.a``;
