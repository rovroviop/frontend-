export default function page(){
    return(
        <>
        <br /><br /><br />
        <div className="container">
        <hi>หน้าเข้าสู่ระบบ</hi>

  <form>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">อีเมล</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">รหัสผ่าน</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" />
    </div>
  </div>
  


  
  <button type="submit" className="btn btn-primary">เข้าสู่ระบบ</button>
</form>

</div>
        </>
    )
}