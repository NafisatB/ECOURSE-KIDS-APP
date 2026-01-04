import { Link } from "react-router-dom";

export function NavItem({ to, children }) {
  return (
    <li className="flex items-center">
      <Link
        to={to}
        className="flex items-center gap-1 px-1 py-1 rounded-xl border border-transparent transition-colors duration-300 hover:border-primary"
      >
        {children}
      </Link>
    </li>
  );
}
