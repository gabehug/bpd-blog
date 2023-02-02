export default function NewCommentRoute() {
  return(
    <div>
      <h3>Comments</h3>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Comment: <textarea name="comment" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Post comment
          </button>
        </div>
      </form>
    </div>
  );
}