import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import Input from "./Input";
import { useAddNewPofessorMutation } from "state/api";

const AddProfessorDialog = ({ open, setOpen, handleClose, refetch }) => {
  const [addNewProfessor, response] = useAddNewPofessorMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    semester: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();;
      //create professor
      addNewProfessor(formData)
        .unwrap()
        .then(() => {
          console.log("formData", formData);
          refetch();
        })
        .then((error) => {
          console.log(error);
        });
        setOpen(false);
  };

  function handelChange(e) {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add new Professor</DialogTitle>
      <DialogContent>
        <form>
          <Grid container spacing={3}>
            <>
              <Input
                name="firstName"
                label="First Name"
                handelChange={handelChange}
                autoFocus
                half
              />
              <Input
                name="lastName"
                label="Last Name"
                handelChange={handelChange}
                half
              />
              <Input
                name="semester"
                label="Semester"
                handelChange={handelChange}
              />
            </>
            <Input
              name="email"
              label="Email Adress"
              handelChange={handelChange}
              type="email"
            />
            <Input 
              name="password" 
              label="************" 
              handelChange={handelChange} 
              type="password"
            />
            <Input
              name="confirmPassword"
              label="Repeat Password"
              handelChange={handelChange}
              type="password"
            />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleSubmit} sx={{mt:2}}>
            Add
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProfessorDialog;
