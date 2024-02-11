import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { menuItems, socialItems } from '../header/Header';
import { Icon } from '../../components/icon/Icon';
import { SocialBlock } from '../../components/socialBlock/socialBlock';
import { FlexWrapper } from '../../components/FlexWrapper';

export function Footer() {
  return <StyledFooter>
    <Info justify='space-between' align='center'>
      <Icon iconId={'code-svg'} width="50" height="50" viewBox="0 0 50 50" />
      <MyContacts align='center'>
        <span>+90 505 828 37 90</span>
        <SocialBlock items={socialItems} />
      </MyContacts>
    </Info>
    <hr/>
    <Menu items={menuItems}/>
  </StyledFooter>;
}

const StyledFooter = styled.section`
  hr {
    border: 1px solid grey;
    opacity: 50%;
    margin: 20px 0
  }
`;
const Info = styled(FlexWrapper)``;

const MyContacts = styled(FlexWrapper)`
  gap: 20px
`
