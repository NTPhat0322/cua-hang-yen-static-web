import { ShoppingCart, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const products = [
  {
    id: 1,
    name: "Yến Sào Tinh Chế Cao Cấp",
    price: "2.500.000đ",
    originalPrice: "3.000.000đ",
    unit: "100g",
    image: "https://images.unsplash.com/photo-1755994990454-975de278ed51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkJTIwbmVzdCUyMHNvdXB8ZW58MXx8fHwxNzYxMTk4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    description: "Yến sào nguyên chất, tinh chế từ tổ yến tự nhiên",
    shopeeLink: "https://shopee.vn/",
    badge: "Bán chạy"
  },
  {
    id: 2,
    name: "Yến Sào Nguyên Tổ",
    price: "3.200.000đ",
    originalPrice: "3.800.000đ",
    unit: "100g",
    image: "https://images.unsplash.com/photo-1613787140702-b06ce8ad6710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lmdGxldCUyMG5lc3QlMjBwcm9kdWN0fGVufDF8fHx8MTc2MTE5ODEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5.0,
    description: "Yến sào nguyên tổ nguyên chất, cao cấp nhất",
    shopeeLink: "https://shopee.vn/",
    badge: "Cao cấp"
  },
  {
    id: 3,
    name: "Yến Sào Chưng Sẵn",
    price: "450.000đ",
    originalPrice: "550.000đ",
    unit: "lọ 70ml",
    image: "https://images.unsplash.com/photo-1601071824666-dc1fb5c6169d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWxsbmVzcyUyMHByb2R1Y3R8ZW58MXx8fHwxNzYxMTk4MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    description: "Yến sào chưng sẵn tiện lợi, dùng ngay",
    shopeeLink: "https://shopee.vn/",
    badge: "Tiện lợi"
  },
  {
    id: 4,
    name: "Yến Sào Vụn Cao Cấp",
    price: "1.800.000đ",
    originalPrice: "2.200.000đ",
    unit: "100g",
    image: "https://images.unsplash.com/photo-1558722199-56eabc94fb69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwdHJhZGl0aW9uYWwlMjBmb29kfGVufDF8fHx8MTc2MTE5ODEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    description: "Yến sào vụn chất lượng cao, giá tốt",
    shopeeLink: "https://shopee.vn/",
    badge: "Giá tốt"
  },
  {
    id: 5,
    name: "Yến Sào Huyết Đảo",
    price: "4.500.000đ",
    originalPrice: "5.500.000đ",
    unit: "100g",
    image: "https://images.unsplash.com/photo-1755994990454-975de278ed51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkJTIwbmVzdCUyMHNvdXB8ZW58MXx8fHwxNzYxMTk4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5.0,
    description: "Yến sào huyết đảo quý hiếm, giá trị cao",
    shopeeLink: "https://shopee.vn/",
    badge: "Quý hiếm"
  },
  {
    id: 6,
    name: "Combo Yến Sào Gia Đình",
    price: "6.800.000đ",
    originalPrice: "8.000.000đ",
    unit: "Combo 500g",
    image: "https://images.unsplash.com/photo-1613787140702-b06ce8ad6710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lmdGxldCUyMG5lc3QlMjBwcm9kdWN0fGVufDF8fHx8MTc2MTE5ODEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    description: "Combo tiết kiệm cho cả gia đình",
    shopeeLink: "https://shopee.vn/",
    badge: "Combo"
  }
];

export function ProductsPage() {
  const handleBuyClick = (shopeeLink: string) => {
    window.open(shopeeLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="mb-4">Sản Phẩm Yến Sào</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập yến sào cao cấp với nhiều loại và mức giá phù hợp cho mọi nhu cầu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-red-600 text-white">
                  {product.badge}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{product.unit}</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-600">{product.price}</span>
                  <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                </div>

                <Button
                  onClick={() => handleBuyClick(product.shopeeLink)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Mua Ngay trên Shopee
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-center mb-8">Tại Sao Chọn Chúng Tôi?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-red-600 mb-2">✓</div>
              <h3 className="text-lg mb-2">Chất Lượng Đảm Bảo</h3>
              <p className="text-gray-600 text-sm">
                100% yến sào tự nhiên, có giấy chứng nhận nguồn gốc
              </p>
            </div>
            <div>
              <div className="text-red-600 mb-2">✓</div>
              <h3 className="text-lg mb-2">Giá Cả Hợp Lý</h3>
              <p className="text-gray-600 text-sm">
                Giá tốt nhất thị trường, nhiều ưu đãi hấp dẫn
              </p>
            </div>
            <div>
              <div className="text-red-600 mb-2">✓</div>
              <h3 className="text-lg mb-2">Hỗ Trợ Tận Tâm</h3>
              <p className="text-gray-600 text-sm">
                Tư vấn nhiệt tình, hỗ trợ khách hàng 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
