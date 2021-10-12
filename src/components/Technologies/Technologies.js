import React from 'react';
import { DiBrackets, DiWebplatform, DiDatabase, DiNodejsSmall, DiOnedrive } from 'react-icons/di';
import { HiServer } from 'react-icons/hi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider colorAlt/>
    <SectionTitle>
      Technologies
    </SectionTitle>
    <List>
      <ListItem>
        <DiWebplatform size="3rem"/>
        <ListContainer>
          <ListTitle>Web</ListTitle>
          <ListParagraph>
            HTML, CSS, JavaScript
          </ListParagraph>
          <ListParagraph>
          TypeScript, jQuery
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBrackets size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End Frameworks</ListTitle>
          <ListParagraph>
            ReactJS, Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem"/>
        <ListContainer>
          <ListTitle>Server Side</ListTitle>
          <ListParagraph>
            NodeJS, Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem"/>
        <ListContainer>
          <ListTitle>DataBases</ListTitle>
          <ListParagraph>
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <HiServer size="3rem"/>
        <ListContainer>
          <ListTitle>CMS</ListTitle>
          <ListParagraph>
            Adobe Experience Manager (AEM)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
