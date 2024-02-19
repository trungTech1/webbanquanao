import react, { useState } from "react";
import "./Header.scss";

import { Link } from "react-router-dom";
import {
  AiOutlineCloseCircle,
  AiOutlineExclamation,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
const Header = () => {
  const [isShowAuthen, setIsShowAuthen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isWishlistContentVisible, setIsWishlistContentVisible] =
    useState(false);
  const [isMinicartContentVisible, setIsMinicartContentVisible] =
    useState(false);

  const toggleMinicart = () => {
    setIsMinicartContentVisible(!isMinicartContentVisible);
  };

  const toggleWishlist = () => {
    setIsWishlistContentVisible(!isWishlistContentVisible);
  };
  return (
    <header>
      <div className="header-container">
        {isWishlistContentVisible && (
          <div className="overlay" onClick={toggleWishlist}></div>
        )}
        {isMinicartContentVisible && (
          <div className="overlay" onClick={toggleMinicart}></div>
        )}
        <div className="header-logo col-lg-2">
          {" "}
          <Link to="/">
            <img
              className="logo"
              src="https://routine.vn/media/amasty/webp/logo/websites/1/logo-black-2x_png.webp"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header-list col-lg-4">
          <ul>
            <li>
              <Link to={""}>Nam</Link>
            </li>
            <li>
              <Link to={""}>Nữ</Link>
            </li>
            <li>
              <Link to={""}>New</Link>
            </li>
            <li>
              <Link to={""}>Best</Link>
            </li>
            <li>
              <Link to={""}>Tết gieo lộc 30%</Link>
            </li>
          </ul>
        </div>

        <div className="hero-search-container col-lg-4">
          <div className="hero_search_form">
            <form action="">
              <input type="text" placeholder="Bạn đang tìm gì?" />
              <span>
                <AiOutlineSearch />
              </span>
            </form>
          </div>
          <div
            className={`wishlist-content ${
              isWishlistContentVisible ? "show" : ""
            }`}
          >
            <div className="wishlist-content-title">
              <div className="modal-header">
                {" "}
                <h3>
                  <AiOutlineHeart />
                  Sản phẩm yêu thích
                </h3>
                <button type="button" className="closeBtn">
                  <AiOutlineCloseCircle onClick={toggleWishlist} />
                </button>
              </div>
              <div className="modal-content">
                {wishlistItems.length === 0 ? (
                  <div className="message info empty">
                    <span>
                      <AiOutlineExclamation />
                      Danh sách yêu thích này không có sản phẩm nào
                    </span>
                  </div>
                ) : (
                  <div className="products-grid wishlist">
                    {/* Render danh sách sản phẩm yêu thích ở đây */}
                    {wishlistItems.map((item) => (
                      // Render từng sản phẩm
                      <div key={item.id}>{item.name}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={`minicart-content-wrapper ${
              isMinicartContentVisible ? "show" : ""
            }`}
          >
            <div className="block-title">
              <h3>
                <AiOutlineShoppingCart />
                Giỏ hàng
              </h3>
              <button type="button" className="closeBtn">
                <AiOutlineCloseCircle onClick={toggleMinicart} />
              </button>
            </div>
            {cartItems.length === 0 ? (
              <div className="block-content">
                <strong className="subtitle empty">
                  Giỏ hàng của bạn đang trống
                </strong>
                <div className="ins-content-wrapper">
                  <h2>FREESHIP ĐƠN HÀNG TỪ 399K</h2>
                  <p>
                    Mua sắm ngay để nhận ngay ưu đãi FREESHIP đơn hàng từ 399k
                  </p>
                </div>
              </div>
            ) : (
              <div className="block-content">
                <div className="products-grid">
                  {/* Render danh sách sản phẩm trong giỏ hàng ở đây */}
                  {cartItems.map((item) => (
                    <div key={item.id}>{item.name}</div>
                  ))}
                </div>
                <div className="cart-summary">
                  <div className="subtotal">
                    <span>Tạm tính:</span>
                    <span>0đ</span>
                  </div>
                  <div className="grand-total">
                    <span>Tổng cộng:</span>
                    <span>0đ</span>
                  </div>
                  <div className="actions">
                    <Link to="/checkout">Thanh toán</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="header-top-icon">
            <div className="header-right">
              <div className="authen-box">
                <div
                  className="header-right-icon"
                  onClick={() => {
                    setIsShowAuthen(!isShowAuthen);
                  }}
                >
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                </div>
                {isShowAuthen && (
                  <ul className={isShowAuthen ? "" : "hiden"}>
                    <li className="authen">
                      <button className="signIn">Đăng nhập</button>
                      <button className="register">Đăng ký</button>
                    </li>
                    <li>
                      <Link to={""}>Theo dõi đơn hàng</Link>
                    </li>
                    <li>
                      <Link to={""}>Khách hàng thành viên</Link>
                    </li>
                    <li>
                      <Link to={""}>Danh sách cửa hàng</Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="link-wishlist">
                <div className="header-right-icon" onClick={toggleWishlist}>
                  <Link to={""}>
                    <AiOutlineHeart />
                  </Link>
                </div>
              </div>

              <div className="header-right-icon" onClick={toggleMinicart}>
                <Link to={""}>
                  <AiOutlineShoppingCart />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
