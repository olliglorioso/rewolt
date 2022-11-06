import {
  ListItem,
  Card,
  CardContent,
  Box,
  Typography,
  Collapse,
  TextField,
  IconButton,
  IconButtonProps,
  styled,
  Button,
} from "@mui/material";

import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getFee } from "../requests/post";
import axios from "axios";
import { baseUrl } from "../constants";
import { useNavigate } from "react-router-dom";

interface IProps {
  listing: any;
  token: string;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ListingPageitem(props: IProps) {
  const [əddress, setAddress] = useState<string>("");
  const { listing, token } = props;
  const navigate = useNavigate()
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [comment, setComment] = useState<string>(props.listing.comment)
  const [fee, setFee] = useState<number>(0)

  const handleButtonCheckClickFee = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const woltsFee = await checkFee()
    setFee(woltsFee?.amount /100 || 0)
  }

  const checkFee = async () => {
    console.log(əddress)
    let addressText = əddress
    const fee = await getFee(listing._id, əddress, token)
    return fee
  }

  const handleButtonCheckClick = async (linstig: string) => {
    console.log(linstig)
    console.log(əddress)
    const response = await axios.post(
      `${baseUrl}/api/buy`,
      {
        orderId: linstig,
        əddress,
        comment: "Electronics"
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const trackingUrl = response.data.delivery.tracking.url
      return navigate(`/successOrder/${encodeURIComponent(trackingUrl)}`);
  }

  return (
    <ListItem key={listing._id}>
      <Card
        sx={{
          width: "100%",
        }}
      >
        <CardContent
          sx={{
            width: "100%",
          }}
        >
          <Box
            width="80%"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" component="div">
              {listing.title}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {listing.price} €
            </Typography>
          </Box>
          <Typography variant="body2">{listing.category}</Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box />
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body1">Check the total price here:</Typography>
            <Box sx={{display: "flex", flexDirection: "row", gap: 3}}>
              <TextField label="Address" variant="filled" id={`${listing._id}-address`} onChange={e => setAddress(e.target.value)}/>
              <TextField label="Comment" id={`${listing._id}-comment`} onChange={e => setComment(e.target.value)}/>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", mt: 1}}>
              <Button variant="contained" onClick={handleButtonCheckClickFee}>Check</Button>
              <Box>
                <Typography variant="caption">Wolt's fee: {`${fee}`}</Typography>
                <Typography variant="body1">Total price: {fee + listing.price}</Typography>
              </Box>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", mt: 1}}>
              <Button variant="contained" onClick={() => handleButtonCheckClick(listing._id)}>Buy</Button>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </ListItem>
  );
}
