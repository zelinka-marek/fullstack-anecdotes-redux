import { useSelector } from "react-redux";

export function Notification() {
  const notification = useSelector(({ notification }) => notification);

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
      {notification}
    </div>
  );
}
