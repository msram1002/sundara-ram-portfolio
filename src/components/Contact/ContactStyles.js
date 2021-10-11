import styled from 'styled-components';

export const GridContainer = styled.section `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem 0;
  column-gap: 3rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 400px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
`;

export const Textarea = styled.textarea`
  width: 400px;
  height: 125px;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
`;