import * as React from 'react';
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import {SelectedGuitarsReducer} from '../../reducers/guitars'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function GuitarCardTemplate(props) {
    const {guitar} = props;
    const selectedGuitarIds = useSelector((state => state.guitars.value.selectedIds));
    const [expanded, setExpanded] = React.useState(false);    
    const [selected, setSelected] = React.useState(selectedGuitarIds.has(guitar.id))
    const dispatch = useDispatch();
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const selectGuitars = () => {
        //  setSelected(prev=>!prev) is a toggle 
        setSelected(prev=>!prev)
    }

    useEffect(() =>{
        if(selected){
            dispatch(SelectedGuitarsReducer.actions.select(guitar))
        }else{
            dispatch(SelectedGuitarsReducer.actions.deselect(guitar))
        }
    }, [selected])

    const cardStyle = !selected ? { background: '#abb7d9', color: 'white' }: { background: 'red', color: 'white' };


    return (
        <>
            <Item style={cardStyle}
            >
                {/* change seelected guitars input id from  guitar.id to guitar.uuid */}
                <Card sx={{ maxWidth: 345 }} onClick={selectGuitars}>
                    <CardHeader
                        style={{ cursor: 'pointer' }}
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" style={{ fontSize: '12px' }}>
                                <p>{guitar.make}</p>
                            </Avatar>
                        }

                        title={guitar.model}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={guitar.imgUrl}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <h4>Suggested MSRP: ${guitar.price}</h4>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <p>Click arrow for description: </p>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                <p>{guitar.description}</p>
                            </Typography>

                        </CardContent>
                    </Collapse>
                </Card>
            </Item>
        </>
    );
}