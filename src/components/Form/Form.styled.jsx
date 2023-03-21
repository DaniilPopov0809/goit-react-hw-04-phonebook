import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
  
    width: 300px;
    margin-bottom: 20px;
    padding: 10px 20px;
  
    border: 1px solid ${props => props.theme.colors.textColor};
    border-radius: 10px;
  `;
  
  export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  
    font-weight: 500;`;
  
    export const Input = styled.input` 
  
    width: 200px;
    margin-top: 10px;
  
    color: ${props => props.theme.colors.textColor};
  
    border: 1px solid ${props => props.theme.colors.textColor};
    border-radius: 5px;
    background-color: ${props => props.theme.colors.bgcContainer};

    &:hover,
    &:focus {
    border: 2px solid ${props => props.theme.colors.textColor};
    outline-color: ${props => props.theme.colors.textColor};
  }
  `;
  
  export const Button = styled.button`
    width: 100px;
    padding: 2px 0;
  
    background-color: transparent;
    color: ${props => props.theme.colors.textColor};
  
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.textColor};
  
    transition: scale 250 cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250 cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover,
  &:focus {
    scale: 1.1;
  }
  
  &:active {
    background-color: ${props => props.theme.colors.bgcBtnActive};
  }
`;