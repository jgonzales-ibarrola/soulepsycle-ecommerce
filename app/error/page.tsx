'use client'

import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
import React, { use } from 'react'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const ErrorPage = (props: {
  searchParams: SearchParams
}) => {
 
  const searchParams = use(props.searchParams)
  const message = searchParams.message;

  function handleRedirect() {
    redirect('/')
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <p>Sorry, {message}</p>
      <Button type='button' onClick={handleRedirect}>Go back</Button>
    </div>
  )
}

export default ErrorPage