import React, { useState } from "react";
import "./products.scss";
import { AiOutlineHeart } from "react-icons/ai";
export default function products() {
  const initializeProducts = () => {
    // Kiểm tra xem có sản phẩm nào trong localStorage chưa
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      // Nếu có, chúng ta sẽ parse JSON string thành một mảng và trả về
      return JSON.parse(storedProducts);
    } else {
      // Nếu không, chúng ta sẽ tạo một mảng sản phẩm và lưu vào localStorage
      const initialProducts = [
        {
          id: 1,
          name: "Product 1",
          image: "https://example.com/product-1.jpg",
          colors: ["Red", "Blue", "Green"],
          sizes: ["S", "M", "L", "XL"],
        },
        {
          id: 2,
          name: "Product 2",
          image: "https://example.com/product-2.jpg",
          colors: ["Blue", "Black"],
          sizes: ["M", "L", "XL"],
        },
        // Thêm các sản phẩm khác tại đây
      ];
      localStorage.setItem("products", JSON.stringify(initialProducts));
      return initialProducts;
    }
  };
  const [products, setProducts] = useState(initializeProducts);
  return (
    <div className="product-container">
      <div className="product-men">
        <div className="block-title">
          <strong>NEW ARRIVALS - MEN</strong>
        </div>
        <div className="block-content">
          <ul className="products-grid">
            <li className="product-item">
              <div className="product-item-info">
                <a href="" className="product-item-photo">
                  <span className="product-image-container">
                    <img
                      className="product-image-photo"
                      src="https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-jean-nam-10f23dpa010_d_navy_1__1_jpg.webp"
                    ></img>
                  </span>
                </a>
              </div>
              <div className="product-item-details">
                <div className="product-name-wrapper">
                  <strong className="product-item-name">
                    Quần Jean Nam Ống Đứng Diễu Thân Trơn Form Straight -
                    10F23DPA010
                  </strong>
                  <a href="#" data-post="" title="Thêm vào danh sách yêu thích">
                    <span>
                      <AiOutlineHeart />
                    </span>
                  </a>
                </div>
                <div className="product-item-price-box">
                  <span className="regular-price">
                    <span className="price">1.000.000đ</span>
                  </span>
                </div>
                <div
                  className="swatch-opt-45505"
                  data-role="swatch-option-45505"
                >
                  <div
                    className="swatch-attribute color"
                    data-attribute-code="color"
                    data-attribute-id="93"
                    data-option-selected="153"
                  >
                    <div
                      aria-activedescendant="option-label-color-93-item-153"
                      tabIndex="0"
                      aria-invalid="false"
                      aria-required="true"
                      role="listbox"
                      aria-label="MÀU"
                      className="swatch-attribute-options clearfix"
                    >
                      <div
                        className="swatch-option image selected"
                        id="option-label-color-93-item-153"
                        index="0"
                      >
                        <img
                          src="https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/q/u/quan-jean-nam-10f23dpa010_d_navy_6__1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="products-item">
              <div className="products-item-info">
                <a href="" className="product-item-photo">
                  <span className="product-image-container">
                    <img
                      className="product-image-photo"
                      src="https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-jean-nam-10f23dpa010_d_navy_1__1_jpg.webp"
                    ></img>
                  </span>
                </a>
              </div>
              <div className="product-item-details">
                <div className="product-name-wrapper">
                  <strong className="product-item-name">
                    Quần Jean Nam Ống Đứng Diễu Thân Trơn Form Straight -
                    10F23DPA010
                  </strong>
                  <a href="#" data-post="" title="Thêm vào danh sách yêu thích">
                    <span>
                      <AiOutlineHeart />
                    </span>
                  </a>
                </div>
                <div className="product-item-price-box">
                  <span className="regular-price">
                    <span className="price">1.000.000đ</span>
                  </span>
                </div>
                <div
                  className="swatch-opt-45505"
                  data-role="swatch-option-45505"
                >
                  <div
                    className="swatch-attribute color"
                    data-attribute-code="color"
                    data-attribute-id="93"
                    data-option-selected="153"
                  >
                    <div
                      aria-activedescendant="option-label-color-93-item-153"
                      tabIndex="0"
                      aria-invalid="false"
                      aria-required="true"
                      role="listbox"
                      aria-label="MÀU"
                      className="swatch-attribute-options clearfix"
                    >
                      <div
                        className="swatch-option image selected"
                        id="option-label-color-93-item-153"
                        index="0"
                      >
                        <img
                          src="https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/q/u/quan-jean-nam-10f23dpa010_d_navy_6__1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="products-item">
              <div className="products-item-info">
                <a href="" className="product-item-photo">
                  <span className="product-image-container">
                    <img
                      className="product-image-photo"
                      src="https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-jean-nam-10f23dpa010_d_navy_1__1_jpg.webp"
                    ></img>
                  </span>
                </a>
              </div>
              <div className="product-item-details">
                <div className="product-name-wrapper">
                  <strong className="product-item-name">
                    Quần Jean Nam Ống Đứng Diễu Thân Trơn Form Straight -
                    10F23DPA010
                  </strong>
                  <a href="#" data-post="" title="Thêm vào danh sách yêu thích">
                    <span>
                      <AiOutlineHeart />
                    </span>
                  </a>
                </div>
                <div className="product-item-price-box">
                  <span className="regular-price">
                    <span className="price">1.000.000đ</span>
                  </span>
                </div>
                <div
                  className="swatch-opt-45505"
                  data-role="swatch-option-45505"
                >
                  <div
                    className="swatch-attribute color"
                    data-attribute-code="color"
                    data-attribute-id="93"
                    data-option-selected="153"
                  >
                    <div
                      aria-activedescendant="option-label-color-93-item-153"
                      tabIndex="0"
                      aria-invalid="false"
                      aria-required="true"
                      role="listbox"
                      aria-label="MÀU"
                      className="swatch-attribute-options clearfix"
                    >
                      <div
                        className="swatch-option image selected"
                        id="option-label-color-93-item-153"
                        index="0"
                      >
                        <img
                          src="https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/q/u/quan-jean-nam-10f23dpa010_d_navy_6__1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="products-item">
              <div className="products-item-info">
                <a href="" className="product-item-photo">
                  <span className="product-image-container">
                    <img
                      className="product-image-photo"
                      src="https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-jean-nam-10f23dpa010_d_navy_1__1_jpg.webp"
                    ></img>
                  </span>
                </a>
              </div>
              <div className="product-item-details">
                <div className="product-name-wrapper">
                  <strong className="product-item-name">
                    Quần Jean Nam Ống Đứng Diễu Thân Trơn Form Straight -
                    10F23DPA010
                  </strong>
                  <a href="#" data-post="" title="Thêm vào danh sách yêu thích">
                    <span>
                      <AiOutlineHeart />
                    </span>
                  </a>
                </div>
                <div className="product-item-price-box">
                  <span className="regular-price">
                    <span className="price">1.000.000đ</span>
                  </span>
                </div>
                <div
                  className="swatch-opt-45505"
                  data-role="swatch-option-45505"
                >
                  <div
                    className="swatch-attribute color"
                    data-attribute-code="color"
                    data-attribute-id="93"
                    data-option-selected="153"
                  >
                    <div
                      aria-activedescendant="option-label-color-93-item-153"
                      tabIndex="0"
                      aria-invalid="false"
                      aria-required="true"
                      role="listbox"
                      aria-label="MÀU"
                      className="swatch-attribute-options clearfix"
                    >
                      <div
                        className="swatch-option image selected"
                        id="option-label-color-93-item-153"
                        index="0"
                      >
                        <img
                          src="https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/q/u/quan-jean-nam-10f23dpa010_d_navy_6__1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-women">
        <div className="block-title">
          <strong>NEW ARRIVALS - WOMEN</strong>
        </div>
        <div className="block-content">
          <ul className="products-grid">
            <li className="product-item">
              <div className="product-item-info">
                <a href="" className="product-item-photo">
                  <span className="product-image-container">
                    <img
                      className="product-image-photo"
                      src="https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-jean-nam-10f23dpa010_d_navy_1__1_jpg.webp"
                    ></img>
                  </span>
                </a>
              </div>
              <div className="product-item-details">
                <div className="product-name-wrapper">
                  <strong className="product-item-name">
                    Quần Jean Nam Ống Đứng Diễu Thân Trơn Form Straight -
                    10F23DPA010
                  </strong>
                  <a href="#" data-post="" title="Thêm vào danh sách yêu thích">
                    <span>
                      <AiOutlineHeart />
                    </span>
                  </a>
                </div>
                <div className="product-item-price-box">
                  <span className="regular-price">
                    <span className="price">1.000.000đ</span>
                  </span>
                </div>
                <div
                  className="swatch-opt-45505"
                  data-role="swatch-option-45505"
                >
                  <div
                    className="swatch-attribute color"
                    data-attribute-code="color"
                    data-attribute-id="93"
                    data-option-selected="153"
                  >
                    <div
                      aria-activedescendant="option-label-color-93-item-153"
                      tabIndex="0"
                      aria-invalid="false"
                      aria-required="true"
                      role="listbox"
                      aria-label="MÀU"
                      className="swatch-attribute-options clearfix"
                    >
                      <div
                        className="swatch-option image selected"
                        id="option-label-color-93-item-153"
                        index="0"
                      >
                        <img
                          src="https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/q/u/quan-jean-nam-10f23dpa010_d_navy_6__1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="products-item">
              <div className="products-item-info">
                <a href="" className="product-item-photo">
                  <span className="product-image-container">
                    <img
                      className="product-image-photo"
                      src="https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-jean-nam-10f23dpa010_d_navy_1__1_jpg.webp"
                    ></img>
                  </span>
                </a>
              </div>
              <div className="product-item-details">
                <div className="product-name-wrapper">
                  <strong className="product-item-name">
                    Quần Jean Nam Ống Đứng Diễu Thân Trơn Form Straight -
                    10F23DPA010
                  </strong>
                  <a href="#" data-post="" title="Thêm vào danh sách yêu thích">
                    <span>
                      <AiOutlineHeart />
                    </span>
                  </a>
                </div>
                <div className="product-item-price-box">
                  <span className="regular-price">
                    <span className="price">1.000.000đ</span>
                  </span>
                </div>
                <div
                  className="swatch-opt-45505"
                  data-role="swatch-option-45505"
                >
                  <div
                    className="swatch-attribute color"
                    data-attribute-code="color"
                    data-attribute-id="93"
                    data-option-selected="153"
                  >
                    <div
                      aria-activedescendant="option-label-color-93-item-153"
                      tabIndex="0"
                      aria-invalid="false"
                      aria-required="true"
                      role="listbox"
                      aria-label="MÀU"
                      className="swatch-attribute-options clearfix"
                    >
                      <div
                        className="swatch-option image selected"
                        id="option-label-color-93-item-153"
                        index="0"
                      >
                        <img
                          src="https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/q/u/quan-jean-nam-10f23dpa010_d_navy_6__1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="products-item">
              <div className="products-item-info">
                <a href="" className="product-item-photo">
                  <span className="product-image-container">
                    <img
                      className="product-image-photo"
                      src="https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-jean-nam-10f23dpa010_d_navy_1__1_jpg.webp"
                    ></img>
                  </span>
                </a>
              </div>
              <div className="product-item-details">
                <div className="product-name-wrapper">
                  <strong className="product-item-name">
                    Quần Jean Nam Ống Đứng Diễu Thân Trơn Form Straight -
                    10F23DPA010
                  </strong>
                  <a href="#" data-post="" title="Thêm vào danh sách yêu thích">
                    <span>
                      <AiOutlineHeart />
                    </span>
                  </a>
                </div>
                <div className="product-item-price-box">
                  <span className="regular-price">
                    <span className="price">1.000.000đ</span>
                  </span>
                </div>
                <div
                  className="swatch-opt-45505"
                  data-role="swatch-option-45505"
                >
                  <div
                    className="swatch-attribute color"
                    data-attribute-code="color"
                    data-attribute-id="93"
                    data-option-selected="153"
                  >
                    <div
                      aria-activedescendant="option-label-color-93-item-153"
                      tabIndex="0"
                      aria-invalid="false"
                      aria-required="true"
                      role="listbox"
                      aria-label="MÀU"
                      className="swatch-attribute-options clearfix"
                    >
                      <div
                        className="swatch-option image selected"
                        id="option-label-color-93-item-153"
                        index="0"
                      >
                        <img
                          src="https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/q/u/quan-jean-nam-10f23dpa010_d_navy_6__1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="products-item">
              <div className="products-item-info">
                <a href="" className="product-item-photo">
                  <span className="product-image-container">
                    <img
                      className="product-image-photo"
                      src="https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-jean-nam-10f23dpa010_d_navy_1__1_jpg.webp"
                    ></img>
                  </span>
                </a>
              </div>
              <div className="product-item-details">
                <div className="product-name-wrapper">
                  <strong className="product-item-name">
                    Quần Jean Nam Ống Đứng Diễu Thân Trơn Form Straight -
                    10F23DPA010
                  </strong>
                  <a href="#" data-post="" title="Thêm vào danh sách yêu thích">
                    <span>
                      <AiOutlineHeart />
                    </span>
                  </a>
                </div>
                <div className="product-item-price-box">
                  <span className="regular-price">
                    <span className="price">1.000.000đ</span>
                  </span>
                </div>
                <div
                  className="swatch-opt-45505"
                  data-role="swatch-option-45505"
                >
                  <div
                    className="swatch-attribute color"
                    data-attribute-code="color"
                    data-attribute-id="93"
                    data-option-selected="153"
                  >
                    <div
                      aria-activedescendant="option-label-color-93-item-153"
                      tabIndex="0"
                      aria-invalid="false"
                      aria-required="true"
                      role="listbox"
                      aria-label="MÀU"
                      className="swatch-attribute-options clearfix"
                    >
                      <div
                        className="swatch-option image selected"
                        id="option-label-color-93-item-153"
                        index="0"
                      >
                        <img
                          src="https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/q/u/quan-jean-nam-10f23dpa010_d_navy_6__1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
