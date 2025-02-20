'use client'

import { Button } from '@/components/ui/button'
import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'

const ErrorPage = () => {
  const searchParams = useSearchParams()
 
  const message = searchParams.get('message')

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