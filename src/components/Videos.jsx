import { Stack, Box } from "@mui/material";

import { ChannelCard, VideoCard, Loader } from "./";

const Videos = ({ videos, direction, width }) => {

  if (!videos?.length) return <Loader/>

  return (
    <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item?.id?.videoId && <VideoCard video={item} width />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;