import React from 'react'
import { Box } from '@mui/material'

const actualYear = new Date().getFullYear()

const Footer = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#FF9551' }}>DCV {actualYear}</Box>
    )
}

export default Footer;
