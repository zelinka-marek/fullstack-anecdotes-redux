export function Filter(props) {
  const { onChange } = props;

  return (
    <form role="search">
      <label>
        filter{" "}
        <input
          type="search"
          name="filter"
          required
          onChange={({ target }) => onChange(target.value)}
        />
      </label>
    </form>
  );
}
