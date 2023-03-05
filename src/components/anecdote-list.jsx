import { useDispatch } from "react-redux";
import { voteForAnecdote } from "../reducers/anecdotes";
import { setNotification } from "../reducers/notification";

export function AnecdoteList(props) {
  const { anecdotes } = props;

  const dispatch = useDispatch();

  const vote = (anecdote) => {
    dispatch(voteForAnecdote({ id: anecdote.id }));

    dispatch(setNotification({ message: `you voted "${anecdote.content}"` }));
    setTimeout(() => dispatch(setNotification({ message: null })), 3500);
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}{" "}
            <button type="button" onClick={() => vote(anecdote)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
