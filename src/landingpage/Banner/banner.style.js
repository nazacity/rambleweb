import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerWrapper = styled.div`
  padding-top: 100px;
  min-height: 802px;
  overflow: hidden;
  position: relative;
  background-image: -moz-linear-gradient(
    139deg,
    rgb(100, 43, 115) 0%,
    rgb(198, 66, 110) 100%
  );
  background-image: -webkit-linear-gradient(
    139deg,
    rgb(100, 43, 115) 0%,
    rgb(198, 66, 110) 100%
  );
  background-image: -ms-linear-gradient(
    139deg,
    rgb(100, 43, 115) 0%,
    rgb(198, 66, 110) 100%
  );
  @media only screen and (max-width: 480px) {
    padding-top: 90px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: calc(100vh - 100px);
      margin-top: 35px;
      align-items: flex-start;
    }
    @media only screen and (max-width: 1099px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }
  .bannerBottomShape {
    position: absolute;
    right: 0;
    bottom: -2px;
    @media only screen and (max-width: 999px) {
      display: none;
    }
  }
`;

export const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  color: ${themeGet('colors.menu', '#0D233E')};

  .rating {
    margin-right: 10px;
    .star {
      color: ${themeGet('colors.white', '#fff')};
    }
    .star-o {
      color: #e8e8e8;
    }
  }

  img {
    margin-left: 9px;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;

    &.primary {
      background-color: ${themeGet('colors.white', '#fff')};
      color: rgb(15, 33, 55);
      font-size: 16px;
      letter-spacing: -0.1px;
      &:hover {
        box-shadow: #1e2a4a 0px 12px 24px -10px;
      }
    }

    &.text {
      font-size: 16px;
      color: ${themeGet('colors.white', '#fff')};
      letter-spacing: -0.1px;
      font-weight: 500;
      .btn-icon {
        i {
          color: #fff;
        }
        svg {
          width: auto;
          height: 25px;
        }
      }
    }
  }
`;
export const VideoWrapper = styled.div`
  max-width: 100%;
  width: 900px;
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export default BannerWrapper;
