export default function Selecet({ title, options, className, defaultValue }) {
  return (
    <div>
      <select
        defaultValue={defaultValue}
        className={`w-24 p-4 appearance-none border border-gray-300 dark:text-night-50 ${className}`}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((o) => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
