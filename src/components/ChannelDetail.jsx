import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Videos } from "."
import fetchFromApi from '../utils/fetchFromApi'
import ChannelCard from "./ChannelCard"


const ChannelDetail = () => {

  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {

    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetails(data?.items[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items))

  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 23%, rgba(140,22,22,1) 82%, rgba(189,107,107,1) 100%)',
          zIndex: '10',
          height: '300px'
        }} />
        <ChannelCard channelDetail={channelDetails} marginTop='-93px' />
      </Box>
      <Box display='flex' p={2} margin='auto' ml={2}>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail