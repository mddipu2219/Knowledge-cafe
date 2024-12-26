import PropTypes from "prop-types";
import { BsBookmarksFill } from "react-icons/bs";

const Blog = ({ blog, handleToBokkmarks, handleReadMark }) => {
  const {
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <div className=" mb-20">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between mb-4">
        <div className="flex gap-6">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time}</span> min red
          <button
            className="ml-4 text-2xl"
            onClick={() => handleToBokkmarks(blog)}
          >
            <BsBookmarksFill />
          </button>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>

      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            {" "}
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <div>
        <button
          onClick={() => handleReadMark(reading_time)}
          className="text-purple-400 text-xl underline"
        >
          ReadAsMark
        </button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleToBokkmarks: PropTypes.func,
  handleReadMark: PropTypes.func,
};
export default Blog;
