import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav
      id="hierarchical-breadcrumbs"
      aria-label="Migas de pan"
      className="flex items-center gap-1.5 text-xs text-stone-600 mb-6 flex-wrap"
    >
      <Link
        to="/home"
        className="flex items-center gap-1 hover:text-stone-900 transition-colors p-1 -m-1 rounded"
      >
        <Home className="w-3.5 h-3.5 text-stone-600" />
        <span>Inicio</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
            {isLast || !item.path ? (
              <span className="font-semibold text-stone-900">{item.label}</span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-stone-900 transition-colors p-1 -m-1 rounded"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
