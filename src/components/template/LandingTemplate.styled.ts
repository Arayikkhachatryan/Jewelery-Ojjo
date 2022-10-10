import styled from "styled-components";

export const LandingTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.typography.colors.white};

  > main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const LandingHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  background-color: ${({ theme }) => theme.typography.colors.gray};
  > div {
    width: 1110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

export const LandingHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    color: ${({ theme }) => theme.typography.colors.white};
    :not(:last-child) {
      padding-right: 40px;
    }
  }
`;
export const LandingHeaderCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const LandingHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    color: ${({ theme }) => theme.typography.colors.white};
  }

  .header-search {
    display: flex;
    align-items: center;
    padding-right: 40px;

    > button {
      color: ${({ theme }) => theme.typography.colors.white};
      padding-left: 16px;
    }
  }
  .header-icons {
    padding-left: 40px;

    > svg {
      cursor: pointer;
      :not(:first-child) {
        margin-left: 30px;
      }
    }
  }
`;

export const LandingFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandingFooterWrapper = styled.div`
  padding: 80px 20px 20px 20px;

  .footer {
    display: flex;
    &-column {
      width: 255px;
      padding-bottom: 60px;
      :not(:last-child) {
        padding-right: 30px;
      }
      > p {
        :nth-child(2) {
          padding-top: 30px;
        }
        :not(:first-child):not(:nth-child(2)) {
          padding-top: 15px;
        }
      }
      &-cards {
        padding-top: 15px;
      }
      &-contacts {
        padding-top: 15px;
        display: flex;
        align-items: center;
        :nth-child(2) {
          padding-top: 30px;
        }
        > p {
          padding-left: 20px;
        }
      }
      &-socials {
        padding-top: 15px;
        display: flex;
        justify-content: space-between;
      }
      &-title {
        color: ${({ theme }) => theme.typography.colors.gray};
        border-bottom: 1px solid ${({ theme }) => theme.typography.colors.gray};
        padding-bottom: 5px;
      }
    }
  }
  .footer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${({ theme }) => theme.typography.colors.gray};
    padding-top: 20px;
  }
`;
