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
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


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

export default function GibsonGuitars() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* <Stack direction="row" spacing={2}>
        <Link
          href={'/'}
        >
          <Button variant="contained" color="success">
            Home
          </Button>

        </Link>

      </Stack> */}
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              T
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Gibson Guitars"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="data:image/jpeg;base64,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"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
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
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}