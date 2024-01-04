import { DeleteForever } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import {
  useDeleteAnnouncementsMutation,
  useGetAnnouncementsQuery,
} from "state/api";
import DownloadIcon from "@mui/icons-material/Download";
import Header from "components/Header";

const Announcements = () => {
  const { data, isLoading, error, refetch } = useGetAnnouncementsQuery();
  const [deleteAnnouncement, { isLoadingAnnouncement, err }] =
    useDeleteAnnouncementsMutation();

  console.log("data", data);

  const handleDeleteAnnouncement = async (id) => {
    try {
      await deleteAnnouncement(id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>isLoading: {isLoading.message}</div>;
  }

  return (
    <Box m="1.5rem 2.5rem">
    <Header title="ANNOUNCEMENT" subtitle="See the list of announcements." />

    <div style={{ display: "flex", flexWrap: "wrap" , m : 3 }}>
      
      {data?.map((item) => (
        <Card key={item.id} sx={{ width: 300, m: 2 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              userId: {item?.userId}
            </Typography>
            <Typography variant="h5" component="h2">
              title: {item?.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              description: {item?.description}
            </Typography>
            <Typography variant="body2">
              Creator: {item?.creatorName}
            </Typography>
            <Typography variant="body2">
              Created At: {new Date(item?.createdAt).toLocaleDateString()}
            </Typography>
          </CardContent>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <Button
              size="small"
              color="success"
              href={`data:application/pdf;base64,${item?.pdfFile}`}
              download={`${item?.title}.pdf`}
            >
              <DownloadIcon />
              Download
            </Button>

            <Button
              size="small"
              color="error"
              onClick={() => handleDeleteAnnouncement(item?.id)}
            >
              <DeleteForever />
            </Button>
          </Typography>
        </Card>
      ))}
    </div>
    </Box>
  );
};

export default Announcements;
