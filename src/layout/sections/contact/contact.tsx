import React, { ElementRef, useRef } from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../../components/styledTitle';
import { StyledInput } from '../../../components/StyledInput';
import { FlexWrapper } from '../../../components/FlexWrapper';
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return

    emailjs
      .sendForm('service_7slqzgi', 'template_gluvmdg', form.current, {
        publicKey: 'QyjCMJKwCnjnXPFJu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <StyledContact id="Contact">
      <StyledTitle size='40px'>For any questions please mail me:</StyledTitle>
      <form ref={form} onSubmit={sendEmail}>
        <FlexWrapper direction='column' align='center' gap='10px'>
          <StyledInput required placeholder='name' name={'user_name'} />
          <StyledInput required placeholder='subject' name={'subject'}/>
          <StyledInput required placeholder='your email' name={'email'} />
          <InputMessage required placeholder='message' name={'message'} />
          <Button>Send</Button>
        </FlexWrapper>
      </form>
    </StyledContact>
  );
}

const StyledContact = styled.section`
  text-align: center;
  padding: 30px 0 50px;

  h2 {
    margin-bottom: 30px
  };
`;

const InputMessage = styled.textarea`
  width: 540px;
  height: 200px;
  color: white;
  border: 1px solid grey;
  background: #4A4A4A;
  padding: 10px;

  &:hover {
    border: 1px solid pink
  }
`
const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border: 1px solid grey;
  color: white;
  background-color: grey;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;

  &:active {
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3) Inset;
  }
`


