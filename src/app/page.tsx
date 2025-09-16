import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = () => {
  //image parent should not be static it should be relative if we need to use fill for image
  //for aspect we say height will be 3 times smaller than width
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductList />
    </div>
  );
};

export default Homepage;
