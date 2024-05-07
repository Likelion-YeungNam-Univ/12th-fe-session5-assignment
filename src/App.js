import React from 'react';
import { Grid } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import VideoThumbnails from './VideoThumbnails';

const videos = [
  {
    title: "예시 동영상 1",
    channel: "예시 채널 1",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    title: "예시 동영상 2",
    channel: "예시 채널 2",
    thumbnail: "https://via.placeholder.com/200",
  },
  // 추가 동영상을 여기에 넣을 수 있습니다.
];

const App = () => {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <VideoThumbnails videos={videos} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
