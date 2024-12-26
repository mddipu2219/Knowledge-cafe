import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  console.log(bookmark);
  const { title } = bookmark;
  return (
    <div className="mb-6">
      <h2 className="text-2xl bg-sky-300 rounded-xl">{title}</h2>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};
export default Bookmark;
