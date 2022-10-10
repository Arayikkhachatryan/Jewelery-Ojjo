import styled, { css } from "styled-components";

type ButtonProps = {
  mode?: string;
};

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  ${({ mode, theme }) => {
    switch (mode) {
      case "mode1":
        return css`
          background-color: ${theme.typography.colors.white};
          > p {
            color: ${theme.typography.colors.gray};
            text-transform: uppercase;
          }
        `;
      case "mode2":
        return css`
          background-color: ${theme.typography.colors.white};
          border: 1px solid ${theme.typography.colors.grayPallete1};
          > p {
            color: ${theme.typography.colors.gray};
            text-transform: uppercase;
          }
        `;
      default:
        return css`
          background-color: ${theme.typography.colors.gray};
          > p {
            color: ${theme.typography.colors.white};
            text-transform: uppercase;
          }
        `;
    }
  }}
`;

export default Button;
