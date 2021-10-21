import '../css/HeadingSection.css';

import React, { useState } from 'react';
import Items from './ExploreSection/Items';
import { Snackbar } from './Snackbar';
import TitleSection from './TitleSection/TitleSection';
import SearchBar from './SearchSection/SearchBar';
import HeadingSection from './HeadingSection/HeadingSection';
import ExploreSection from './ExploreSection/ExploreSection';

export const SnackbarContext = React.createContext();

export const Main = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  return (
    <SnackbarContext.Provider
      value={{ showSnackbar, setShowSnackbar, isMounted, setIsMounted }}
    >
      <Snackbar />
      <TitleSection />
      <SearchBar />
      <HeadingSection />
      <ExploreSection />
    </SnackbarContext.Provider>
  );
};
