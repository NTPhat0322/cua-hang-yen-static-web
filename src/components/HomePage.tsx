import { Phone, Mail, MapPin, Award, Shield, Truck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface HomePageProps {
  onNavigateToProducts: () => void;
}

export function HomePage({ onNavigateToProducts }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1755994990454-975de278ed51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkJTIwbmVzdCUyMHNvdXB8ZW58MXx8fHwxNzYxMTk4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Yến Sào"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-white mb-4">Yến Sào Thiên Nhiên 100%</h1>
            <p className="text-xl mb-8">
              Nguồn dinh dưỡng quý giá từ thiên nhiên, mang đến sức khỏe và sắc
              đẹp cho gia đình bạn
            </p>
            <Button
              onClick={onNavigateToProducts}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Xem Sản Phẩm
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Về Sản Phẩm Yến Sào</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1613787140702-b06ce8ad6710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lmdGxldCUyMG5lc3QlMjBwcm9kdWN0fGVufDF8fHx8MTc2MTE5ODEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Yến Sào Chất Lượng"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="mb-4">Yến Sào Cao Cấp - Dinh Dưỡng Vàng</h3>
              <p className="text-gray-600 mb-6">
                Yến sào là món ăn bổ dưỡng quý giá được làm từ tổ chim yến, chứa
                nhiều protein, khoáng chất và acid amin thiết yếu. Sản phẩm của
                chúng tôi được thu hoạch từ những tổ yến tự nhiên, đảm bảo 100%
                nguyên chất.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Tăng cường sức đề kháng, làm đẹp da
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Bổ phổi, tốt cho hệ hô hấp
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Giúp phục hồi sức khỏe sau ốm
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Cam Kết Chất Lượng</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="mb-2">100% Tự Nhiên</h3>
              <p className="text-gray-600">
                Yến sào nguyên chất, không tẩy trắng, không chất bảo quản
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="mb-2">Chứng Nhận Chất Lượng</h3>
              <p className="text-gray-600">
                Đạt tiêu chuẩn an toàn thực phẩm, có giấy chứng nhận nguồn gốc
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="mb-2">Giao Hàng Tận Nơi</h3>
              <p className="text-gray-600">
                Đóng gói cẩn thận, giao hàng nhanh chóng trên toàn quốc
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Liên Hệ Với Chúng Tôi</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="mb-6">Thông Tin Liên Hệ</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">Hotline</p>
                      <p>0123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">Email</p>
                      <p>yensaocaocap@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">Địa chỉ</p>
                      <p>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-8">
                <h3 className="mb-6">Giờ Làm Việc</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600">Thứ 2 - Thứ 6</p>
                    <p>8:00 - 18:00</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Thứ 7 - Chủ nhật</p>
                    <p>8:00 - 17:00</p>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Liên Hệ Ngay
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
