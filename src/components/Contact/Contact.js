import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Section, SectionDivider, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import { MdEmail } from 'react-icons/md';
import { Form, Input, Textarea, GridContainer } from './ContactStyles';
import Button from '../../styles/GlobalComponents/Button';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../Technologies/TechnologiesStyles';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zorltj8', 'template_ntj9zra', form.current, 'user_NI1uocIPyNM3BLSRkZE3p')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Section id="contact">
      <SectionDivider divider colorAlt/>
      <SectionTitle>Contact</SectionTitle>
      <GridContainer>
        <List style={{margin: "0"}}>
          <ListItem>
            <MdEmail size="2rem"/>
            <ListContainer>
              <ListTitle>Email</ListTitle>
              <ListParagraph>
                matta.sundar88@gmail.com
              </ListParagraph>
              
            </ListContainer>
          </ListItem>
        </List>
        <div>
          <SectionSubText>Would love to get in touch. <br/>Send me a message.</SectionSubText>
          <Form ref={form} onSubmit={sendEmail}>
            {/* <label>Subject</label> */}
            <Input type="text" name="user_subject" placeholder="Subject"  />
            {/* <label>Name</label> */}
            <Input type="text" name="user_name" placeholder="Enter your name"  />
            {/* <label>Email</label> */}
            <Input type="email" name="user_email" placeholder="Enter a valid email address"  />
            {/* <label>Message</label> */}
            <Textarea name="message" placeholder="Enter your message" />
            {/* <Input /> */}
            <Button type="submit" value="Send" alt>
              Send
            </Button>
            <SectionSubText top>{done && "Thank you for the email!"}</SectionSubText>
          </Form>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Contact;
