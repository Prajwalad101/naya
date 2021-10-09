import { useState } from 'react';

import React from 'react';
import { HeadingSection } from './HeadingSection';
import Title from './Title';
import { Items } from './Items';
import { Snackbar } from './Snackbar';

export const SnackbarContext = React.createContext();

export const Main = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  return (
    <SnackbarContext.Provider value={{ showSnackbar, setShowSnackbar }}>
      <Snackbar />
      <Title />
      <HeadingSection />
      <Items />
    </SnackbarContext.Provider>
  );
};
