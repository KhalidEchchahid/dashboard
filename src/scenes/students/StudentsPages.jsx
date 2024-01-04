import React, { useState } from "react";
import Header from "components/Header";
import { Box, Button, CardHeader, IconButton, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DataGridStudentsToolbar from "components/DataGridStudentsToolbar";

import {
  DeleteForever,
  EditOutlined,
  MoreHoriz,
  MoreHorizOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  useDeleteUserMutation,
  useGetStudentsByPaginationQuery,
} from "state/api";

const StudentsPages = ({ isDash , ht }) => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [role, setRrole] = useState("ROLE_STUDENT");

  const { data, isLoading, error, refetch } = useGetStudentsByPaginationQuery({
    page,
    pageSize,
    role,
  });
  const [deleteUser, { isLoadingUser, err }] = useDeleteUserMutation();

  // data = slice1 ?  data?.slice(0, 5) : data ;

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      refetch(); // Refresh the data to update the table
    } catch (error) {
      console.log(error);
    }
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const columns = !ht ? [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "lastName",
      headerName: "Last name",
      flex: 3,
    },
    {
      field: "firstName",
      headerName: "First name",
      flex: 3,
    },
    {
      field: "email",
      headerName: "E-mail",
      flex: 4,
    },
    {
      field: "semester",
      headerName: "semester",
      flex: 1.5,
    },
    {
      field: "role",
      headerName: "role",
      flex: 1.5,
    },
    {
      field: "Actions",
      headerName: "Actions",
      flex: 2,
      renderCell: (params) => {
        const { id } = params.row;
        return (
          <>
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteUser(id)}
            >
              <DeleteForever />
            </IconButton>

            <Link to={`/studentDetails/${id}`} aria-label="see more">
              <IconButton aria-label="delete">
                <MoreHoriz />
              </IconButton>
            </Link>
          </>
        );
      },
    },
  ]: [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "lastName",
      headerName: "Last name",
      flex: 3,
    },
    {
      field: "firstName",
      headerName: "First name",
      flex: 3,
    },
    {
      field: "email",
      headerName: "E-mail",
      flex: 4,
    },] ;
  return (
    <Box m="1.5rem 2.5rem">
      {!isDash && (
        <Header title="STUDENTS" subtitle="See your list of students." />
      )}

      <Box
        mt="40px"
        height= {ht ? ht : "75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row.id}
          rows={
            (data &&
              data?.map((row) => ({
                id: row.id,
                lastName: row.lastName,
                firstName: row.firstName,
                email: row.email,
                semester: row.semester,
                role: row.role,
              }))) ||
            []
          }
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[10, 20, 100]}
          pagination
          page={page}
          onPageChange={(newPage) => setPage(newPage)}
          //components={{ Toolbar: DataGridStudentsToolbar }}
        />
      </Box>
    </Box>
  );
};

export default StudentsPages;
