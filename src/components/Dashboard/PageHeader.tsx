import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PageHeader: React.FC = () => {
  return (
    <div className="px-6 pt-6">
      <Tabs defaultValue="leads">
        <TabsList className="bg-transparent p-0">
          <TabsTrigger 
            value="sales" 
            className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger 
            value="leads" 
            className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4"
          >
            Leads
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PageHeader;
