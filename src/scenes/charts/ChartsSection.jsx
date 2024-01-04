import React from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import LineChart from "./LineChart";
import PieChart from "./PieChart ";
import BarChart from "./BarChart ";
import TemperatureGauge from "./TemperatureGauge";

const ChartsSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={4}>
      <Grid container xs={12}>
        <Grid item xl={9}>
          <LineChart />
        </Grid>
        <Grid item xl={2} sx={{ display: "flex", alignItems: "center" }}>
          <TemperatureGauge temperature={28} />
        </Grid>
      </Grid>

      <Grid container xs={12}>
        <Grid item xl={6}>
          <PieChart />
        </Grid>
        <Grid item xl={3}></Grid>
        <Grid item xl={2} sx={{ display: "flex", alignItems: "center" }}>
          <TemperatureGauge temperature={28} />
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xl={9}>
          <BarChart />
        </Grid>
        <Grid item xl={2} sx={{ display: "flex", alignItems: "center" }}>
          <TemperatureGauge temperature={28} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChartsSection;
