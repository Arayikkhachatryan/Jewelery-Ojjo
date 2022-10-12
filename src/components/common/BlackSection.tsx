import { FC, ReactNode } from "react";
import styled from "styled-components";

type BlackSectionProps = {
  children: ReactNode;
};

const Section = styled.section`
  height: 540px;
  > img {
    position: absolute;
    width: 100%;
    height: 540px;
    object-fit: cover;
    z-index: -1;
  }
`;

export const BlackSection: FC<BlackSectionProps> = ({ children }) => {
  return (
    <Section className="main-black">
      <img src="/images/black_background.png" alt="black background" />
      {children}
    </Section>
  );
};

export default BlackSection;
