// VideoThumbnails.js
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const VideoThumbnails = ({ videos }) => {
  return (
    <Grid container spacing={2}>
      {videos.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={video.thumbnail}
              alt={video.title}
            />
            <CardContent>
              <Typography variant="h6">{video.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {video.channel}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoThumbnails;
