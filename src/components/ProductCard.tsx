import { IProduct } from "../interfaces";
import { txtSlice } from "../utils/function";
import Img from "./Img";
import Button from "./ui/Button";
import SpanColor from "./ui/SpanColor";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price } = product;
  return (
    <div className="md:mx-0 max-w-sm md:max-w-lg mx-auto border border-gray-500 rounded-md p-2 ">
      <Img className="rounded-lg w-full lg:object-cover h-52" alt="product car" src={imageURL} />

      <h3 className="my-2 font-bold">{title}</h3>

      <p className="text-gray-500 text-sm">
        {txtSlice(description)}</p>

      <div className="flex space-x-2 my-5">
        <SpanColor className=" bg-red-600 "></SpanColor>
        <SpanColor className=" bg-green-600 "></SpanColor>
        <SpanColor className=" bg-teal-600 "></SpanColor>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-bold text-blue-800">{price}$</span>

        <Img
          className="w-10 h-10 rounded-full"
          alt="product car"
          src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-4">
        <Button
          onClick={() => {
            console.log("clicked");
          }}
          className="bg-red-700 "
        >
          EDIT
        </Button>
        <Button className="bg-indigo-700 ">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
