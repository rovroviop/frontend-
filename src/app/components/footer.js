import Image from "next/image";

export default function footer() {
    return(
    <footer>
      <div className="container-fluid bg-white">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>หน้าเเรก</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                  <i class="bi bi-1-square"></i>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    ราคาสินค้า
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    ร้านค้าที่่เข้าร่วม
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    บริการของเรา
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    วิธีการสั่งซื้อสินค้า
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>หน้าที่สอง</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                  <i class="bi bi-2-square"></i>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    จองโต๊ะล่วงหน้า
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    ตระกล้าสินค้า
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    เเจ้งชำระเงิน
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    เบอร์โทรติดต่อ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>หน้าสาม</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                  <i class="bi bi-3-square"></i>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    เว็บบอร์ด
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    บทความ
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    เเต้มรีวิวร้านค้า
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    ข้อมูลเพิ่มเติม
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>สมัครรับจดหมายข่าวของเรา</h5>
                <p>กรอกที่อยู่อีเมล</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    ที่อยู่อีเมล
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="ที่อยู่อีเมล"
                  />
                  <button className="btn btn-primary" type="button">
                    ยืนยัน
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>Copyrights © 2020 All Rights Reserved by Antique Mala Hot Pot
            <br />
            <i class="bi bi-facebook"></i> <i class="bi bi-line"></i> <i class="bi bi-youtube"></i> <i class="bi bi-instagram"></i>

            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </footer>
    )
}