import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Sidebar component for the main application layout.
 * It defines the container for the main navigation, setting its width and grid positioning.
 */
const Sidebar: React.FC = () => {
  return (
    // This aside element defines the sidebar's container properties within the main grid layout.
    // 'w-64' sets a fixed width as per the layout requirements.
    // 'row-span-2' makes it span both rows of the parent grid (header row and content row).
    // 'border-r' adds a visual separation from the main content.
    // 'bg-sidebar' ensures a consistent background, defined in tailwind.config.ts.
    <aside className="w-64 row-span-2 flex flex-col border-r border-border bg-sidebar">
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
