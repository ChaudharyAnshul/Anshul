import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import $ from "jquery";
import { Header } from './pages/Header';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import { Resume } from './pages/Resume';
import { Portfolio } from './pages/Portfolio';

export const App = () => {
  const [resumeData, setResumeData] = useState({});

  const getResumeData = () => {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: (data) => {
        setResumeData(data);
      },
      error: (xhr, status, err) => {
        console.log(err);
      }
    });
  }

  useEffect(() => {
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
    getResumeData();
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Portfolio data={resumeData.portfolio} />
      <Resume data={resumeData.resume} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}
