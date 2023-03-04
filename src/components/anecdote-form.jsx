export function AnecdoteForm(props) {
  const { onSubmit } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const content = formData.get("anecdote");

    onSubmit(content);

    form.reset();
    form.elements.anecdote.focus();
  };

  return (
    <form style={{ display: "flex", gap: 8 }} onSubmit={handleSubmit}>
      <input type="text" name="anecdote" required aria-label="Anecdote" />
      <button type="submit">Save</button>
    </form>
  );
}
