import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Header component for the main application layout.
 * It acts as a structural slot for the TopHeader content component.
 */
const Header: React.FC = () => {
  // The TopHeader component from the context code already contains all necessary styling,
  // including height, sticky positioning, background color, and border.
  // This wrapper component serves primarily as a semantic <header> element and a
  // designated slot within the MainAppLayout grid.
  return (
    <header>
      <TopHeader />
    </header>
  );
};

export default Header;
