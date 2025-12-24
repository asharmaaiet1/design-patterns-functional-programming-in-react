export const PartialComponent = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : size === "large" ? "20px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const NewRedButton = PartialComponent(Button, { color: "red" });
export const SmallRedButton = PartialComponent(NewRedButton, {
  size: "small",
});
