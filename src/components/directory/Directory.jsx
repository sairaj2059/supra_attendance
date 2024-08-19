import React from "react";
import "./directory.css";
import folderIcon from "./folderIcon.png"; // Import the image

function Directory() {
  return (
    <div className="directory_container">
      <div className="file">
        <div className="folder-icon">
          <img src={folderIcon} alt="Folder Icon" />
        </div>
        <p>First year</p>
      </div>

      <div className="file">
        <div className="folder-icon">
          <img src={folderIcon} alt="Folder Icon" />
        </div>
        <p>First year</p>
      </div>
    </div>
  );
}

export default Directory;

