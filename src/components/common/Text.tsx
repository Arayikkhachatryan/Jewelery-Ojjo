import styled, { css } from "styled-components";

type TextProps = {
  textTransform?: string;
  fw?: number;
  type?: string;
  color?: string;
};

const Text = styled.p<TextProps>`
  text-transform: ${(props) => props.textTransform};
  color: ${({ theme, color }) => color || theme.typography.colors.black};
  font-weight: ${(props) => props.fw || 400};

  ${(props) => {
    switch (props.type) {
      case "mode1":
        return css`
          font-size: ${props.theme.typography.texts.mode1.fontSize};
          line-height: ${props.theme.typography.texts.mode1.lineHeight};
        `;
      case "mode2":
        return css`
          font-size: ${props.theme.typography.texts.mode2.fontSize};
          line-height: ${props.theme.typography.texts.mode2.lineHeight};
        `;
      default:
        return css`
          font-size: ${props.theme.typography.texts.default.fontSize};
          line-height: ${props.theme.typography.texts.default.lineHeight};
        `;
    }
  }}
`;

export default Text;
