// src/pages/JobListPage.tsx
import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Title, Group } from '@mantine/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Job {
  id: number;
  title: string;
  companyName: string;
  location: string;
  jobType: string;
  salaryMin: number;
  salaryMax: number;
  deadline: string;
}

const JobListPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const res = await axios.get<Job[]>('http://localhost:3000/job');
      setJobs(res.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const deleteJob = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/job/${id}`);
      fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const rows = jobs.map((job) => (
    <tr key={job.id}>
      <td>{job.title}</td>
      <td>{job.companyName}</td>
      <td>{job.location}</td>
      <td>{job.jobType}</td>
      <td>
        ₹{job.salaryMin} - ₹{job.salaryMax}
      </td>
      <td>{job.deadline}</td>
      <td>
        <Group>
          <Button size="xs" color="blue" onClick={() => navigate(`/edit/${job.id}`)}>
            Edit
          </Button>
          <Button size="xs" color="red" onClick={() => deleteJob(job.id)}>
            Delete
          </Button>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Container mt="lg">
      <Title order={2}>Job Listings</Title>
      <Button my="md" onClick={() => navigate('/create')}>
        Add New Job
      </Button>
      <Table striped highlightOnHover withBorder>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Type</th>
            <th>Salary</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
};

export default JobListPage;
