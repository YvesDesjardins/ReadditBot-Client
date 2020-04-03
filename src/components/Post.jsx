import React from 'react';
import '../css/Post.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

export default function Post(props) {
  function parsePost() {
      return (
        <Card className='post' variant='outlined'>
        <CardHeader
          title={ props.title }
          subheader={ props.author }
        />
        <CardMedia
          className='post-content'
          image={ props.url }
          title={ props.title }
        />
        <CardActions>
          <Button size="small" href={ `https://www.reddit.com/${props.id}` }>
            Open in Reddit
          </Button>
        </CardActions>
          {/* <div className='post-content-header'>
            <div className='post-content-title'>
              { props.title }
            </div>
            Posted by: { props.author }<br/>
          </div>
          <div className='post-content'>
            <img src={ props.url } alt='Gif' />
          </div>
          <div className='post-content-footer'>
            <a href= { `https://www.reddit.com/${props.id}` }>Link to post</a>
          </div> */}
        </Card>);
    }

  return parsePost();
}
