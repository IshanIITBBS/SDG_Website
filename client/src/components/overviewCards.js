// OverviewCards.js
import React from 'react';
import { Card, Grid, Typography } from '@mui/material';

export default function OverviewCards() {
  const cards = [
    { title: 'Total Income', value: '$32,499.93', change: '+12.95%' },
    { title: 'Profit', value: '$10,499.93', change: '-0.33%' },
    { title: 'Total Views', value: '5,211,832', change: '+0.32%' },
    { title: 'Conversion Rate', value: '4.83%', change: '+8.05%' },
  ];

  return (
    <Grid container spacing={2} style={{ padding: '20px', marginLeft: 250 }}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card style={{ padding: '16px' }}>
            <Typography variant="subtitle1">{card.title}</Typography>
            <Typography variant="h6">{card.value}</Typography>
            <Typography variant="body2" color={card.change.includes('+') ? 'green' : 'red'}>
              {card.change} Compared to last month
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
