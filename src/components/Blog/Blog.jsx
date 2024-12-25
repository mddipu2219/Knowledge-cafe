import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div className="w-2/3">
      <img src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <p>
            <span>{reading_time}</span> min red
          </p>
        </div>
      </div>
      <div>
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
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
