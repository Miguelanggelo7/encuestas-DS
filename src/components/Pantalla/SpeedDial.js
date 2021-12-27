import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import HomeIcon from '@mui/icons-material/Home';
import PlusIcon from '@mui/icons-material/Add';
import BurgerIcon from '@mui/icons-material/Menu';

const actions = [
  { icon: <HomeIcon />, name: 'Home' },
  { icon: <PlusIcon />, name: 'Plus' },
];

export default function BasicSpeedDial() {
  return (
  
    <div style={{position:'fixed'}}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute',top:10, left:10}}
        FabProps={{
          size: "medium",
          style: { backgroundColor: "green",borderRadius:35 }
        }}
        icon={<BurgerIcon />}
        direction = "down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
     </div>
 
  );
}
