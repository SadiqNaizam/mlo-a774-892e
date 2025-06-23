import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * MainAppLayout defines the primary structure of the dashboard application.
 * It utilizes a CSS Grid to position the Sidebar, Header, and main content area,
 * conforming to the specified HLSB (Header, Left Sidebar, Body) layout.
 * The layout is fixed to the viewport height, with only the main content area being scrollable.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr] overflow-hidden bg-background">
      {/* Sidebar: Occupies the first column and spans both rows of the grid. */}
      <Sidebar />

      {/* Header: Occupies the first row of the second column. */}
      {/* Note: Sticky positioning is handled within the Header/TopHeader component itself. */}
      <Header />

      {/* Main Content Area: Occupies the second row of the second column. */}
      {/* 'overflow-y-auto' enables vertical scrolling for content that exceeds the viewport height. */}
      {/* 'p-6' provides standard padding around the content. */}
      <main className="overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
