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

export const SectionCategoriesWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1150px;
  margin: 0 auto;
  .categories {
    &-title {
      padding-top: 100px;
      padding-bottom: 60px;
      > p {
        :first-child {
          padding-bottom: 15px;
        }
      }
      text-align: center;
    }
    &-filters {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 20px 60px 20px;
      > button {
        height: 55px;
      }
      button {
        width: 165px;
      }
      div {
        border: 1px solid ${({ theme }) => theme.typography.colors.grayPallete1};
        height: 50px;
        > button {
          position: relative;
          bottom: 5px;
          right: 3px;
          height: 50px;
        }
      }
    }
    &-cards {
      display: grid;
      column-gap: 30px;
      row-gap: 30px;
      grid-template-columns: auto auto auto;
      padding: 0 20px 120px;
      &-item {
        position: relative;

        > img {
          z-index: -1;
          position: relative;
        }
        > p {
          position: absolute;
          text-transform: capitalize;
          color: ${({ theme }) => theme.typography.colors.white};
          bottom: 30px;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`;
