import React, { useEffect } from "react";
import {Box, Card, CardContent, Collapse, Container, List, ListItem, TextField, Typography} from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../constants";
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ListingPageitem from "./ListingPageItem";


const ListingPage = () => {
  const [listings, setListings] = React.useState([]);

  const token  = useSelector((state: any) => state.token);
  

  useEffect(() => {
    let isMounted = true;
    const fetchListings = async () => {
      console.log(token);
      const resp = await axios.get(`${baseUrl}/api/listing`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (isMounted) {
        setListings(resp.data);
      }
    };
    fetchListings();
    return () => {
      isMounted = false;
    };
  }, [token]);


  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      bgcolor: "white",
      maxWidth: {"md:": 800, "xs": 300},
      borderRadius: 5,
      boxShadow: 3,
      py: 10,
      px: 5,
      mt: 5,
      minWidth: {"md": 400, "xs": 225},
      justifyContent: "center",
      gap: 3,
    }}
  >
      <Typography variant="h3" align="center">
        Listings
      </Typography>
      <List>
        {listings.map((listing: any) => {
            
          return (
           <ListingPageitem listing={listing} />
          )
        } 
        )}
      </List>

    </Box>
  );
}

export default ListingPage;
