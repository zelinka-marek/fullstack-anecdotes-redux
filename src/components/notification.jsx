export function Notification(props) {
  return (
    <div
      role="alert"
      style={{
        margin: "16px 0",
        border: "solid",
        padding: "10px 14px",
        borderWidth: 1,
      }}
    >
      {props.message}
    </div>
  );
}
