import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'
import useSavePost from '../context/savePost';

export default function MediaCard({ title, body, id }) {

    const navigate = useNavigate()
    const { savePost, setSavePost } = useSavePost();

    const gotoproduct = () => {
        navigate(`/product/${id}`)
    }

    const savePostToContext = (event) => {
        event.stopPropagation()
        console.log('save post called');
        setSavePost([...savePost, data])
    }
    return (
        <Card sx={{ maxWidth: 345, cursor: 'pointer' }} onClick={gotoproduct}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1682687221213-56e250b36fdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={savePostToContext}>Save Post</Button>
            </CardActions>
        </Card>
    );
}