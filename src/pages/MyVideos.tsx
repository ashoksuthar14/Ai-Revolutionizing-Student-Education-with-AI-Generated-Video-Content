import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Search } from 'lucide-react';

const MyVideos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        My Videos
      </Typography>

      <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
        <TextField
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flex: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={20} />
              </InputAdornment>
            ),
          }}
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter</InputLabel>
          <Select value={filter} label="Filter" onChange={(e) => setFilter(e.target.value)}>
            <MenuItem value="all">All Videos</MenuItem>
            <MenuItem value="recent">Recently Added</MenuItem>
            <MenuItem value="popular">Most Viewed</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6].map((video) => (
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
                    Views: 1,234
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

export default MyVideos;