export default function page(){
    return(
        <>
        <br /><br /><br />
       
        <div className="container">
        <hi>สมัครสมาชิก</hi>
        
<form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label"><i class="bi bi-envelope"></i> อีเมล</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">รหัสผ่าน</label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">ชื่อ-นามสกุล</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">ที่อยู่บัจจุบัน</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">สัญชาติ</label>

    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">สถานะ</label>
    <select id="inputState" className="form-select">
      <option selected>เลือก...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">ลิ้งค์เอกสาร</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        ยืนยันว่าข้อมูลถูกต้อง 
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary"><i class="bi bi-box-arrow-right"></i> ลงชื่อ</button>
  </div>
</form>

   </div>     
        </>
    )
}