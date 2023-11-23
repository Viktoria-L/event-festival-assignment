
type ProgressProps = {
    text: string;
}

const Progress = ({text}: ProgressProps) => {
  return (
    <p className="progress">{text}</p>
  )
}

export default Progress