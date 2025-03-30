import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
} from '@mui/material';

const GenerateVideo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    length: '',
    prompt: '',
  });

  const steps = ['Enter Details', 'Generate Script', 'Preview & Confirm'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setActiveStep((prev) => prev + 1);
    setLoading(false);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Generate Video
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Video Length (minutes)"
                type="number"
                variant="outlined"
                value={formData.length}
                onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Script Prompt"
                multiline
                rows={4}
                variant="outlined"
                value={formData.prompt}
                onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                sx={{ mb: 3 }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                disabled={loading}
                sx={{ minWidth: 200 }}
              >
                {loading ? <CircularProgress size={24} /> : 'Generate Script'}
              </Button>
            </form>
          )}

          {activeStep === 1 && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Generated Script Preview
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setActiveStep(2)}
                sx={{ minWidth: 200 }}
              >
                Continue to Preview
              </Button>
            </Box>
          )}

          {activeStep === 2 && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Video Preview
              </Typography>
              <Box
                sx={{
                  height: 400,
                  backgroundColor: '#f1f5f9',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Typography color="text.secondary">Video Preview Will Appear Here</Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setActiveStep(0)}
                sx={{ minWidth: 200 }}
              >
                Generate New Video
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default GenerateVideo;