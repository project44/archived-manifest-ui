import { Box, Button, ManifestProvider } from '@manifest-ui/react';

export default function Root(props) {
  return (
    <ManifestProvider>
      <Box as="section" m="14">
        {props.name} is
        <Button>Mounted</Button>
      </Box>
    </ManifestProvider>
  );
}
