import { Stack } from '@mui/material'
import React from 'react'

import { categories } from '../utils/constants'

const SideBar = ({selectedCategory, setSelectedCategory}) => {
    
    return (
        <Stack
            direction='row'
            sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}
        >
            {categories.map(category => (
                <button key={category.name} className='category-btn' onClick={() => setSelectedCategory(category.name)} style={{ background: category.name === selectedCategory && '#FC1503', color: 'white' }}>
                    <span style={{marginRight: '.8rem'}}>{category.icon} </span>
                    <span> {category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default SideBar