'use client';

import { keyframes } from '@emotion/react';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';

// Define keyframes for eyelid rotation
const b1 = keyframes`
  to {
    transform: rotateX(-88deg);
  }
`;

const b2 = keyframes`
  to {
    transform: rotateX(88deg);
  }
`;

// Outer container
const EyeballContainer = styled(Box)({
  backgroundImage: `
    radial-gradient(circle 100px at 50% 250%, #f1c27d 99%, transparent 100%),
    radial-gradient(circle 100px at 50% -150%, #f1c27d 99%, transparent 100%)
  `,
  backgroundPosition: 'top, bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 50%',
  display: 'inline-block',
  height: '80px',
  margin: '50px',
  perspective: '200px',
  position: 'absolute',
  width: '250px',
});

// Top eyelid
const EyelidTop = styled(Box)({
  animation: `${b1} 2.8s infinite ease-out alternate`,
  height: '50%',
  position: 'relative',
  overflow: 'hidden',
  transformOrigin: 'bottom',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '10%',
    right: '10%',
    paddingTop: '80%',
    borderRadius: '50%',
    background: '#fff',
    boxShadow: '-2px 0 0 3px inset #f1c27d, inset -5px 5px 2px 4px black',
  },
});

// Bottom eyelid
const EyelidBottom = styled(Box)({
  animation: `${b2} 2.8s infinite ease-out alternate`,
  height: '50%',
  position: 'relative',
  overflow: 'hidden',
  transformOrigin: 'top',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '10%',
    right: '10%',
    paddingTop: '80%',
    borderRadius: '50%',
    background: '#fff',
    boxShadow: '-2px 0 0 3px inset #f1c27d, inset -6px -4px 2px 4px black',
  },
});

const Eyeball = () => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        backgroundColor: '#000',
        height: '400px',
        justifyContent: 'center',
        left: '50%',
        mx: 'auto',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        WebkitTransform: 'translate(-50%, -50%)',
        width: '400px',
      }}
    >
      <EyeballContainer>
        <EyelidTop />
        <EyelidBottom />
      </EyeballContainer>
    </Stack>
  );
};

export default Eyeball;
