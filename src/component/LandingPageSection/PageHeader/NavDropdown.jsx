import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowDownIcon from "../../../assets/icons/arrow-down.svg?react";

export function NavDropdown({ label, items, isMobile = false }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // Close on outside click (desktop only)
    useEffect(() => {
        if (isMobile) return;

        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [isMobile]);

    return (
        <li ref={ref} className="relative">
            {/* Trigger */}
            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                className="flex items-center gap-1 px-1 py-1 rounded-xl border border-transparent transition-colors duration-300 hover:border-primary"
                aria-haspopup="true"
                aria-expanded={open}
            >
                <span>{label}</span>
                <ArrowDownIcon
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Menu */}
            {open && (
                <ul
                    className={
                        isMobile
                            ? "mt-4 ml-4 flex flex-col gap-4 text-sm"
                            : "absolute left-0 top-full mt-3 w-56 rounded-xl bg-white shadow-lg border border-gray-200 z-50"
                    }
                >
                    {items.map((item) => (
                        <li
                            key={item.label}
                            className={
                                isMobile
                                    ? ""
                                    : "px-4 py-3 hover:bg-gray-100 transition-colors"
                            }
                        >
                            <Link to={item.to} onClick={() => setOpen(false)}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}
