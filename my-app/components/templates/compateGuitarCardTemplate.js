import * as React from 'react';
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


export default function CompareGuitarCardTemplate(props) {
    const { guitar } = props;
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const cardStyle = {
        background: '#abb7d9',
        color: 'white',
        maxWidth: 345,
        margin: 5
    };


    return (
        <>
            <Item style={cardStyle}>
                <Card sx={{ maxWidth: 345 }}
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