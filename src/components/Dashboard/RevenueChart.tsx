import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const revenueData = [
  { name: 'March', closedWon: 65, closedLost: 68 },
  { name: 'April', closedWon: 25, closedLost: 45 },
  { name: 'May', closedWon: 62, closedLost: 98 },
  { name: 'June', closedWon: 81, closedLost: 5 },
  { name: 'July', closedWon: 92, closedLost: 42 },
  { name: 'August', closedWon: 30, closedLost: 95 },
];

const RevenueChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'came' | 'converted' | 'size'>('converted');

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
                <CardTitle>Leads tracking</CardTitle>
                <div className="flex items-baseline gap-4 mt-2">
                    <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold">680</p>
                        <p className="text-sm text-muted-foreground">total closed</p>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold">70</p>
                        <p className="text-sm text-muted-foreground">total lost</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                 <Button variant={activeTab === 'came' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('came')}>Leads came</Button>
                 <Button variant={activeTab === 'converted' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('converted')}>Leads Converted</Button>
                 <Button variant={activeTab === 'size' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('size')}>Total deals size</Button>
            </div>
        </div>
         <div className="flex justify-end mt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="text-muted-foreground">
                        last 6 months
                        <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Last 3 months</DropdownMenuItem>
                    <DropdownMenuItem>Last 12 months</DropdownMenuItem>
                    <DropdownMenuItem>All time</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e73a5e" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#e73a5e" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
            <Tooltip 
                contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))' 
                }}
            />
            <Legend 
              iconType="square" 
              iconSize={8}
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => <span className="text-muted-foregroundcapitalize">{value.replace(/_/g, ' ')}</span>}
            />
            <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" />
            <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="#e73a5e" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
