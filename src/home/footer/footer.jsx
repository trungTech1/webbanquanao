import react from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer content">
        <div className="footer-row">
          <div className="footer-information">
            <div className="footer-logo">
              <img
                src="https://routine.vn/media/amasty/webp/wysiwyg/ezgif-7-ee007e6332a0_2x_2_png.webp"
                alt="Logo Thương hiệu Routine"
              ></img>
            </div>
            <h3>CÔNG TY TNHH ROUTINE VIETNAM</h3>
            <p>Mã Số Thuế: 0106486365</p>
            <p>
              Văn phòng: tầng 5 Tòa nhà IMC, 62 Trần Quang Khải - Phường Tân
              Định - Quận 1 - TP Hồ Chí Minh.
            </p>
            <h4>THAM GIA BẢNG TIN CỦA CHÚNG TÔI</h4>
            <div className="block newsletter">
              <form
                action="https://routine.vn/newsletter/subscriber/new/"
                class="form subscribe"
              ></form>
            </div>
          </div>
          <div className="footer-about"></div>
          <div className="footer-policy"></div>
          <div className="footer-store"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
