import React from "react";
import { useDeleteBlogsMutation, useGetBlogsQuery } from "state/api";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import Header from "components/Header";
import DOMPurify from "dompurify";

const Blog = () => {
 
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Blog" subtitle="See the list of blogss." />
      <Box sx={{ display: "flex", flexWrap: "wrap", m: 3 }}>
        test test 
      </Box>
    </Box>
  );
};

export default Blog;
