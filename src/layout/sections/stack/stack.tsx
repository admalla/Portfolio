import React from 'react';
import { StyledTitle } from '../../../components/styledTitle';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';

export function Stack() {
  const stackItems = [
    'html',
    'css',
    'js',
    'react',
    'redux',
    'sass',
    'git',
    'github',
    'styled',
    'radix',
    'storybook',
    'typescript',
  ];
  return (
    <StyledStack id="Tech Stack">
      <StyledTitle size="30px">My Tech Stack</StyledTitle>
      <StyledDescription> Technologies I’ve been working with recently</StyledDescription>
      <FlexWrapper justify="space-between" wrap="wrap">
        {stackItems.map((item) => {
          return (
            <Icon
              width="150"
              height="90"
              viewBox="0 0 32 32"
              iconId={item}
              style={{ marginTop: '40px' }}
            />
          );
        })}
      </FlexWrapper>
    </StyledStack>
  );
}

const StyledStack = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
`;
const StyledDescription = styled.p`
  font-size: 20px;
`;
