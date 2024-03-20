import {
  NewspaperIcon,
  TagIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

export default [
  {
    path: "/admin/news",
    label: "News",
    icon: <NewspaperIcon className="block h-7 w-7" aria-hidden="true" />,
  },
  {
    path: "/admin/tags",
    label: "Tags",
    icon: <TagIcon className="block h-7 w-7" aria-hidden="true" />,
  },
  {
    path: "/admin/ad",
    label: "Ad",
    icon: <MegaphoneIcon className="block h-7 w-7" aria-hidden="true" />,
  },
];
