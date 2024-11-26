import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Khám phá hương vị tinh tế và đa dạng tại nhà hàng của chúng tôi, nơi các món ăn được chế biến từ nguyên liệu tươi ngon và phong phú. Chúng tôi tự hào mang đến những món ăn từ salad tươi mát, mì Ý đậm đà đến bánh nướng thơm ngon và món chay thanh đạm. Với sự kết hợp hoàn hảo giữa ẩm thực truyền thống và sáng tạo hiện đại, chúng tôi cam kết mang đến trải nghiệm ẩm thực đặc biệt trong từng món ăn.</p>

            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Công Ty Tomato</h2>
            <ul>
                <li>Trang Chủ</li>
                <li>Về Chúng Tôi</li>
                <li>Giao Hàng</li>
                <li>Chính Sách Bảo Mật</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>LIÊN HỆ</h2>
            <ul>
                <li>+84-343-839-979</li>
                <li>tomato@email.com</li>
            </ul>  
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Bản quyền 2024 © Tomato.com - Bảo lưu mọi quyền.</p>
    </div>
  )
}

export default Footer
