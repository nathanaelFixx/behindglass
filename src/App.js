import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const PageLink = ({ to, children }) => (
  <div className="page-link">
    <Link to={to}>{children}</Link>
  </div>
);

const Home = () => (
  <div className="page home">
    <PageLink to="/videos">Videos</PageLink>
    <PageLink to="/socials">Socials</PageLink>
  </div>
);

const Socials = () => (
  <div className="page socials">
    <div class="video-entry">
      <a href="https://discord.gg/qhczhEbm9y" target="_blank" rel="noopener noreferrer">
          <div>Discord</div>
      </a>
    </div>
    
    <div class="video-entry">
      <a href="https://twitter.com/INCENDlUM" target="_blank" rel="noopener noreferrer">
          <div>Twitter</div>
      </a>
    </div>

    <div class="video-entry">
      <a href="https://www.youtube.com/@Iimerance" target="_blank" rel="noopener noreferrer">
          <div>Second Channel</div>
      </a>
    </div>
  </div>
);

const Videos = () => (
  <div className="page videos">
    <PageLink to="/old-videos">Old, Deleted Videos</PageLink>
    <div className="non-clickable">Commentary</div>
  </div>
);

const OldVideos = () => (
  <div className="page old-videos">
    {/* Replace with actual video content */}
    <div class="video-entry">
      <a href="https://www.youtube.com/watch?v=hGEaqBqFpFw" target="_blank" rel="noopener noreferrer">
          <div>My Mom Found Out That I Bought a Fleshlight</div>
      </a>
      <span class="video-date"> - July 10, 2016</span>
    </div>

    <div class="video-entry">
      <a href="https://www.youtube.com/watch?v=UqtzxuMgoVE" target="_blank" rel="noopener noreferrer">
          <div>I Got My First Handjob at a Happy Ending Massage Parlor</div>
      </a>
      <span class="video-date"> - December 29, 2017</span>
    </div>

    <div class="video-entry">
      <a href="https://www.youtube.com/watch?v=RfIavIlG1C8" target="_blank" rel="noopener noreferrer">
          <div>Losing My Virginity to a Prostitute</div>
      </a>
      <span class="video-date"> - March 27, 2018</span>
    </div>

    <div class="video-entry">
      <a href="https://www.youtube.com/watch?v=BHdMYlHcdU8" target="_blank" rel="noopener noreferrer">
          <div>Does Pornhub's "Fuck now" Feature actually work?</div>
      </a>
      <span class="video-date"> - October 21, 2018</span>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/old-videos" element={<OldVideos />} />
      </Routes>
    </Router>
  );
}

export default App;
