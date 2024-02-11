import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';

type Props = {
  photo: string
  title: string
  text: string
  stack: string
  linkLive: string
  linkGitHub: string
}

export function Project(props: Props) {
  return (
    <StyledProject>
      <Image src={props.photo} alt="img" />
      <Box direction="column">
        <Title>{props.title}</Title>
        <Text>
          {props.text}
        </Text>
        <TechStack>Tech stack : <br/><span>{props.stack}</span></TechStack>
        <FlexWrapper justify='space-between'>
          <div>
            <Icon iconId="live" width="20" height="20" viewBox="0 0 20 20" />
            <Link href={props.linkLive}>Live Preview</Link>
          </div>
          <div>
            <Icon iconId="social-github" width="20" height="20" viewBox="0 0 33 33" />
            <Link href={props.linkGitHub}>View Code</Link>
          </div>
        </FlexWrapper>
      </Box>
    </StyledProject>
  );
}

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  max-width: 375px;
`;
const Box = styled(FlexWrapper)`
  padding: 0px 15px;
  & > :nth-child(odd) {
    min-height: 50px
  };
  & > :nth-child(even) {
    min-height: 60px
  }
`
const Image = styled.img`
  height: 220px
`;
const Title = styled.h2``;
const Text = styled.p`
  margin: 0px
`;
const TechStack = styled.div`
  margin: 5px 0;
  span {
    color: #551A8B
  }
`;
const Link = styled.a`
  margin-left: 7px
`;
