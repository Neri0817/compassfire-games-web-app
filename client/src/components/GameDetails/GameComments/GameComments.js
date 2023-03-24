import { useForm } from "../../../hooks/useForm";

export const GameComments = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );

  return (
    <article className="details-create-comment">
      <h2>Leave a comment:</h2>
      <form className="details-create-comment-form" onSubmit={onSubmit}>
        <textarea
          name="comment"
          rows="5"
          placeholder="Comment..."
          value={values.comment}
          onChange={changeHandler}
        ></textarea>
        <input
          className="details-create-comment-form-submit"
          type="submit"
          value="Add Comment"
        />
      </form>
    </article>
  );
};
