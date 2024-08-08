import React from 'react';
import DownloadButton from './button.style'; // Import the styled component
import appStore from 'common/assets/image/appClassic/appstore.png';
import googlePlay from 'common/assets/image/appClassic/googlePlay.png';
import NextImage from "../NextImage";
const AppDownloadButtons = () => {
  return (
      <div>
        <DownloadButton as="a" href="https://play.google.com/store/apps/details?id=yourapp">
          <NextImage src={googlePlay} alt="Google Play" />
          <span className="button-text">Play Market</span>
        </DownloadButton>
        <DownloadButton as="a" href="https://apps.apple.com/app/yourapp">
          <NextImage src={appStore} alt="App Store" />
          <span className="button-text">App Store</span>
        </DownloadButton>
      </div>
  );
};

export default AppDownloadButtons;
