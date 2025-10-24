import { ShoppingBag } from "lucide-react";

interface HeaderProps {
  currentPage: 'home' | 'products';
  onNavigate: (page: 'home' | 'products') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <ShoppingBag className="w-8 h-8 text-red-600" />
            <span className="text-red-600">Yến Sào Cao Cấp</span>
          </div>
          <nav className="flex gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home'
                  ? 'text-red-600'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              Trang chủ
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`transition-colors ${
                currentPage === 'products'
                  ? 'text-red-600'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              Sản phẩm
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
