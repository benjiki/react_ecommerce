import React from "react";
import './homepage.style.scss';
import Directory from '../../components/dir_comp/dir.component';
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
            <Directory/>  
      </div>
    </div>
  );
};

export default Homepage;
