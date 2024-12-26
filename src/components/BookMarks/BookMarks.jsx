import PropTypes from "prop-types";
import Bookmark from "../Bokkmark/Bookmark";
const BookMarks = ({ bookmarks, readmarks }) => {
  return (
    <div className="md:1/3 text-3xl ml-4 mr-6 text-center rounded-xl bg-gray-200">
      <div className="mb-4 p-4 bg-slate-400">
        <h2>ReadingTime:{readmarks}min</h2>
      </div>
      <h2 className="text-center text-3xl mb-4">
        Bookmarks Blog:{bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
BookMarks.propTypes = {
  bookmarks: PropTypes.array,
  readmarks: PropTypes.number,
};
export default BookMarks;
