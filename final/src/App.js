import React, { useState, useEffect } from 'react';
import './App.css';
import ImageUpload from './imageUpload';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Post from './Post';
import { db, auth } from "./firebase"
import { Input } from 'reactstrap';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function App() {
  const [open, setOpen] = React.useState(false);
  const [openSignIn,setOpenSignIn]=useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    })
    return () => {
      unsubscribe();
    }
  }, [user, username]);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          post: doc.data()

        }
      )));
    })
  }, [posts]);
  const signUp = (event) => {
    event.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser)=>{
      return authUser.user.updateProfile({
            displayName:username
      })
    })
    .catch((error) => alert(error.message))
    setOpen(false);
  }
  const signIn=(event)=>{
    event.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
    .catch((error)=>alert(error.message))
    setOpenSignIn(false);
  }

  return (
    <div className='app'>

      {user?.displayName ? (
        <ImageUpload username={user.displayName}/>
      ):(
        <h7>please login</h7>
      )}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='app__signup'>
              <h1>instagram </h1>
              <Input
                placeholder="username"
                type="test"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Typography>
            <Button type="submit" onClick={signUp}>Sign Up</Button>
          </Box>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='app__signup'>
              <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Typography>
            <Button type="submit" onClick={signIn}>Sign In</Button>
          </Box>

        
      
      </Modal>

      <div className='app_header'>
        <img
          className="app__headerImage"
          src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {user?(
        <Button onClick={()=>auth.signOut()}>Log Out</Button>
      ):(
        <div className='app__loginContainer'>
      <Button onClick={()=>setOpenSignIn(true)}>Log In</Button>
      <Button onClick={()=>setOpen(true)}>Sign UP</Button>
        </div>
      )}
      {
        posts.map(({id,post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
