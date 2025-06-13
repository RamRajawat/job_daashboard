// src/pages/CreateJobPage.tsx
import React, { useState } from 'react';
import {
  TextInput,
  Textarea,
  NumberInput,
  Button,
  Container,
  Title,
  Group,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
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

const CreateJobPage: React.FC = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/job', job);
      navigate('/');
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
    <Container mt="lg">
      <Title order={2}>Create New Job</Title>
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
          placeholder="e.g. Full-time, Part-time, Remote"
          required
        />
        <Group grow>
          <NumberInput
            label="Minimum Salary"
            value={job.salaryMin}
            onChange={(value) => setJob({ ...job, salaryMin: Number(value) })}
            required
          />
          <NumberInput
            label="Maximum Salary"
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
          Create Job
        </Button>
      </form>
    </Container>
  );
};

export default CreateJobPage;
