import { React,useState} from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Card from './Component/Card';
import Aside from './Component/Aside';
import RightAside from './Component/RightAside';
import PostComposer from './Component/PostComposer';
import Posts from './Component/Posts';
import PostDetails from './Component/PostDetails';

function App() {
 
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
    <Router>
    <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <main className="flex flex-wrap ">
      <div className="w-full sm:w-1/4 p-4 ">
        <Card />
        <Aside />
      </div>
      <div className="w-full sm:w-1/2 p-4 " >
        <PostComposer />
        <Routes>
        <Route path="/" element={<Posts searchQuery={searchQuery} />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </div>
      <div className="w-full sm:w-1/4 p-4">
        <RightAside />
      </div>
    </main>
  </Router>
      
    </>
  )
}

export default App
