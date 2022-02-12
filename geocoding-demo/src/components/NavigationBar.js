export const Nav = () => {
  return (
    <div className="grid grid-cols-3 h-16">
      <div className="col-span-2 flex justify-start items-center px-4">
        <div className="flex rounded-full w-20 h-8 bg-[#19817c]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};