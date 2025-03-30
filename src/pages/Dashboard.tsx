import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { TrendingUp, Clock, Video as VideoIcon } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Videos', value: '24', icon: <VideoIcon />, color: '#2563eb' },
    { title: 'Watch Time', value: '126 hrs', icon: <Clock />, color: '#16a34a' },
    { title: 'Engagement Rate', value: '78%', icon: <TrendingUp />, color: '#db2777' },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {stats.map((stat) => (
          <Grid item xs={12} md={4} key={stat.title}>
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      backgroundColor: `${stat.color}20`,
                      color: stat.color,
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
                <Typography variant="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {stat.value}
                </Typography>
                <Typography color="text.secondary">{stat.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">Recent Videos</Typography>
        <Button variant="contained" color="primary">
          Generate New Video
        </Button>
      </Box>

      <Grid container spacing={3}>
        {[1, 2, 3, 4].map((video) => (
          <Grid item xs={12} md={6} lg={4} key={video}>
            <Card>
              <Box
                sx={{
                  height: 200,
                  backgroundColor: '#f1f5f9',
                  backgroundImage: `url(https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Introduction to Machine Learning
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  A comprehensive guide to ML basics
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" color="text.secondary">
                    Duration: 15:30
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Generated 2 days ago
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;