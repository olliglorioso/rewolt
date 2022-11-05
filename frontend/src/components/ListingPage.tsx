import React, { useEffect } from "react";
import {Box, Card, CardContent, Container, List, ListItem, Typography} from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../constants";


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
      maxHeight: 500,
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
        Listing
      </Typography>
      <List>
        {listings.map((listing: any) => (
          <ListItem key={listing.id}>
            <Card sx={{
              width: "100%",
            }}>
              <CardContent sx={{
              width: "100%",
            }}>
                <Box width="80%" sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}>
                  <Typography variant="h5" component="div">
                    {listing.title}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {listing.price} €
                  </Typography>
                </Box>
                <Typography variant="body2">
                  {listing.category}
                </Typography>
              </ CardContent>
              
            </Card>
          </ListItem>
        ))}
      </List>

    </Box>
  );
}

export default ListingPage;
