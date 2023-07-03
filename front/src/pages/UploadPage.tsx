import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import imageService from "../services/images";
import "../styles/ImageContainer.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ImageType = {
  category: string;
  comments: string;
  name: string;
  url: string;
  year: number;
  id: string;
};

const UploadPage = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [imageUpload, setImageUpload] = useState<any>(null);
  const [name, setName] = useState<any>("");
  const [year, setYear] = useState<any>("");
  const [comments, setComments] = useState<any>("");
  const [category, setCategory] = useState<any>("");

  useEffect(() => {
    imageService.getAll().then((data: any) => {
      console.log("data", data);
      setImages(data);
    });
  }, []);

  const uploadFile = () => {
    if (imageUpload === null) {
      return;
    }
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // get download link
      if (
        imageUpload !== null &&
        year !== "" &&
        category !== "" &&
        name !== ""
      ) {
        getDownloadURL(imageRef).then((url) => {
          console.log("url", url);
          console.log("image uploaded to firebase");
          uploadData(url);
        });
      } else {
        console.log("error: can't upload image; missing data");
        console.log("name", name, "year", year, "category", category);
      }
    });
  };

  const uploadData = (url: String) => {
    console.log(
      "name",
      name,
      "year",
      year,
      "comments",
      comments,
      "category",
      category,
      "imageUrl",
      url
    );

    var ImageObject = {
      name,
      year,
      comments,
      url,
      category,
    };
    imageService.uploadImage(ImageObject).then((data: any) => {});
  };

  const deleteImage = (id: string) => {
    imageService.deleteImage(id).then((data: any) => {
      console.log("deleted ", id);
    });
  };

  return (
    <div>
      <div>
        <div>
          name
          <input id="name" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label>year</label>
          <select
            name="year"
            id="year"
            onChange={(event) => setYear(event.target.value)}
          >
            <option>select year</option>
            <option defaultValue="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </select>
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
          <label>category:</label>
          <select
            name="category"
            id="category"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>select category</option>
            <option value="traditional">Traditional</option>
            <option value="digital">Digital</option>
            <option value="photography">Photography</option>
          </select>
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
      <p>Delete images: </p>
      <div className="img-container">
        {images.map((image) => (
          <div className="container" key={image.id}>
            <LazyLoadImage className="img" src={image.url} alt="digital art" />
            <button className="btn" onClick={() => deleteImage(image.id)}>
              {" "}
              DELETE{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadPage;
