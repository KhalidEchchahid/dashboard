import Header from "components/Header";
import React from "react";
import { useTheme } from "@emotion/react";
import { useGetUsertByIdQuery } from "state/api";
import { useParams } from "react-router-dom";
import { Avatar, Box, Container, Paper, Typography } from "@mui/material";

const StudentDetails = () => {
  const { id } = useParams();
  console.log(id);
  const theme = useTheme();
  const { data, isLoading, error } = useGetUsertByIdQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  console.log("data", data);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="STUDENTS" subtitle="See student details" />

      <Container maxWidth="md">
      <Box mt={4} display="flex" justifyContent="center">
        <Paper elevation={3}>
          <Box p={4} display="flex" alignItems="center">
            <Avatar
              sx={{ width: 200, height: 200 }}
              src={`data:application/image;base64,${data?.image}`}
              alt={data.user.lastName}
            />
            <Box ml={4}>
              <Typography variant="h2">
                {data.user.firstName} {data.user.lastName}
              </Typography>
              <Box mt={2}>
                <Typography variant="body1" gutterBottom>
                  Email: {data.user.email}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Semester: {data.user.semester}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Role: {data.user.role}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
    </Box>
  );
};

export default StudentDetails;
