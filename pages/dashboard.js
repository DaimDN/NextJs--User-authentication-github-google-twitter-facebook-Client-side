import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import {Redirect, Router} from 'react-router'

export default function Page() {
   
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
    
      Not signed in <br/>
      <Head>
    <title>Login</title>
  
    
    </Head>
      <button className="btn btn-primary" onClick={signIn}>Sign in</button>
    </>}
    {session && <>
    <Navbar/>
    <div className="jumbotron">
    <Head>
    <title>Dashboard</title>
  
    
    </Head>
    
        <div><h1>Welcome {session.user.name} !</h1>
        
        <button onClick={signOut}className="btn btn-primary btn-g">SignOut</button>
        
        </div>

    </div>

   
  
    
    </>}
    <style jsx>{`
    
    
    
      
    `}

    </style>
    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        
        
      `}</style>
  </>
}