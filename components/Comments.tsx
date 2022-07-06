import React, {FC} from 'react';
import {IComment} from "../types/track";
import {Box, Stack, Alert} from "@mui/material";
import Comment from "./Comment";

interface CommentsProps {
  comments: IComment[]
}

const Comments: FC<CommentsProps> = ({comments}) => {

  if (!comments.length) return (<Alert severity="info">Коментарів покищо немає</Alert>)

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={1}>
        {
          comments.map(comment => (
            <Comment
              key={comment._id}
              comment={comment}
            />
          ))
        }
      </Stack>
    </Box>
  );
};

export default Comments;