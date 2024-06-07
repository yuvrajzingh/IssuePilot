'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-lg space-y-3'>
        <TextField.Root placeholder='Title'>
        </TextField.Root>
        <TextArea placeholder='Description'></TextArea>
        <Button>Create Issue</Button>
    </div>
  )
}

export default page