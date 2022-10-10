import styled from "styled-components";

export const SectionHomeWrapper = styled.section`
  position: relative;
  .main {
    &-img {
      > img {
        position: absolute;
        width: 100%;
        height: 950px;
        object-fit: cover;
        z-index: -1;
      }
      &-title {
        display: flex;
        align-items: center;
        justify-content: end;
        flex-direction: column;
        height: 950px;
        > p {
          padding-bottom: 50px;
          color: ${({ theme }) => theme.typography.colors.white};
        }
        > button {
          background-color: ${({ theme }) => theme.typography.colors.gray};
          border: 1px solid ${({ theme }) => theme.typography.colors.white};
          width: 260px;
          height: 50px;
          > p {
            color: ${({ theme }) => theme.typography.colors.white};
          }
          margin-bottom: 80px;
        }
      }
      &-sponsers {
        padding: 30px;
        border-top: 1px solid ${({ theme }) => theme.typography.colors.white};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        > img {
          :not(:last-child) {
            border-right: 1px solid
              ${({ theme }) => theme.typography.colors.white};
          }
          padding: 0 15px;
        }
      }
    }
  }
`;
