import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head';

export default function Navbar(){
    const [ session, loading ] = useSession()

    return(
        <div>
         <Head>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        
    </Head>
    <nav className="navbar navbar-expand-lg navbar-light bg-light x">
   
  <a className="navbar-brand" href="/">Bloggs</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      {session && <>
        <li className="nav-item">
        <a className="nav-link" href="/profile">Dashboard</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/profile">Settings</a>
      </li>
      
      </>
      }
     
      <li className="nav-item">
      {!session && <>
        <img  onClick={signIn} className="imga"  src="https://www.flaticon.com/svg/static/icons/svg/847/847969.svg"/>
      </>}
      {session && <>
       
        <img  onClick={signOut} className="imga"  src={session.user.image}/>
      
      </>}
       

      </li>
    </ul>
  </div>
  
  <style jsx>{`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
        .navbar-brand{
            font-family: 'Ubuntu', sans-serif;
            font-size: 27px;


        }
        .x{
            height: 70px;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif !important;
        }
        .h1{
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif !important;
        }
        .imga{
            border-radius: 50%;
            height: 37px;
            width: 37px;
            margin-left: 40px;
            box-shadow: 0px 0px 10px 0px #424242;
            cursor: pointer;
          
            
        }
        .imga:hover{
            transform: scale(1.1);
        }
        .nav-link{
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            font-size: 15px;
            font-weight: 400;
        }
  
  `}</style>
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
</nav>
</div>

    )
}