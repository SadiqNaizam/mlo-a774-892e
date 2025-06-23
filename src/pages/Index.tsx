```typescript
import React from 'react';

// Layout Component
import MainAppLayout from '../components/layout/MainAppLayout';

// Organism Components for the Dashboard
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import RevenueChart from '../components/Dashboard/RevenueChart';
import ReasonsForLeadLossCard from '../components/Dashboard/ReasonsForLeadLossCard';
import OtherStatsCard from '../components/Dashboard/OtherStatsCard';

// Theme Provider
import { ThemeProvider } from '../components/theme-provider';

/**
 * IndexPage serves as the main dashboard view for the application.
 * It orchestrates the layout and composition of various data visualization
 * components, such as stats cards, charts, and data grids, to provide a
 * comprehensive overview of leads tracking and funnel analysis.
 *
 * The page is structured using the MainAppLayout, which provides the consistent
 * sidebar and header across the application. The main content area is organized
 * into a flexible column layout to ensure responsiveness and clarity.
 */
const IndexPage: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <MainAppLayout>
        {/* Main content container with vertical spacing between elements */}
        <div className="flex flex-col gap-6">
          {/* Page header with contextual tabs like 'Sales' and 'Leads' */}
          <PageHeader />

          {/* A grid component that encapsulates the primary funnel count card 
              and the lead sources pie chart. It handles its own internal layout. */ }
          <StatsCardGrid />

          {/* The main revenue and leads tracking chart, spanning the full width of the content area. */}
          <RevenueChart />

          {/* A responsive grid for displaying supplementary data cards at the bottom of the page. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ReasonsForLeadLossCard />
            <OtherStatsCard />
          </div>
        </div>
      </MainAppLayout>
    </ThemeProvider>
  );
};

export default IndexPage;
```