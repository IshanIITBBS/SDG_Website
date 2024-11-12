import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Campaign as CampaignIcon,
  People as PeopleIcon,
  Menu as MenuIcon, // New hamburger menu icon
} from '@mui/icons-material';

export default function Sidebar({ loggedIn }) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        sx={{
          width: open ? "200px" : "80px",
          transition: 'width 0.3s',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? "200px" : "80px",
            transition: 'width 0.3s',
            overflowX: 'hidden',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
            color: 'white',
          },
        }}
      >
        {/* Hamburger Menu Icon */}
        <div style={{ display: 'flex', justifyContent: open ? 'flex-end' : 'center', padding: '10px' }}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button onClick={() => { navigate('/info'); }}>
            <ListItemIcon><CampaignIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
            {open && <ListItemText primary="Info" />}
          </ListItem>
          <ListItem button onClick={() => { navigate('/sdg'); }}>
            <ListItemIcon><DashboardIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
            {open && <ListItemText primary="Goals" />}
          </ListItem>
          <ListItem button onClick={() => { navigate('/significance'); }}>
            <ListItemIcon><CampaignIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
            {open && <ListItemText primary="Significance" />}
          </ListItem>
          <ListItem button onClick={() => { navigate('/implementation'); }}>
            <ListItemIcon><CampaignIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
            {open && <ListItemText primary="Strategies" />}
          </ListItem>
          <ListItem button onClick={() => { navigate('/environment'); }}>
            <ListItemIcon><CampaignIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
            {open && <ListItemText primary="Environmental Contribution" />}
          </ListItem>
          <ListItem button onClick={() => { navigate('/monitor'); }}>
            <ListItemIcon><CampaignIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
            {open && <ListItemText primary="Why SDG" />}
          </ListItem>
          <ListItem button onClick={() => { navigate('/noticeboard'); }}>
            <ListItemIcon><CampaignIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
            {open && <ListItemText primary="Events" />}
          </ListItem>
          <ListItem button onClick={() => { navigate('/missionboard'); }}>
            <ListItemIcon><CampaignIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
            {open && <ListItemText primary="Programmes" />}
          </ListItem>
          <ListItem button onClick={() => { navigate('/quiz'); }}>
            <ListItemIcon><DashboardIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
            {open && <ListItemText primary="Quiz" />}
          </ListItem>
          <ListItem button onClick={() => { navigate('/stats'); }}>
            <ListItemIcon><DashboardIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
            {open && <ListItemText primary="Stats" />}
          </ListItem>
          <ListItem button onClick={() => { navigate('/login'); }}>
            <ListItemIcon><PeopleIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
            {open && <ListItemText primary="Login" />}
          </ListItem>
          {loggedIn && (
            <>
              <ListItem button onClick={() => { navigate('/quizform'); }}>
                <ListItemIcon><PeopleIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
                {open && <ListItemText primary="Post Quiz" />}
              </ListItem>
              <ListItem button onClick={() => { navigate('/noticeform'); }}>
                <ListItemIcon><PeopleIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
                {open && <ListItemText primary="Post Notice" />}
              </ListItem>
              <ListItem button onClick={() => { navigate('/missionform'); }}>
                <ListItemIcon><PeopleIcon style={{ width: "3vh", color: 'white' }} /></ListItemIcon>
                {open && <ListItemText primary="Post Mission" />}
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
      <main style={{ flexGrow: 1, padding: '20px' }}>
        {/* Your main content here */}
      </main>
    </div>
  );
}
