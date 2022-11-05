import {
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../constants";
import { Store } from 'react-notifications-component';
import { newListing } from "../requests/post";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = ["Electronics", "Batteries", "Textiles", "Rubber", "Other"];

interface DropOff {
  friendlyName: string;
  address: string;
  _id: string;
}

const OrderPage = () => {
  const [categoriesSelected, setCategoriesSelected] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [isListing, setIsListing] = useState<boolean>(false);
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.token);

  const [droppoffs, setDroppoffs] = useState<DropOff[]>([]);

  useEffect(() => {
    let isMounted = true;
    const getDropoffs = async () => {
      const response = await axios.get("http://localhost:4000/api/dropoffs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (isMounted)
        setDroppoffs(response.data as DropOff[]);
    };
    getDropoffs();
    return () => {
      isMounted = false;
    };
  }, [token]);
  console.log(droppoffs);
  
  const handleChange = (
    event: SelectChangeEvent<typeof categoriesSelected>
  ) => {
    const {
      target: { value },
    } = event;
    setCategoriesSelected(
      // On autofill we get a stringified value.
      value
    );
  };

  const clearAll = () => {
    setCategoriesSelected("");
    setAddress("");
    setTitle("");
  };

  const handleSubmit = async () => {
    try {
      if (!address || !title  || (address.length === 0) || (title.length === 0)) {
       throw "Please fill all the fields correctly." 
      }
      if (isListing) {
        await newListing(address, categoriesSelected, title, price, token);
        Store.addNotification({
          title: "Success!",
          message: "Your listing has been created.",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
        });
        clearAll();
        return
      }
      const response = await axios.post(
      `${baseUrl}/api/order`,
      {
        title,
        dropoffId: address,
        category: categoriesSelected,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const trackingUrl = response.data.delivery.tracking.url
      return navigate(`/successOrder/${encodeURIComponent(trackingUrl)}`);
    } catch(err: any) {
      Store.addNotification({
        title: "Error!",
        message: err ? err : "Something went wrong." ,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    });

    }
    

  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
        maxWidth: {"md:": 800, "xs": 260},
        borderRadius: 5,
        boxShadow: 3,
        py: 10,
        px: 5,
        my: 5,
        minWidth: {"md": 400, "xs": 225},
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Typography variant="h3" textAlign="center">
        Make a new order/listing
      </Typography>
      <Divider />
      <div>
        <label>Is listing?</label>
        <Checkbox checked={isListing} onChange={() => setIsListing(!isListing)} />
      </div>
      <TextField
        label="Title"
        helperText="Title for your order. Max 40 symbols"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Divider light />
      <FormControl>
        <InputLabel id="dropoff-label">Dropoff point</InputLabel>
      <Select
        labelId="dropoff-label"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        label="Dropoff point">
        {droppoffs.map((dropoff) => (
          <MenuItem value={dropoff._id} key={dropoff._id}>{dropoff.friendlyName} - {dropoff.address}</MenuItem>
        ))}
      </Select>
      </FormControl>
      <Divider light />
      <FormControl>
        <InputLabel>Categories</InputLabel>
        <Select
          labelId="multiple-chip-label"
          id="multiple-chip"
          value={categoriesSelected}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Categories" />}
          MenuProps={MenuProps}
        >
          {categories.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        {isListing && (
          <div>
            <br />
            <Divider />
            <br />
            <TextField
              label="Price"
              helperText="Price for your listing."
              variant="outlined"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        )}
      </FormControl>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          justifyContent: "right",
        }}
      >
        <Button variant="contained" color="inherit" onClick={clearAll}>
          Clear
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Create
        </Button>
      </Box>
    </Box>
  );
};

export default OrderPage;
