import { ROUTES } from "@/constants";
import {
    FolderIcon,
    HomeIcon, UsersIcon
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Admin", icon: HomeIcon, href: ROUTES.ADMIN, current: true },
  {
    name: "Passengers",
    icon: UsersIcon,
    href: ROUTES.PASSENGER,
    current: false,
  },
  {
    name: "Driver",
    icon: FolderIcon,
    href: ROUTES.DRIVER,
    count: 3,
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white p-5 h-full">
      <div className="flex flex-shrink-0 items-center px-4">
        <img
          className="h-8 w-auto invert"
          src="/cab.svg"
          alt="Your Company"
        />
      </div>
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "mr-3 h-6 w-6 flex-shrink-0"
                )}
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.current
                      ? "bg-white"
                      : "bg-gray-100 group-hover:bg-gray-200",
                    "ml-3 inline-block rounded-full py-0.5 px-3 text-xs font-medium"
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
