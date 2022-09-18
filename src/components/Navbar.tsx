import { ModeNight, Menu } from '@mui/icons-material';
import { AppBar, Box, Drawer, IconButton, ListItemButton, ListItemIcon, Switch, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';


function Navbar({mode, setMode}:{ mode: string; setMode: Function;}) {

  const [checked, setChecked] = useState(false); //state variable to keep track of DarkMode select element.
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // monitors the state of the drawer


    return (
        <Box>
            <AppBar
            position="sticky" //makes nav stick to top of page
        sx={{
          zIndex: (theme) =>
            theme.zIndex.drawer + 1 /* Renders drawer behind navbar */,
          backgroundColor: "primary.main",
          color: "common.white",
        }}>

          <Toolbar 
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
          <Typography variant="h2" >Hello</Typography>
          <IconButton
                onClick={() =>
                  setIsDrawerOpen(!isDrawerOpen)
                } /* Make drawer open when user clicks the icon button */
              >
                <Menu
                  sx={{
                    height: 40,
                    width: 40,
                    color: "common.white",
                  }}
                />
              </IconButton>
          </Toolbar>
            </AppBar>
            <>
            <Box>
            <Drawer
          anchor="right" // attach the drawer to the right side of the page
          open={isDrawerOpen} // set the open state to when isDrawerOpen is true
          onClose={() => setIsDrawerOpen(false)}
        >

            <ListItemButton>
              <ListItemIcon>
                <ModeNight sx={{ color: "black" }} />
              </ListItemIcon>
              <Switch
                checked={checked}
                onChange={(e) => {
                  setMode(mode === "light" ? "dark" : "light");
                  setChecked(e.target.checked);
                }}
              />
            </ListItemButton>

          </Drawer>
          </Box>
          </>
        </Box>
    );
}

export default Navbar;