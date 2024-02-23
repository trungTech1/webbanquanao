import React, { useState } from "react";
import "./Signup.scss";
import { AiOutlineClose } from "react-icons/ai";

export default function Signup({ modal }) {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const onChangeEmail = (e) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
      setEmailError("Email không hợp lệ");
    } else {
      setEmailError("");
    }
  };
  const onChangePassword = (e) => {
    if (e.target.value.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(e.target.value)) {
      setPasswordError("Mật khẩu phải chứa ít nhất 1 ký tự và 1 số");
    } else if (!/[A-Z]/.test(e.target.value)) {
      setPasswordError("Mật khẩu phải chứa ít nhất 1 ký tự hoa");
    } else if (!/[a-z]/.test(e.target.value)) {
      setPasswordError("Mật khẩu phải chứa ít nhất 1 ký tự thường");
    } else {
      setPasswordError("");
    }
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmation.value;
    const phone = e.target.telephone.value;
    if (
      emailError === "" &&
      passwordError === "" &&
      confirmPasswordError === "" &&
      phoneError === ""
    ) {
      console.log(email, password, confirmPassword, phone);
    }
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

        <div className="Signup-form">
          <div className="block-title">
            <h3>ĐĂNG KÝ</h3>
            <span>
              Đăng nhập thành viên Routine
              <br />
              Để nhận nhiều những chương trình ưu đãi hấp dẫn
            </span>
          </div>
          <div className="block-content">
            <form
              class="form create account form-create-account"
              onSubmit={onSubmitForm}
            >
              <fieldset className="fieldset create info">
                <div className="field-group-name">
                  <div className="field field-child field-name-lastname required">
                    <label htmlFor="popup_lastname" className="label">
                      Họ
                    </label>
                    <div className="control">
                      <input
                        type="text"
                        id="popup_lastname"
                        name="lastname"
                        placeholder="Họ"
                        title="Họ"
                        className="input-text required-entry"
                      ></input>
                      <div
                        for="popup_firstname"
                        generated="true"
                        class="mage-error"
                        id="popup_firstname-error"
                        style={{ display: "none" }}
                      >
                        {emailError}
                      </div>
                    </div>
                  </div>
                  <div className="field field-name-firstname field-child required">
                    <label htmlFor="popup_firstname" className="label">
                      Tên
                    </label>
                    <div className="control">
                      <input
                        type="text"
                        id="popup_firstname"
                        name="firstname"
                        placeholder="Tên"
                        title="Tên"
                        className="input-text required-entry"
                      ></input>
                      <div
                        for="popup_firstname"
                        generated="true"
                        class="mage-error"
                        id="popup_firstname-error"
                        style={{ display: "none" }}
                      >
                        Đây là trường bắt buộc.
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="fieldset create account">
                <div className="field">
                  <label htmlFor="popup_email" className="label">
                    Email
                  </label>
                  <div className="control">
                    <input
                      type="email"
                      id="popup_email"
                      name="email"
                      placeholder="Email"
                      title="Email"
                      onChange={onChangeEmail}
                      className="input-text required-entry validate-email"
                    ></input>
                    <div
                      for="popup_firstname"
                      generated="true"
                      class="mage-error"
                      id="popup_firstname-error"
                      // style={{ display: "none" }}
                    >
                      {emailError}
                    </div>
                  </div>
                </div>
                <div className="field telephone required">
                  <label htmlFor="popup_telephone" className="label">
                    Số điện thoại
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      id="popup_telephone"
                      name="telephone"
                      placeholder="Số điện thoại"
                      title="Số điện thoại"
                      className="input-text required-entry"
                    ></input>
                    <div
                      for="popup_firstname"
                      generated="true"
                      class="mage-error"
                      id="popup_firstname-error"
                      style={{ display: "none" }}
                    >
                      Đây là trường bắt buộc.
                    </div>
                  </div>
                </div>
                <div className="field field-otp required">
                  <label htmlFor="popup_otp" className="label">
                    Mã OTP
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      name="otp"
                      placeholder="Mã OTP"
                      title="Mã OTP"
                      className="input-text required-entry"
                    ></input>
                    <div
                      for="popup_firstname"
                      generated="true"
                      class="mage-error"
                      id="popup_firstname-error"
                      style={{ display: "none" }}
                    >
                      Đây là trường bắt buộc.
                    </div>
                    <button
                      type="button"
                      className="otp-sender-button btn btn-primary"
                    >
                      <span>Gởi mã OTP</span>
                    </button>
                  </div>
                </div>
                <div className="field password required">
                  <label htmlFor="popup_password" className="label">
                    Mật khẩu
                  </label>
                  <div className="control">
                    <input
                      type="password"
                      name="password"
                      placeholder="Mật khẩu"
                      title="Mật khẩu"
                      onChange={onChangePassword}
                      class="input-text required-entry"
                    ></input>
                    <div
                      for="popup_firstname"
                      generated="true"
                      class="mage-error"
                      id="popup_firstname-error"
                      style={{ display: "none" }}
                    >
                      {passwordError}
                    </div>
                  </div>
                </div>
                <div className="field confirmation required">
                  <label htmlFor="popup_confirmation" className="label">
                    Xác nhận mật khẩu
                  </label>
                  <div className="control">
                    <input
                      type="password"
                      name="confirmation"
                      placeholder="Xác nhận mật khẩu"
                      title="Xác nhận mật khẩu"
                      className="input-text required-entry"
                    ></input>
                    <div
                      for="popup_firstname"
                      generated="true"
                      class="mage-error"
                      id="popup_firstname-error"
                      style={{ display: "none" }}
                    >
                      Đây là trường bắt buộc.
                    </div>
                  </div>
                </div>
                <div className="field choice faq">
                  <div className="choice-hero">
                    <input
                      type="checkbox"
                      id="popup_faq"
                      name="faq"
                      className="input-checkbox"
                    />
                    <label htmlFor="popup_is_faq" className="label_checkbox">
                      <span>
                        Tôi đã đọc và đồng ý với{" "}
                        <a href="/faq" target="_blank">
                          điều khoản và điều kiện
                        </a>
                      </span>
                    </label>
                  </div>
                  <div
                    for="popup_firstname"
                    generated="true"
                    class="mage-error"
                    id="popup_firstname-error"
                    style={{ display: "none" }}
                  >
                    Đây là trường bắt buộc.
                  </div>
                </div>
              </fieldset>
              <div className="actions-toolbar">
                <div className="primary">
                  <button
                    type="submit"
                    class="action submit primary"
                    title="Đăng ký tài khoản"
                  >
                    <span>Đăng ký tài khoản</span>
                  </button>
                </div>
                <div className="primary-mobile">
                  <a href="javascript:void(0)" className="show-login-popup">
                    Đăng nhập
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
