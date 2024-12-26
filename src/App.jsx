import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import { useState } from "react";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readmarks, setReadmarks] = useState(0);

  const handleToBokkmarks = (blog) => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleReadMark = (time) => {
    console.log("readmark", time);
    const newReadMark = readmarks + time;
    setReadmarks(newReadMark);
  };
  return (
    <>
      <Header></Header>
      <div className="  md:flex  max-w-7xl mx-auto">
        <Blogs
          handleToBokkmarks={handleToBokkmarks}
          handleReadMark={handleReadMark}
        ></Blogs>
        <BookMarks bookmarks={bookmarks} readmarks={readmarks}></BookMarks>
      </div>
    </>
  );
}

export default App;
