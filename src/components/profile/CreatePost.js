import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const CreatePost = () => {
  const [post, setPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  return (
    <form style={{ direction: 'flex-container' }} align="center">
      <div>
        <TextField
          // fullWidth
          multiline
          variant="outlined"
          size="small"
          label="Enter post..."
          value={post}
          onChange={(e) => {
            setPost(e.target.value);
          }}
        />
        {/* </div>
      <div> */}
        <Button
          style={{ marginLeft: '10px', marginTop: '9px' }}
          size="small"
          variant="contained"
          color="primary"
          text-transform="none"
          onSubmit={handleSubmit}
        >
          Post
        </Button>
      </div>
    </form>
  );
};

export default CreatePost;
