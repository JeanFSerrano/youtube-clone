import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import fetchFromApi from '../utils/fetchFromApi'
import { Videos, Loader } from './'

const VideoDetail = () => {

  const [relatedVideos, setRelatedVideos] = useState(null)
  const [videoDetail, setVideoDetail] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setVideoDetail(data.items[0]))

    fetchFromApi(`search?part=snipper&relatedToVideoId=${id}&type=video`)
      .then(data => setRelatedVideos(data.items))

  }, [id]);

  if (!videoDetail?.snippet) return <Loader/>

  const { snippet: { title, channelTitle, channelId }, statistics: { viewCount, likeCount } } = videoDetail

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1} ml={4}>
          <Box sx={{ width: '70%', position: 'absolute', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      <Box mr={4} px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
        <Typography variant='h5' color='#fff' sx={{mb: 1, }} >
          Related Videos
        </Typography>
        <Videos videos={relatedVideos} direction='column' width='300px' />
      </Box>
      </Stack >
    </Box >
  )
}

export default VideoDetail