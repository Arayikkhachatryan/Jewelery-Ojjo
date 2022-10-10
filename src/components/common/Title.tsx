import styled, { css } from "styled-components";

type TitleProps = {
  textTransform?: string;
  fw?: number;
  type?: string;
};

const Title = styled.p<TitleProps>`
  text-transform: ${(props) => props.textTransform || "capitalize"};
  color: ${({ theme, color }) => color || theme.typography.colors.gray};
  font-weight: ${(props) => props.fw || 400};
  ${(props) => {
    switch (props.type) {
      case "mode1":
        return css`
          font-size: ${props.theme.typography.titles.mode1.fontSize};
          line-height: ${props.theme.typography.titles.mode1.lineHeight};
        `;
      default:
        return css`
          font-size: ${props.theme.typography.titles.default.fontSize};
          line-height: ${props.theme.typography.titles.default.lineHeight};
        `;
    }
  }}
`;

export default Title;
