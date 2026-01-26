import React from 'react';

interface TOCItem {
  id: string;
  title: string;
}

interface Props {
  items: TOCItem[];
}

const TableOfContents = ({ items }: Props) => {
  if (!items || items.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto w-64 p-4 bg-gray-50 border border-gray-200 rounded-lg">
      <h4 className="font-bold text-black mb-4 uppercase text-xs tracking-wider">Table of Contents</h4>
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="text-sm text-gray-600 hover:text-blue-700 hover:underline block leading-tight"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
