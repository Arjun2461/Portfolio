import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Cards = ({ item }) => {
    return (

        <Card sx={{ maxWidth: 700 }} className="card p-4 m-8 text-left text-inherit border border-gray-300 rounded-lg transition-colors duration-150 ease-in-out  hover:border-blue-500  focus:border-blue-500  active:border-blue-500 font-Poppins">
            <CardMedia
                component="img"
                width="100%"
                image={item.image}
                alt="img"
            />
            <CardContent className="p-4 sm:p-8">
                <Typography gutterBottom variant="h5" component="div" className='text-xl mb-4'>
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='text-lg leading-relaxed'>
                    {item.desc}
                </Typography>
            </CardContent>
            <CardActions className="p-4 sm:p-8">
                <Button size="small" target="_blank" rel='noreferrer' href={item.live} >Website</Button>
                <Button size="small" target="_blank" rel='noreferrer' href={item.Github} >GitHub</Button>
            </CardActions>
        </Card>

    )
}

export default Cards;
