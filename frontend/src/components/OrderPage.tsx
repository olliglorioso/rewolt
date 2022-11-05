import { Box, Button, Chip, Divider, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Theme, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const categories = ["Electronics", "Batteries", "Textiles", "Rubber", "Other"]

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const OrderPage = () => {
  const theme = useTheme()
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([])
  const [title, setTitle] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const navigate = useNavigate()

  const handleChange = (event: SelectChangeEvent<typeof categoriesSelected>) => {
    const {
      target: { value },
    } = event;
    setCategoriesSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const clearAll = () => {
    setCategoriesSelected([])
    setAddress("")
    setTitle("")
  }

  const handleSubmit = () => {
    console.log(title, address, categoriesSelected)
    return navigate("/successOrder")
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      width: "full",
      height: "screen",
      justifyContent: "center"
    }}>
      <Box sx={
      {
        display: "flex",
        flexDirection: "column",
        maxWidth: 800,
        maxHeight: 500,
        borderRadius: 5,
        boxShadow: 3,
        py: 10,
        px: 5,
        minWidth: 600,
        justifyContent: "center",
        gap: 3
      }
      }>
        <Typography variant="h3" textAlign="center">Make a new order</Typography>
        <TextField label="Title" helperText="Title for your order. Max 40 symbols" variant="outlined" value={title} onChange={e => setTitle(e.target.value)}/>
        <Divider light />
        <Typography variant="h5">Address information</Typography>
        <TextField label="Address" helperText="Write your address here" variant="outlined" value={address} onChange={e => setAddress(e.target.value)}/>
        <Divider light />
        <FormControl>
          <InputLabel>Categories</InputLabel>
          <Select
          labelId="multiple-chip-label"
          id="multiple-chip"
          multiple
          value={categoriesSelected}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Categories" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          >
            {categories.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, categoriesSelected, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{display: "flex", flexDirection: "row", gap: 2, justifyContent: "right"}}>
          <Button variant="contained" color="inherit" onClick={clearAll}>Clear</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Create</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default OrderPage