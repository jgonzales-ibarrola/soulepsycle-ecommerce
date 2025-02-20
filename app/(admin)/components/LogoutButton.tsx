import { Button } from '@/components/ui/button'
import React from 'react'
import { logoutUser } from '../actions'

const LogoutButton = () => {
  return (
    <form>
      <Button type='button' formAction={logoutUser}>Logout User</Button>
    </form>
  )
}

export default LogoutButton