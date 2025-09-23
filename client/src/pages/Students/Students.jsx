import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  Add,
  Search,
  Visibility,
  Edit,
  Delete,
} from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchStudents } from '../../store/slices/studentSlice';
import { formatDate } from '../../utils';

const Students = () => {
  const dispatch = useAppDispatch();
  const { students, isLoading, pagination } = useAppSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleSearch = (event) => {
    // Implement search functionality
    console.log('Search:', event.target.value);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Students Management</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => console.log('Add student')}
        >
          Add Student
        </Button>
      </Box>

      <Paper sx={{ mb: 2 }}>
        <Box p={2}>
          <TextField
            placeholder="Search students..."
            variant="outlined"
            size="small"
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 300 }}
          />
        </Box>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Section</TableCell>
              <TableCell>Roll No</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student._id}>
                <TableCell>{student.studentId}</TableCell>
                <TableCell>
                  {student.userId.firstName} {student.userId.lastName}
                </TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.section}</TableCell>
                <TableCell>{student.rollNumber}</TableCell>
                <TableCell>
                  <Chip label="Active" color="success" size="small" />
                </TableCell>
                <TableCell>{formatDate(student.createdAt)}</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary">
                    <Visibility />
                  </IconButton>
                  <IconButton size="small" color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {students.length === 0 && !isLoading && (
        <Box textAlign="center" py={4}>
          <Typography variant="h6" color="textSecondary">
            No students found
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Add your first student to get started
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Students;
