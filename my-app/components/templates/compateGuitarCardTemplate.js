import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { useState, useEffect } from "react";
import GuitarCardTemplate from './guitarCardTemplate'
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

const cardStyle = {
    background: '#abb7d9',
    color: 'white',
    maxWidth: 345,
    margin: 5,
    "&:hover": {
        border: '1px solid yellow',
    },
};

const hoverStyle = {
    normal: {
        background: 'white',        
    },
    hover: {        
        border: '5px solid rgb(197 92 107 / 87%)',
      
    }
}
const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <span>Hover Me</span>
        </div>
    );
};



export default function CompareGuitarCardTemplate(props) {
    const { guitar } = props;
    const [expanded, setExpanded] = React.useState(false);
    // const [compare, setCompare] = React.useState([]);
    // const [hover, setHover] = useState(false);
    const dispatch = useDispatch();
    const [isHovering, setIsHovering] = useState(false);
    const compareGuitar = useSelector((state => state.guitars.value.compare));
    const selected = compareGuitar?.id === guitar.id;    


    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const setGuitarForCompare = () => {
        dispatch(SelectedGuitarsReducer.actions.setCompareGuitar(guitar))
    }


    const HoverText = () => {
        return (
            <>
            {compareGuitar && <div>
                
                {/* <GuitarCardTemplate
                    // key={compare.id}
                    guitar={compare}
                /> */}
                <p>
                    todo: create modal card on hover to display selected guitar against current guitar
                    {compareGuitar.model}

                    <Item style={cardStyle}>
                        <Card  sx={{ maxWidth: 300, background: 'yellow' }}>
                            this is the popup
                        <CardHeader
                        style={{ cursor: 'pointer' }}
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" style={{ fontSize: '12px' }}>
                                <p>{compareGuitar.make}</p>
                            </Avatar>
                        }
                        title={compareGuitar.model}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={compareGuitar.imgUrl}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <h4>Suggested MSRP: ${compareGuitar.price}</h4>
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
                                <p>{compareGuitar.description}</p>
                            </Typography>

                        </CardContent>
                    </Collapse>
                        </Card>
                    </Item>
                </p>
            </div>}
            </>
        );
    };



    return (
        <>
            <Item style={cardStyle}>
                <HoverableDiv
                    handleMouseOver={handleMouseOver}
                    handleMouseOut={handleMouseOut}
                />
                {isHovering && !selected && <HoverText />}
                <Card
                    sx={{ maxWidth: 345 }}
                    onDoubleClick={() => setGuitarForCompare()}

                // onClick={selectGuitars}
                >
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