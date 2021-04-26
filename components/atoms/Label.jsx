const Label = ({ text, ...props }) => {
  return (
    <p {...props}>{text}</p>
  );
}

export default Label;