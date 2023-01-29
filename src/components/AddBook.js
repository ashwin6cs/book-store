import React, { useState, useEffect } from "react";
// import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../services/book.services";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const AddBook = ({ id, setBookId, isAdd }) => {
  const [title, setTitle] = useState("");
  console.log(title);
  const [author, setAuthor] = useState("");
  console.log(author);
  const [status, setStatus] = useState("");
  console.log(status);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    console.log(e.target.value);
    e.preventDefault();
    console.log(e.target.value);
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      title,
      author,
      status,
    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        console.log("Update");
        await BookDataService.updateBook(id, newBook);
        isAdd("true");
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        console.log("Add ", id);
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "New Book added successfully!" });
        isAdd("true");
        // setTitle({ title: "" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setTitle("");
    // console.log(title);
    setAuthor("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "block",
        // position: "absolute",
        // margin: "auto",
        marginTop: 0,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            sx={{
              marginTop: 5,
              color: "black",
              ".css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
                color: "rgba(0, 0, 0, 0.6)",
              },
            }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            // defaultValue={title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Author"
            variant="outlined"
            sx={{
              marginTop: 3,
              color: "black",
              ".css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
                color: "rgba(0, 0, 0, 0.6)",
              },
            }}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            value={author}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <RadioGroup
              onChange={(e) => {
                console.log(e.target.value);
                setStatus(e.target.value);
              }}
              value={status}
            >
              <FormControlLabel
                value="Available"
                control={<Radio />}
                label="Available"
              />
              <FormControlLabel
                value="Not Available"
                control={<Radio />}
                label="Not Available"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            onClick={handleSubmit}
            sx={{
              backgroundColor:
                "linear-gradient(to right bottom, #654ea3, #eaafc8, #f64f59)",
              //   borderColor: "white",
              //   border: "none",
              marginBottom: 3,
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddBook;
