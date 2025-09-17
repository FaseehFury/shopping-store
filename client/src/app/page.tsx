import ProductList from "@/components/ProductList";
import Image from "next/image";

//if next js component is async it will be server component by default no need useParams Hook
const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  //image parent should not be static it should be relative if we need to use fill for image
  //for aspect we say height will be 3 times smaller than width
  const category = (await searchParams).category;
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
