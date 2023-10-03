const Tooltip = ({
  message,
  children,
}: {
  message: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="group relative flex">
      <span className="absolute left-[-30px] top-[-35px] w-max scale-0 rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100">
        {message}
      </span>
      {children}
    </div>
  );
};

export default Tooltip;
