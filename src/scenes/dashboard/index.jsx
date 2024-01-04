import { useTheme } from "@emotion/react";
import { Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import React from "react";
import { useState } from "react";
import ChartsSection from "scenes/charts/ChartsSection";
import TemperatureGauge from "scenes/charts/TemperatureGauge";
import Professors from "scenes/professors/Professors";
import StudentsPages from "scenes/students/StudentsPages";
import { useGetStudentsByPaginationQuery } from "state/api";

const Dashboard = () => {
  const theme = useTheme();
  const temperatureData = [
    { timestamp: '2023-06-01 08:00:00', temperature: 25 },
    { timestamp: '2023-06-01 09:00:00', temperature: 26 },
    { timestamp: '2023-06-01 10:00:00', temperature: 27 },
    { timestamp: '2023-06-01 11:00:00', temperature: 28 },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Dashboard" subtitle="" />
      <Box m="1.5rem 2.5rem">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ChartsSection />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
