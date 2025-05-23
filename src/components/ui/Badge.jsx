export function Badge({ children }) {
    return (
        <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-medium px-3 py-1 rounded-full">
      {children}
    </span>
    );
}
