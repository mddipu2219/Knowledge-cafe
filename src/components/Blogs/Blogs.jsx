import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handleToBokkmarks, handleReadMark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3 rounded-xl ml-5">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleToBokkmarks={handleToBokkmarks}
          handleReadMark={handleReadMark}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleToBokkmarks: PropTypes.func,
  handleReadMark: PropTypes.func,
};
export default Blogs;
