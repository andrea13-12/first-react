import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Headers from './component/Headers';
import Footer from './component/Footer';
import MainContent from './component/MainContent';

function Page () {
  return (
    <>
      <Headers />
      <MainContent/>
      <Footer/>
    </>
  )
  }

ReactDOM.render(<Page/>, document.getElementById("root"))
