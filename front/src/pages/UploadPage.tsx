import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const UploadPage = () => {
  const [imageUpload, setImageUpload] = useState<any>(null);
  const [name, setName] = useState<any>("");
  const [year, setYear] = useState<any>("");
  const [comments, setComments] = useState<any>("");
  const [category, setCategory] = useState<any>("");
  const [imageUrl, setImageUrl] = useState<any>("");

  const uploadFile = () => {
    if (imageUpload === null) {
      return;
    }
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // get download link
      getDownloadURL(imageRef).then((url) => {
        console.log("url", url);
        setImageUrl(url);
      });
      console.log("Uploaded a blob or file!", snapshot);
      alert("Image Uploaded");
    });
  };

  console.log(
    "name",
    name,
    "year",
    year,
    "comments",
    comments,
    "category",
    category
  );

  return (
    <div>
      <div>
        name
        <input id="name" onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        year
        <input type="year" onChange={(event) => setYear(event.target.value)} />
      </div>
      <div>
        {" "}
        comments
        <input
          type="comments"
          onChange={(event) => setComments(event.target.value)}
        />
      </div>
      <div>
        {" "}
        category
        <input
          type="category"
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>
      <input
        type="file"
        onChange={(event) => {
          if (event.target.files !== null) {
            setImageUpload(event.target.files[0]);
          }
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
    </div>
  );
};

export default UploadPage;
