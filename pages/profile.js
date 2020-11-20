import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'

export default function Page() {
    <Head>
  
    
    </Head>
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <button className="btn btn-primary" onClick={signIn}>Sign in</button>
    </>}
    {session && <>
    <Navbar/>
    <div className="jumbotron">
    
        <div><h1>{session.user.email}</h1></div>
    </div>
      Signed in as {session.user.email} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
  </>
}