export const LanguageSwitcher = () => {
  return (
    <div className="flex justify-end px-2 p-2 text-xs">
      <div className="flex cursor-pointer mr-6">
        <p className="mr-2">ID</p>
        <img
          className="h-5 w-5 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Indonesia_%28bordered%29.svg/1024px-Flag_of_Indonesia_%28bordered%29.svg.png"
        />
      </div>
      <div className="flex cursor-pointer">
        <p className="mr-2">EN</p>
        <img
          className="h-5 w-5 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png"
        />
      </div>
    </div>
  );
};
