import { Card, CardContent, Typography } from '@mui/material';

function TaskCard({ task }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {task.title}
        </Typography>
        <Typography color="textSecondary">
          {task.description}
        </Typography>   

      </CardContent>
    </Card>
  );
}

export default TaskCard;