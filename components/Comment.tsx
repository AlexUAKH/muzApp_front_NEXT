import React, {FC} from 'react';
import {IComment} from "../types/track";
import {Box, Card, Grid, Typography} from "@mui/material";

interface CommentProps {
  comment: IComment
}

const Comment: FC<CommentProps> = ({comment}) => {
  return (
    <Card sx={{p:2}}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{comment.username}</Typography>
        <Typography variant="subtitle2" color="darkgrey">{comment.created_at}</Typography>
      </Grid>
      <Box sx={{p:1}}>
        <Typography variant="body1">
          {comment.text}
        </Typography>
      </Box>
    </Card>
  );
};

export default Comment;