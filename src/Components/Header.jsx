import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-[9999] py-4 pb-6 sm:pb-4 border-b-4 border-slate-600 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="container max-w-[1300px] mx-auto flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-between">
        <h1 className="font-primary font-bold text-xl">MovieSearch</h1>

        <div className="navigation flex flex-row items-center gap-6 text-base font-semibold font-secondary text-neutral-200">
          <SearchInput />
        </div>
      </div>
    </header>
  );
};

export default Header;
