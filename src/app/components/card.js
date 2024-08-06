import Image from "next/image"

export default function card() {
    return(
        <div className="container-fluid">
            <div className="row">
                
              <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/1.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">หมาล่าหม้อไฟ</h5>
                 <p className="card-text">ราคาเฉลี่ยต่อหนึ่งคน เริ่มที่ 199-299 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
              </div>
            </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/06.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">หมาล่าหม้อเเดง</h5>
                 <p className="card-text">ราคาเฉลี่ยต่อหนึ่งคน เริ่มที่ 159-299 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/07.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">ร้านหมาล่าสไตร์จีนเเดง</h5>
                 <p className="card-text">ราคาเฉลี่ยต่อหนึ่งคน เริ่มที่ 399-1250 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

            </div>
        </div>
    )
}