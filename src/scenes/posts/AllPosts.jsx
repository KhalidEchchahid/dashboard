import { useTheme } from "@emotion/react";
import React from "react";
import { useDeletePostsMutation, useGetPostsQuery } from "state/api";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { DeleteForever } from "@mui/icons-material";
import Header from "components/Header";

const AllPosts = () => {

  const { data, isLoading, error, refetch } = useGetPostsQuery();

  const [deletePost, { isLoadingPost, err }] = useDeletePostsMutation();

  console.log("data", data?.body?.studentPublications);
  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Posts" subtitle="Posts management." />
      <Box sx={{ display: "flex", flexDirection: "column", m: 3 }}>
        <Grid container spacing={2}>
          {data?.body?.studentPublications?.map((publication) => (
            <Grid item xs={12} sm={6} md={4} key={publication.id}>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: "8px",
                  // backgroundColor: "#f5f5f5",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    userId: {publication?.userId}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    title: {publication.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    description: {publication.description}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Created at:{" "}
                    {new Date(publication.createdAt).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Tags: {publication.tags}
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Likes: {publication.likes.length}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Comments: {publication.comments.length}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <Button
                      size="small"
                      color="success"
                      href={`data:application/pdf;base64,${publication?.pdfFile}`}
                      download={`${publication?.title}.pdf`}
                    >
                      <DownloadIcon />
                      Download
                    </Button>

                    <Button
                      size="small"
                      color="error"
                      onClick={() => handleDeletePost(publication?.id)}
                    >
                      <DeleteForever />
                    </Button>
                  </Typography>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllPosts;
