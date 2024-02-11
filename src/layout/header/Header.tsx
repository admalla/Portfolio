import React from 'react';
import { Menu } from '../../components/menu/Menu';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { SocialBlock } from '../../components/socialBlock/socialBlock';
import { FlexWrapper } from '../../components/FlexWrapper';

export const socialItems = ['social-github', 'telegram', 'in']
export const menuItems = ['Home', 'Tech Stack', 'Projects', 'Contact']

export function Header() {
  return (
    <StyledHeader>
      <Icon iconId={'code-svg'} width="50" height="50" viewBox="0 0 50 50" />
      <FlexWrapper>
        <Menu items={menuItems}/>
        <SocialBlock items={socialItems}/>
      </FlexWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0;
  background: #1C080A;
  position: fixed;
  right: 0;
  left: 0;
  top: 0
`;
