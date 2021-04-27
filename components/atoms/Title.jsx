const Title = ({ text, ...props }) => {
  return (
    <h1 {...props}>{text}</h1>
  )
}

export default Title;