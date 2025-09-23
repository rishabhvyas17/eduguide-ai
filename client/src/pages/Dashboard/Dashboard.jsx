import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  People,
  Assessment,
  Description,
  TrendingUp,
} from '@mui/icons-material';
import { useAppSelector } from '../../hooks/redux';

const StatCard = ({ title, value, icon, color }) => (
  <Card>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography color="textSecondary" gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="h4" component="h2">
            {value}
          </Typography>
        </Box>
        <Box sx={{ color, fontSize: 40 }}>{icon}</Box>
      </Box>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const { user } = useAppSelector((state) => state.auth);

  const recentActivities = [
    'New student John Doe registered',
    'Assessment completed by Jane Smith',
    'Monthly report generated for Class 10A',
    'Parent-Teacher meeting scheduled',
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.firstName} {user?.lastName}
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Here's what's happening with your students today.
      </Typography>

      <Grid container spacing={3}>
        {/* Statistics Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Students"
            value="120"
            icon={<People />}
            color="#1976d2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Tests"
            value="45"
            icon={<Assessment />}
            color="#388e3c"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Reports Generated"
            value="12"
            icon={<Description />}
            color="#f57c00"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Average Score"
            value="87%"
            icon={<TrendingUp />}
            color="#7b1fa2"
          />
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            <List>
              {recentActivities.map((activity, index) => (
                <ListItem key={index} divider>
                  <ListItemText
                    primary={activity}
                    secondary={`${index + 1} hour${index === 0 ? '' : 's'} ago`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Card variant="outlined" sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'grey.50' } }}>
                <CardContent sx={{ py: 1 }}>
                  <Typography>+ Add New Student</Typography>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'grey.50' } }}>
                <CardContent sx={{ py: 1 }}>
                  <Typography>📝 Create Assessment</Typography>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'grey.50' } }}>
                <CardContent sx={{ py: 1 }}>
                  <Typography>📊 Generate Report</Typography>
                </CardContent>
              </Card>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
