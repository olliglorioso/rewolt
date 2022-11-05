import { AppBar, Avatar, Box, Button, buttonBaseClasses, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import {AccountCircle, MenuBook, Android} from "@mui/icons-material"
import {Link, useNavigate} from "react-router-dom"
import React from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../redux/store";
const buttonsInMenu = [{text: "Order", link: "/order"}]
const buttonsInTooltip = [{text: "Logout", link: "/logout"}]


const MenuBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Android sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={e => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: "pointer"
            }}
          >
            ReWolt
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuBook />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {buttonsInMenu.map((button) => (
                <MenuItem key={button.text} onClick={e =>
                  {
                    handleCloseNavMenu()
                    navigate(button.link)
                  }
                }>
                  <Typography textAlign="center">{button.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Android sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={e => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: "pointer"
            }}
          >
            ReWolt
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {buttonsInMenu.map((button) => (
              <Button
                key={button.text}
                onClick={e =>
                  {
                    handleCloseNavMenu()
                    navigate(button.link)
                  }
                }
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {button.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white" }}>
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {buttonsInTooltip.map((setting) => {
                return (<MenuItem key={setting.text} onClick={e =>
                  {
                    if (setting.text === "Logout") {
                      dispatch(removeToken())
                      localStorage.removeItem("token")
                      navigate("/login")
                      return
                    } 
                    handleCloseNavMenu()
                    navigate(setting.link)
                  }
                }>
                  <Typography textAlign="center">{setting.text}</Typography>
                </MenuItem>)
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MenuBar