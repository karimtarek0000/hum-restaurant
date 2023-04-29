const renderTitle = (name: string): string => {
  const _name = name.split("-");
  _name[_name.length - 1] = `(${_name[_name.length - 1]})`;
  return _name.join(" ");
};

function ResturanHeader({ name }: { name: string }): JSX.Element {
  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white capitalize text-shadow text-center">
          {renderTitle(name)}
        </h1>
      </div>
    </div>
  );
}

export default ResturanHeader;
