import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BookDataService from "../services/book.services";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Icon } from "@iconify-icon/react";

const BooksList = ({ getBookId, add }) => {
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    getBooks();
  }, [add]);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };

  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Title",
      width: 300,
      //   editable: true,
    },
    {
      field: "author",
      headerName: "Author",
      width: 300,
      //   editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 300,
      editable: true,
      //   onchange: (e) => {
      //     console.log(e);
      //   },
    },
    {
      field: "Action",
      headerName: "Action",
      headerAlign: "center",
      width: 300,
      editable: true,
      renderCell: (param) => (
        <Box display="flex">
          <Box sx={{ m: 2, pl: 10 }}>
            <Icon
              icon="material-symbols:edit"
              width="35"
              onClick={(e) => {
                console.log(param.id);
                getBookId(param.id);
              }}
              style={{
                height: "fit-content",
                cursor: "pointer",
                color: "#c471ed",
                borderRadius: 20,
                marginRight: 30,
              }}
            />

            <Icon
              icon="ic:baseline-delete"
              width="35"
              onClick={(e) => deleteHandler(param.id)}
              style={{
                height: "fit-content",
                cursor: "pointer",
                color: "#F75D59",
                borderRadius: 20,
              }}
            />
          </Box>
        </Box>
      ),
    },
  ];
  return (
    <>
      <Box>
        <DataGrid
          rows={books}
          columns={columns}
          pageSize={5}
          autoHeight
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default BooksList;
