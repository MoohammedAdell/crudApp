import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Model from "./components/ui/Model";
import { Button } from "@headlessui/react";
import { productList } from "./data/index";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const productlist = productList.map((product) => (
    <ProductCard key={product.id} product={product}/>
  ));
  return (
    <>
      <Model isOpen={isOpen} title="Add to Product" onClose={close}>
        <div className="flex space-x-4 items-center justify-center ">
          <button className="bg-indigo-500 w-full text-white rounded-md p-3">
            Add to Product
          </button>
          <button
            className="bg-gray-500 w-full text-white rounded-md p-3"
            onClick={close}
          >
            Close
          </button>
        </div>
      </Model>
      <div className="flex flex-wrap justify-end m-4 mr-20">
        <Button
          className="rounded-lg bg-indigo-600 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
          onClick={open}
        >
          Add Product
        </Button>
      </div>
      <main className="container m-auto ">
      <div className="  p-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productlist}
      </div>
      </main>
    </>
  );
}

export default App;
