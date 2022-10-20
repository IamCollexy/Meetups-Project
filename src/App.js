import React from 'react'
import { Route , Routes } from 'react-router-dom'

import AllMeetups from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import NewMeetups from './pages/NewMeetups'
import Layout from './component/layout/Layout';

function App() {
  return (
    
    <Layout>
      <Routes>
<Route path="/" element={<AllMeetups/>} />
<Route path="/new-meetups" element={<NewMeetups/>} />
<Route path="favorites" element={<Favorites/>} />
</Routes>
    </Layout>
  )
}

export default App