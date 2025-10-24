import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">Yến Sào Cao Cấp</h3>
            <p className="text-sm">
              Chuyên cung cấp yến sào nguyên chất, chất lượng cao, 
              mang đến sức khỏe và sắc đẹp cho gia đình Việt.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Liên Kết</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">Trang chủ</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Sản phẩm</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Liên hệ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Liên Hệ</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>yensaocaocap@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Theo Dõi Chúng Tôi</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 Yến Sào Cao Cấp. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
