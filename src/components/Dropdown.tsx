import { Dispatch, SetStateAction, useState } from "react";

export default function Dropdown({
  sortState,
  setSortState,
}: {
  sortState: string;
  setSortState: Dispatch<SetStateAction<SortState>>;
}) {
  const [show, setShow] = useState(false);

  function closeMenu(sortState: SortState) {
    setShow(false);
    setSortState(sortState);
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Sort by {sortState}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          show ? "" : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <a
            href="#"
            onClick={() => closeMenu("createdAt")}
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            created at
          </a>
          <a
            href="#"
            onClick={() => closeMenu("asc")}
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-1"
          >
            filename asc
          </a>
          <a
            href="#"
            onClick={() => closeMenu("desc")}
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-2"
          >
            filename desc
          </a>
        </div>
      </div>
    </div>
  );
}
