import styled from 'styled-components';

export const Img = styled.img `
  width: 100%;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
  height: 35vh;
`;

export const GridContainer = styled.section `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 3rem 0 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div `
  border-radius: 1.5rem;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  width: 325px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div `
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3 `
  font-weight: 600;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 1.75rem 0.5rem 0.5rem 0.5rem;
  font-size: ${(props) => props.title ? '2.5rem' : '1.75rem'};
`;

export const Hr = styled.hr `
  width: 80px;
  height: 3px;
  margin: 20px auto;
  border: none;
  border-radius: 10px;
  background: linear-gradient(270deg,#F46737 0%,#945DD6 100%);
`;

export const Intro = styled.div `
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p `
  width: 100%;
  padding: 0 2rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2em;
  height: 85px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: .3rem;
  }
`;

export const UtilityList = styled.ul `
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1rem 0 2rem;
`;

export const ExternalLinks = styled.a `
  color: #d4c0c0;
  font-size: 1.4rem;
  padding: 0.8rem 2rem;
  background: #0F1624;
  border: 1px solid #fff;
  border-radius: 2rem;
  transition: 0.5s;
  &:hover {
    background: #9cc9e3;
    color: #000;
  }
`;

export const TagList = styled.ul `
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0 2rem;
`;

export const Tag = styled.li `
  color: #d8bfbf;
  font-size: 1.5rem;
`;