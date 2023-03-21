import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: 500;
`;

export const Input = styled.input` 
  
    width: 200px;
    margin-bottom: 20px;
    margin-top: 10px;
  
    color: ${props => props.theme.colors.textColor};
  
    border: 1px solid ${props => props.theme.colors.textColor};
    border-radius: 5px;

    background-color: ${props => props.theme.colors.bgcContainer};

  &:hover,
  .input:focus {
    border: 2px solid ${props => props.theme.colors.textColor};
    outline-color: ${props => props.theme.colors.textColor};
  }
  `;
