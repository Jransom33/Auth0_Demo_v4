import Image from "next/image";
import Button from '@mui/material/Button';

import { auth0 } from "@/lib/auth0"

export default async function Home() {
  const session = await auth0.getSession()

  if (!session) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Button variant="contained" color="primary" href="/auth/login?screen_hint=signup">Sign up</Button>
        <Button variant="contained" color="secondary" href="/auth/login">Log in</Button>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Welcome, {session.user.name}!</h1>
      <Button variant="contained" color="primary" href="/auth/logout">Log out</Button>
    </div>
  )
}