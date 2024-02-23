import React from "react";
import "./Signin.scss";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Signin({ modal }) {
  const [loginOption, setLoginOption] = React.useState("email");
  const handleOptionChange = (e) => {
    setLoginOption(e.target.value);
  };
  return (
    <div className="modal_login">
      <div className="modal-inner-wrap">
        <header className="modal-header">
          <button
            className="action-close"
            onClick={() => {
              modal(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </header>
        <div className="login-form">
          <form>
            <div className="block-title">
              <h3>ĐĂNG NHẬP</h3>
              <span>
                Đăng nhập thành viên Routine
                <br />
                Để nhận nhiều những chương trình ưu đãi hấp dẫn
              </span>
            </div>
            <fieldset className="fieldset login">
              <div className="field choice sparsh-mobile-number-login-option">
                <label className="label sparsh-email-user active">
                  <input
                    type="radio"
                    name="login_option"
                    value="email"
                    checked={loginOption === "email"}
                    onChange={handleOptionChange}
                  />
                  <span>Email</span>
                </label>
                <label className="label sparsh-mobile-user">
                  <input
                    type="radio"
                    name="login_option"
                    value="mobile"
                    checked={loginOption === "mobile"}
                    onChange={handleOptionChange}
                  />
                  <span>Số điện thoại</span>
                </label>
              </div>
              <div
                className="field sparsh-user-name sparsh-email required"
                style={{ display: loginOption === "email" ? "block" : "none" }}
              >
                <label className="label" htmlFor="email">
                  Email
                  <span className="required">*</span>
                </label>
                <div className="control">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="input-text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div
                className="field sparsh-user-name sparsh-mobile-number required"
                style={{ display: loginOption === "mobile" ? "block" : "none" }}
              >
                <label className="label" htmlFor="mobile_number">
                  Số điện thoại
                  <span className="required">*</span>
                </label>
                <div className="control">
                  <input
                    type="text"
                    id="mobile_number"
                    name="mobile_number"
                    className="input-text"
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>
              <div
                className="field otp-login required"
                style={{ display: "none" }}
              >
                <label className="label" htmlFor="otp">
                  Mã OTP
                  <span className="required">*</span>
                </label>
                <div className="control">
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    className="input-text"
                  />
                </div>
              </div>
              <div
                className="field password sparsh-password required"
                style={{ display: loginOption === "email" ? "block" : "none" }}
              >
                <label className="label" htmlFor="password">
                  Mật khẩu
                  <span className="required">*</span>
                </label>
                <div className="control">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="input-text"
                    placeholder="Mật khẩu"
                  />
                </div>
              </div>
              <div className="actions-toolbar">
                <div className="primary">
                  <a href="/forgot-password">Quên mật khẩu?</a>
                </div>
                <div className="secondary">
                  <button type="submit" className="action login primary">
                    Đăng nhập
                  </button>
                </div>
              </div>
              <div className="other-login">
                <div className="wrapper-title-social">
                  <span className="text-or-social">Hoặc</span>
                </div>
                <button className="modal-socialogin modal-facebook facebook_button_connect">
                  <span>
                    Đăng nhập với facebook{" "}
                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                  </span>
                </button>
                <button className=" modal-socialogin modal-google google_button_connect">
                  <span>Đăng nhập với google</span>
                </button>
              </div>
              <div className="secondary">
                <span>Bạn chưa có tài khoản?</span>
                <a href="#" className="action action-open-register">
                  Đăng ký thành viên
                </a>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
