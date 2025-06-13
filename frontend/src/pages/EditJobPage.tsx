// src/pages/EditJobPage.tsx
import React, { useEffect, useState } from 'react';
import {
  TextInput,
  Textarea,
  Button,
  Container,
  Title,
  Group,
  NumberInput,
} from '@mantine/core';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Job {
  title: string;
  companyName: string;
  location: string;
  jobType: string;
  salaryMin: number;
  salaryMax: number;
  deadline: string;
  description: string;
  requirements: string;
  responsibilities: string;
}

const EditJobPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job>({
    title: '',
    companyName: '',
    location: '',
    jobType: '',
    salaryMin: 0,
    salaryMax: 0,
    deadline: '',
    description: '',
    requirements: '',
    responsibilities: '',
  });

  const fetchJob = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/job/${id}`);
      setJob(res.data);
    } catch (error) {
      console.error('Error fetching job:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/job/${id}`, job);
      navigate('/');
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, [id]);

  return (
    <Container mt="lg">
      <Title order={2}>Edit Job</Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Job Title"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.currentTarget.value })}
          required
        />
        <TextInput
          label="Company Name"
          value={job.companyName}
          onChange={(e) => setJob({ ...job, companyName: e.currentTarget.value })}
          required
        />
        <TextInput
          label="Location"
          value={job.location}
          onChange={(e) => setJob({ ...job, location: e.currentTarget.value })}
          required
        />
        <TextInput
          label="Job Type"
          value={job.jobType}
          onChange={(e) => setJob({ ...job, jobType: e.currentTarget.value })}
          required
        />
        <Group grow>
          <NumberInput
            label="Min Salary"
            value={job.salaryMin}
            onChange={(value) => setJob({ ...job, salaryMin: Number(value) })}
            required
          />
          <NumberInput
            label="Max Salary"
            value={job.salaryMax}
            onChange={(value) => setJob({ ...job, salaryMax: Number(value) })}
            required
          />
        </Group>
        <TextInput
          label="Application Deadline"
          value={job.deadline}
          onChange={(e) => setJob({ ...job, deadline: e.currentTarget.value })}
          placeholder="YYYY-MM-DD"
          required
        />
        <Textarea
          label="Job Description"
          value={job.description}
          onChange={(e) => setJob({ ...job, description: e.currentTarget.value })}
          required
        />
        <Textarea
          label="Requirements"
          value={job.requirements}
          onChange={(e) => setJob({ ...job, requirements: e.currentTarget.value })}
          required
        />
        <Textarea
          label="Responsibilities"
          value={job.responsibilities}
          onChange={(e) => setJob({ ...job, responsibilities: e.currentTarget.value })}
          required
        />
        <Button type="submit" mt="md">
          Update Job
        </Button>
      </form>
    </Container>
  );
};

export default EditJobPage;
