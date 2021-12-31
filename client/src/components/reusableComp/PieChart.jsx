import React, { Component, ReactElement, ReactSVGElement } from 'react';
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector,
  Label, LabelList } from 'recharts';


const data01 = [
  { name: 'Group A', value: 400, v: 89 },
  { name: 'Group B', value: 300, v: 100 },
  { name: 'Group C', value: 200, v: 200 },
  { name: 'Group D', value: 200, v: 20 },
  { name: 'Group E', value: 278, v: 40 },
  { name: 'Group F', value: 189, v: 60 },
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComp = () => {
    return (
        <>
            <p>PieChart wrapped by ResponsiveContainer</p>
        <div className="pie-chart-wrapper" style={{ width: '50%', height: '100%', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer  width = '100%'
          height = {
              400
          } >
            <PieChart onMouseEnter={this.handlePieChartEnter}>
              <Pie
                data={data01}
                dataKey="value"
                innerRadius="25%"
                outerRadius="40%"
                activeIndex={this.state.activeIndex}
                onMouseEnter={this.onPieEnter}
                isAnimationActive={false}
              >
                {
                  data01.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
                  ))
                }
                <Label value="test" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        </>
    )
}

export default PieChartComp