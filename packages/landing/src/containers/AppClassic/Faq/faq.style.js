import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  max-width: 320px;
  padding: 6px;
  margin: 20px auto;
  border-radius: 5px;
  background-color: ${themeGet('colors.inactiveField', '#f7f8fb')};

  button {
    border: 0;
    padding: 15px 26px;
    border-radius: 5px;
    color: rgba(15, 33, 55, 0.5);
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    @media only screen and (max-width: 480px) {
      font-size: 15px;
    }

    &.active {
      color: ${themeGet('colors.headingColor', '#0f2137')};
      background-color: ${themeGet('colors.white', '#ffffff')};
      box-shadow: 0 3px 4px
        ${themeGet('colors.shadow', 'rgba(38, 78, 118, 0.1)')};
    }
  }
`;

const FaqSection = styled.section`
  padding: 75px 0;
  overflow: hidden;
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }

  .reusecore__accordion {
    max-width: 750px;
    margin: 0 auto;

    .accordion__item {
      border-top: 0;
      border-bottom: 1px solid ${themeGet('colors.inactiveIcon', '#ebebeb')};

      &:last-child {
        border-bottom: 0;
      }

      .accordion__header {
        padding: 16px 0;

        > div {
          flex-direction: row-reverse;
          justify-content: flex-start;

          .icon-wrapper {
            width: 30px;
            flex-grow: 0;
            flex-shrink: 0;
            margin-left: 0;
            margin-right: 12px;
            color: ${themeGet('colors.primary', '#2563FF')};
            @media only screen and (max-width: 767px) {
              margin-right: 15px;
            }
          }
        }
      }

      .accordion__body {
        padding: 0 0 20px 41px;
      }
    }

    iframe, img {
      width: 50vw;
      height: 50vh;
      max-width: 1000px;
      max-height: 600px;
    }

    @media only screen and (max-width: 480px) {
      iframe, img {
        margin-top: 20px;
        width: 70vw; /* Adjusted for smaller screens */
        height: auto; /* Adjust height automatically based on the aspect ratio */
        max-height: 300px; /* Set a maximum height */
      }
    }

    img {
      height: auto;
    }


    @media only screen and (max-width: 480px) {
      img {
        height: auto; 
      }
    }


    h3,
    p {
      margin: 0;
    }

    h3 {
      font-size: 18px;
      line-height: 40px;
      font-weight: 500;
      color: ${themeGet('colors.headingColor', '#0F2137')};
      @media only screen and (max-width: 667px) {
        font-size: 16px;
        line-height: 28px;
      }
    }

    p {
      font-size: 15px;
      line-height: 28px;
      color: ${themeGet('colors.textColor', 'rgba(52, 61, 72, 0.8)')};
      margin-bottom: 20px;
    }
  }
`;

export default FaqSection;
