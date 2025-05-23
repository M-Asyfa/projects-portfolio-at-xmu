export function Card({ children }) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 transition">
            {children}
        </div>
    );
}
