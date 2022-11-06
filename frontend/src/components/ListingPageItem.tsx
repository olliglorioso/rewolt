import { ListItem, Card, CardContent, Box, Typography, Collapse, TextField, IconButton, IconButtonProps, styled } from "@mui/material";

import React from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IProps {
  listing: any;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ListingPageitem(props: IProps){
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [address, setAddress] = React.useState(props.listing.address);
  const [comment, setComment] = React.useState(props.listing.comment);
  const { listing } = props;
  return (
    <ListItem key={listing._id} >
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
                  <TextField label="address"  />
                  <TextField label="comment" />
                </CardContent>
              </Collapse>
            </Card>
          </ListItem>)
}