import { Box, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { Videos } from ".";
import SideBar from "./SideBar"
import fetchFromApi, { BASE_URL, options } from '../utils/fetchFromApi'


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([])

  useEffect(() => {
  
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then(data => setVideos(data.items))

  }, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: { sx: 'column,', md: 'row' } }}>
      <Box sx={{width: {lg: '190px'}, height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          CopyWright Trotos all rights reserved
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed