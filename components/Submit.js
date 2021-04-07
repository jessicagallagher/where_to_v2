import React from 'react';

export default function Submit ({ navigation }) {
  const { go } = navigation;

  return (
    <>
    <h3>Thank you for submitting. We'll be in touch!</h3>
    <button onClick={() => go('step1')}>New</button>
    </>
  );
};