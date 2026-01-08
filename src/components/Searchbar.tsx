"use client";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/products?name=${name}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <form
      className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 p-2 py-1 shadow-md"
      onSubmit={handleSearch}
    >
      <input
        name="name"
        type="text"
        placeholder="Search..."
        defaultValue={searchParams.get("name")?.toString()}
        className="text-sm outline-0 bg-transparent w-full"
      />
      <button className="cursor-pointer">
        <Search className="w-4 h-4 text-gray-500" />
      </button>
    </form>
  );
};

export default SearchBar;
