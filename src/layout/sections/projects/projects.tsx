import React from 'react'
import styled from 'styled-components'
import { StyledTitle } from '../../../components/styledTitle'
import { Project } from './project/project'
import photoLearn from '../../../assets/images/kartochki.jpg'
import photoSocial from '../../../assets/images/social-network.jpg'
import photoTodo from '../../../assets/images/todolist.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'

export function Projects() {
  

  return (
    <StyledProjects id="Projects">
      <StyledTitle size='30px'>Projects</StyledTitle>
      <Description>Things I’ve built so far</Description>
      <WrapperItems>
        <Project 
          photo={photoLearn}
          title="Project Learn Cards"
          text="Learn Cards allows the user not only to learn other people's cards, but also to create their own  cards as well"
          stack='HTML/SCSS, JS, React/Redux(RTK Query), Radix'
          linkLive="https://learn-cards-pi.vercel.app/packs"
          linkGitHub="https://github.com/admalla/Learn-cards"
        />
        <Project 
          photo={photoSocial}
          title="Project Social Network"
          text="A social platform for exchanging messages, dating and having a good time"
          stack='HTML/SCSS, JS/TS, React/Redux, Ant Design'
          linkLive="https://admalla.github.io/samurai-way-TS/"
          linkGitHub="https://github.com/admalla/samurai-way-TS"
        />
        <Project 
          photo={photoTodo}
          title="Project Todo List"
          text="Convenient planner for tasks and upcoming to-do's"
          stack='HTML/SCSS, JS, React/Redux(RTK), Material UI'
          linkLive="https://admalla.github.io/IT-IN_todo-ts_training/"
          linkGitHub="https://github.com/admalla/IT-IN_todo-ts_training"
        />
      </WrapperItems>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  min-height: 110vh;
  text-align: center;
`
const Description = styled.p`
  font-size: 20px
`
const WrapperItems = styled(FlexWrapper)`
  gap: 20px
`
