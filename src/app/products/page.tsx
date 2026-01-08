import ProductList from "../../components/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string; name: string }>;
}) => {
  const { category, name } = await searchParams;
  return (
    <div className="">
      <ProductList category={category} params="products" search={name} />
    </div>
  );
};

export default ProductsPage;
