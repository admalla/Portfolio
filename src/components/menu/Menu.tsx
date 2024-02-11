import React from 'react';
import styled from 'styled-components';

export function Menu({ items }: { items: string[] }) {
  return (
    <StyledMenu>
      <StyledItems>
        {items.map((item) => {
          return (
            <StyledItem>
              <Link href={`#${item}`}>{item}</Link>
            </StyledItem>
          );
        })}
      </StyledItems>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  margin: 0 20px
`;

const StyledItems = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

const StyledItem = styled.li``;
const Link = styled.a`
  text-decoration: none;
  color: white
`;
