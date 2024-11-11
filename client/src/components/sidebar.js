// Sidebar.js
import React, { useState,useEffect } from 'react';
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
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';

export default function Sidebar({loggedIn}) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate() ;



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
          },
        }}
      >
        <div style={{ display: 'flex', justifyContent: open ? 'flex-end' : 'center', padding: '10px' }}>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon/> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><CampaignIcon  style={{width:"3vh"}}/></ListItemIcon>
            {open && <ListItemText primary="Events"  onClick={()=>{navigate('/noticeboard')}}/>}
          </ListItem>
          <ListItem button>
            <ListItemIcon><CampaignIcon style={{width:"3vh"}}/></ListItemIcon>
            {open && <ListItemText primary="Programmes"   onClick={()=>{navigate('/missionboard')}} />   }
          </ListItem>
          <ListItem button>
            <ListItemIcon><DashboardIcon style={{width:"3vh"}}/></ListItemIcon>
            {open && <ListItemText primary="Quiz"   onClick={()=>{navigate('/quiz')}} />   }
          </ListItem>
          <ListItem button>
            <ListItemIcon><PeopleIcon style={{width:"3vh"}}/></ListItemIcon>
            {open && <ListItemText primary="Login"   onClick={()=>{navigate('/login')}} />   }
          </ListItem>
          <ListItem button>
           { loggedIn && <ListItemIcon><PeopleIcon style={{width:"3vh"}}/></ListItemIcon> }
            {open && loggedIn && <ListItemText primary="Post Quiz"   onClick={()=>{navigate('/quizform')}} />   }
          </ListItem>
          <ListItem button>
           {loggedIn&& <ListItemIcon><PeopleIcon style={{width:"3vh"}} /></ListItemIcon> }
            {open && loggedIn &&<ListItemText primary="Post Notice" onClick={()=>{navigate('/noticeform')}} />}
          </ListItem>
          <ListItem button>
           {loggedIn && <ListItemIcon><PeopleIcon style={{width:"3vh"}}/></ListItemIcon>}
            {open && loggedIn && <ListItemText primary="Post Mission" onClick={()=>{navigate('/missionform')}}  />}
          </ListItem>
        </List>
      </Drawer>
      <main style={{ flexGrow: 1, padding: '20px' }}>
        {/* Your main content here */}
      </main>
    </div>
  );
}

