
import React, { useState } from 'react';
import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Accordition from './Components/Accordition/Accordition';
import ComboBox from './Components/AutoComplete/ComboBox';
import CountrySelect from './Components/AutoComplete/CountrySelect';
import CardComponent from './Components/Card/Card';
import ImageList from './Components/ImageList/ImageList';
import CustomizedPaper from './Components/Paper/Paper';
import CustomizedSnackBar from './Components/SnackBar/SnackBar';
import CustomizedSwitches from './Components/Switch/CustomizedSwitches';

const components = [
  { label: 'Accordion', component: <Accordition /> },
  { label: 'ComboBox', component: <ComboBox /> },
  { label: 'CountrySelect', component: <CountrySelect /> },
  { label: 'Card', component: <CardComponent /> },
  { label: 'ImageList', component: <ImageList /> },
  { label: 'Paper', component: <CustomizedPaper /> },
  { label: 'SnackBar', component: <CustomizedSnackBar /> },
  { label: 'Switch', component: <CustomizedSwitches /> },
];

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setDrawerOpen(false); // Close drawer on tab change
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box >
      <AppBar position="sticky" sx={{ display: 'flex', flexDirection:"row", justifyContent: 'space-between', alignItems: 'center', backgroundColor:"black",height:"70px"}}>
        <IconButton onClick={handleDrawerOpen} edge="start"  aria-label="menu" sx={{marginLeft: "30px",color:"white"}}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h3' align='center'>
          MUI
        </Typography>
        <Tabs value={selectedTab} onChange={handleTabChange} sx={{marginRight:"70px"}}>
          {components.map((component, index) => (
            <Tab key={index} label={component.label} sx={{color:"white"}}/>
          ))}
        </Tabs>
      </AppBar>

      <Drawer open={drawerOpen} onClose={handleDrawerClose} >
        <List sx={{cursor:"pointer"}}>
          {components.map((component, index) => (
            <ListItem  key={index} onClick={() => {
              setSelectedTab(index);
              setDrawerOpen(false); // Close drawer on component click
            }}>
              <ListItemText primary={component.label} sx={{
                background: 'transparent',
               '&:hover': {
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '5px'},
                padding:"4px",
                textAlign:"center",
                margin: "5px"

                }} />

            </ListItem>
          ))}
        </List>
      </Drawer>

      <Container maxWidth="md" sx={{ display:"flex",flexDirection:"column", justifyContent:"center",alignItems: "center", marginTop:"40px" }}>
        <Typography variant="h4" align="center" style={{ margin: '20px 0' }}>
          {components[selectedTab].label}
        </Typography>
        <div style={{marginTop:"30px"}}>
        {components[selectedTab].component}
        </div>
        
      </Container>
    </Box>
  );
};

export default App;
