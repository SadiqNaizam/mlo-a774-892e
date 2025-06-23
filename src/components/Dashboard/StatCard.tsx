import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-indigo-900' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const FunnelProgressBar: React.FC<{ data: FunnelStage[] }> = ({ data }) => {
  const totalCount = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="flex w-full h-2 rounded-full overflow-hidden my-4">
      {data.map((item, index) => (
        <TooltipProvider key={index} delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={item.color}
                style={{ width: `${(item.count / totalCount) * 100}%` }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{`${item.name}: ${item.count}`}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

const StatCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <p className="text-4xl font-bold">600</p>
          <p className="text-muted-foreground">active leads</p>
        </div>
        <FunnelProgressBar data={funnelData} />
        <div className="space-y-3 mt-4">
          <div className="grid grid-cols-4 text-sm text-muted-foreground font-medium">
            <span>Stage</span>
            <span className="text-right">Count</span>
            <span className="text-right">Value</span>
            <span className="text-right">Duration</span>
          </div>
          {funnelData.map((stage) => (
            <div key={stage.name} className="grid grid-cols-4 items-center text-sm font-medium">
              <div className="flex items-center">
                <span className={`w-2.5 h-2.5 rounded-full ${stage.color} mr-2`}></span>
                <span className='text-foreground'>{stage.name}</span>
              </div>
              <span className="text-right text-muted-foreground">{stage.count}</span>
              <span className="text-right text-muted-foreground">$ {stage.value}</span>
              <span className="text-right text-muted-foreground">{stage.duration}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
