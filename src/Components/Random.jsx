import storage from "../firebase";

import React from "react";

const Random = () => {
  const filePath = "/Pylons";
  console.log("filePath is: ", filePath);

  // Get the download URL for the file
  const handleClick = () => {
    storage
      .ref(filePath)
      .getDownloadURL()
      .then((url) => {
        // Use the download URL in your application
        console.log("Download URL:", url);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error getting download URL:", error);
      });
  };

  return (
    <div>
      <button
        style={{ color: "blue", fontSize: "100px" }}
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default Random;
