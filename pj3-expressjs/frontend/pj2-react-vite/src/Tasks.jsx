import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { NewReleases, CheckCircle, HourglassEmpty } from '@mui/icons-material';
import { useEffect, useState } from 'react';

function Tasks() {
  const tasks = [
    { id: 1, title: 'ReactJS', status: 'New' },
    { id: 2, title: 'JavaScript', status: 'In Progress' },
    { id: 3, title: 'HTML', status: 'Completed' },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vh', paddingLeft: '30%'}}>
      <Grid container spacing={2}>
        {tasks.map(task => (
          <Grid item xs={4} key={task.id}>
            <Card sx={{ maxWidth: 345, minHeight: 700, border: '1px solid #ccc' }}>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                      {task.status === 'New' && <NewReleases />}
                      {task.status === 'In Progress' && <HourglassEmpty />}
                      {task.status === 'Completed' && <CheckCircle />}
                      {task.status}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">
                      {task.title}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Tasks;


// function Tasks() {
//   const tasks = [
//     { id: 1, title: 'New Tasks', description: 'This is the first task.' },
//     { id: 2, title: 'In Progress', description: 'This is the second task.' },
//     { id: 3, title: 'Completed', description: 'This is the second task.' },
//     // Add more tasks as needed
//   ];
  
//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', width: '100vh', paddingLeft: '30%'}}>
//       <Grid container spacing={2}>
//         {tasks.map(task => (
//           <Grid item xs={4} key={task.id}>
//             <Card sx={{ maxWidth: 345, minHeight: 600}}>
//               <CardContent>
//               <Typography variant="h6" color="primary">
//                   {task.status === 'New' && <NewReleases />}
//                   {task.status === 'In Progress' && <HourglassEmpty />}
//                   {task.status === 'Completed' && <CheckCircle />}
//                 </Typography>
//                 <Typography variant="body1">
//                   {task.title}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default Tasks;