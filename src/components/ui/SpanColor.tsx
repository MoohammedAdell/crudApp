interface IProps {
  className: string;
}
const SpanColor = ({ className }: IProps) => {
  return <span className={`${className} w-8 h-8 rounded-full cursor-pointer`}></span>;
};

export default SpanColor;
