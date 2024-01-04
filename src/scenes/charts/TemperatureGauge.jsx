import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { Box, Typography } from '@mui/material';

const TemperatureGauge = ({ temperature }) => {
  return (
    <Box>
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={20}
        percent={temperature / 100}
        colors={['#FF5F6D', '#FFC371']}
        arcWidth={0.3}
      />
      <Typography sx={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', }} component="h1">
        {temperature} %
      </Typography>
    </Box>
  );
};

export default TemperatureGauge;

