"use client";

import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

const FacebookPixel = () => {
  useEffect(() => {
    const options = {
      autoConfig: true, // Enable autoConfig
      debug: false, // Set true for debugging in development
    };

    ReactPixel.init(process.env.NEXT_PUBLIC_FB_PIXEL_ID, options);
    ReactPixel.pageView(); // Track page view
    ReactPixel.revokeConsent(); // GDPR compliance: revoke consent by default
    ReactPixel.grantConsent();
  }, []);

  const grantConsent = () => {
    ReactPixel.grantConsent();
    console.log('User consent granted for tracking.');
  };

  return (
    <div>
      {/* GDPR consent button */}
      {/* <button onClick={grantConsent} className="bg-blue-500 text-white px-4 py-2 rounded">
        Accept Cookies
      </button> */}
    </div>
  );
};

export default FacebookPixel;
