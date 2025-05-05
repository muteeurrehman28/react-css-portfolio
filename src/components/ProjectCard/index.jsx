import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
  } from '@mui/material';
  import styles from './ProjectCard.module.css';
  
  export default function ProjectCard({ title, description, link, image }) {
    return (
      <Card className={styles.card} elevation={2} component="article">
        <CardMedia
          component="img"
          height="160"
          image={image || '/assets/placeholder.jpg'}
          alt={title}
          sx={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 1 }}
            component="h3"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 2 }}>
          <Button
            size="small"
            color="primary"
            href={link}
            target="_blank"
            variant="outlined"
            aria-label={`View ${title} project`}
          >
            View Project
          </Button>
        </CardActions>
      </Card>
    );
  }