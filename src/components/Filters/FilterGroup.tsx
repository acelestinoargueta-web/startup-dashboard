type Props = {
  title: string;
  options: string[];
  selected: string[];
  disabled?: boolean;
  onToggle: (value: string) => void;
};

export const FilterGroup = ({
  title,
  options,
  selected,
  onToggle,
  disabled,
}: Props) => {
  return (
    <div className="mb-5">
      <p className="text-xs text-gray-500 mb-3">{title}</p>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option);

          return (
            <button
              key={option}
              onClick={() => onToggle(option)}
              disabled={disabled}
              className={`text-xs px-3 py-1 rounded-full border transition
                ${
                  active
                    ? "bg-blue-400 text-white-400 hover:bg-blue-500"
                    : "bg-black text-white-400 border-white-200 hover:bg-blue-500"
                }
              `}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};