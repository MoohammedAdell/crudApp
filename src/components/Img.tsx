interface IProps {
  src: string;
  alt: string;
  className: string
}
const Img = ({ src, alt , className }: IProps) => {
  return <img src={src} alt={alt} className={className}/>;
};

export default Img;
