import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Outlet, Link } from "react-router-dom";
import Tasks from './Tasks.jsx';

function App() {
return (
   <>
     <AppBar component="nav">
       <Toolbar>
         <Typography variant="h6" sx={{ flexGrow: 1 }}>
           Angel's App
         </Typography>
          <Link to={`home`} ><Button color="inherit">Home</Button></Link>
          <Link to={`tasks`}><Button color="inherit">Tasks</Button></Link>
       </Toolbar>
    </AppBar>
    <Box>
	<Outlet />
        {/* Main Content */}
    </Box>
   </>
 );
}

export default App;