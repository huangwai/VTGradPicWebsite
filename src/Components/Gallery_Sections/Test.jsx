// import React, { useEffect, useState } from "react";
// import storage from "../../firebase";

// const Burruss = () => {
//   const [imageUrls, setImageUrls] = useState([]);

//   useEffect(() => {
//     // Get a reference to the storage bucket
//     const storageRef = storage.ref("/Burruss");

//     // Fetch the list of images from the storage bucket
//     storageRef.listAll().then((res) => {
//       const promises = res.items.map((item) =>
//         item.getDownloadURL().catch((error) => console.log(error))
//       );

//       Promise.all(promises).then((urls) => {
//         setImageUrls(urls);
//       });
//     });
//   }, []);

//   return (
//     <div>
//       {imageUrls.map((url, index) => (
//         <img key={index} src={url} alt={`Image ${index}`} />
//       ))}
//     </div>
//   );
// };

// export default Burruss;
