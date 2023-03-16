import styled from '@emotion/styled';

export const List = styled.ul`
  padding-left: 30px;
`;

export const Container = styled.span`
  margin-right: 20px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  padding: 2px 7px;

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
