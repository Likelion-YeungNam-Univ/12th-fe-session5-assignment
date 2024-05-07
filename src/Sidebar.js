// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <List>
      <ListItem button>
        <ListItemText primary="홈" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="트렌딩" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="구독" />
      </ListItem>
      {/* 필요한 아이템을 더 추가하세요 */}
    </List>
  );
};

export default Sidebar;
