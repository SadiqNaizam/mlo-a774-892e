import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Badge } from '@/components/ui/badge';

interface SourceData {
  name: string;
  value: number;
  amount: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 50, amount: 3000, color: '#f97316' },
  { name: 'Behance', value: 40, amount: 1000, color: '#facc15' },
  { name: 'Instagram', value: 10, amount: 1000, color: '#14b8a6' },
  { name: 'Dribbble', value: 10, amount: 1000, color: '#6ee7b7' },
];

const PieChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Tooltip 
                    contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))' 
                    }}
                    formatter={(value: number, name: string) => [`$${value}`, name]}
                />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  nameKey="name"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {data.map((entry, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
                  <span>{entry.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">${entry.amount}</span>
                  <span className="font-medium text-foreground">{entry.value}%</span>
                </div>
              </div>
            ))}
             <div className="text-right pt-2">
                 <Badge variant="secondary" className="font-normal">from leads total</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChart;
