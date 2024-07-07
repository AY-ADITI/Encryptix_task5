const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/jobboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Job = require('./models/Job');

app.get('/api/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

app.get('/api/jobs/:id', async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

app.post('/api/jobs', async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.json(newJob);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
