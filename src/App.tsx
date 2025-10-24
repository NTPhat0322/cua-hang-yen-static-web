import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { ProductsPage } from "./components/ProductsPage";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products'>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-1">
        {currentPage === 'home' ? (
          <HomePage onNavigateToProducts={() => setCurrentPage('products')} />
        ) : (
          <ProductsPage />
        )}
      </main>
      
      <Footer />
    </div>
  );
}
