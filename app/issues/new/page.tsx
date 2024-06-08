'use client';

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from '@radix-ui/themes'


const page = () => {
  return (
    <div className='max-w-lg space-y-3'>
        <TextField.Root placeholder='Title'>
        </TextField.Root>
        <SimpleMDE placeholder='Description'></SimpleMDE>
        <Button>Create Issue</Button>
    </div>
  )
}

export default page