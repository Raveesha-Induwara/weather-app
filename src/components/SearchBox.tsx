import { cn } from "@/utils/cn";
import { IoSearch } from "react-icons/io5";

interface Props {
  value: string;
  className?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const SearchBox = ({ className, value, onChange, onSubmit }: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex relative items-center justify-center h-10",
        className
      )}
    >
      <input
        type="text"
        value={value}
        placeholder="Search location..."
        onChange={onChange}
        className="h-full w-[230px] px-4 rounded-l-md border border-gray-300 focus:outline-none focus:border-gray-500"
      />
      <button className="right-0 h-full px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 cursor-pointer">
        <IoSearch size={25} />
      </button>
    </form>
  );
};

export default SearchBox;
