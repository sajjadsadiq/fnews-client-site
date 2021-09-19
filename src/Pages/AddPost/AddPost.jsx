import './AddPost.css'

export const AddPost = () => {
  return (
    <div className="addPost">
      <form className="addPostForm">
          <img className="addPostImg" src="https://joblinko.com/wp-content/uploads/2019/07/Freelancing-courses-blog-post-feature.jpg" alt="" />
        <div className="addPostFormGroup">
          <label htmlFor="fileInput">
            <i id="addPostIcon" class="fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="addPostInput"
            autoFocus={true}
          />
        </div>
        <div className="addPostFormGroup">
          <textarea
            placeholder="Tell Your Story..."
            type="text"
            id="addPostTextArea"
            className="addPostInput addPostText"
          ></textarea>
        </div>
        <button className="addPostSubmit">Publish</button>
      </form>
    </div>
  );
};
