import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/page1/Welcome';
import Carousel from './components/page1/Carousel';
import Math from './components/page2/Math';
import English from './components/page2/English';
import Question from './components/page1/Question';
import BottomCarousel from './components/page1/BottomCarousel';
import { useLayoutEffect } from 'react';

function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<> < Welcome /><Carousel /><Question/> <BottomCarousel /></>}></Route>
          <Route exact path='/math' element={<Math/>}></Route>
          <Route exact path='/english' element={<English/>}></Route>
          <Route exact path='*' element={<> <h1>No page here.</h1></>}></Route>
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
