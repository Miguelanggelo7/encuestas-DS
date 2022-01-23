import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function IconButtons() {
  return (
    <div >
      <Stack  direction="row" spacing={1}>
        <IconButton aria-label="delete" size="large" sx = {{position: 'relative',bottom:-260, left:35}} >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </div>
  );
}
