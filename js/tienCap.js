const inputMaKhachHang = document.getElementById("inputMaKhachHang");
const inputSoKenhCaoCap = document.getElementById("inputSoKenhCaoCap");




const inputNhaDan = document.getElementById("inputNhaDan");

const inputDoanhNghiep = document.getElementById("inputDoanhNghiep");

let loaiKhachHang = "";

const checkLoaiKhachHang = () => {
    if (inputNhaDan.checked) {
        loaiKhachHang = "nha dan";
         inputSoKetNoi.disabled = true;
    inputSoKetNoi.value = "";
    } else if (inputDoanhNghiep.checked) {
        loaiKhachHang = "doanh nghiep";
          inputSoKetNoi.disabled = false;
    } else {
        alert("vui long chon loai khach hang")
    }
}






const inputSoKetNoi = document.getElementById("inputSoKetNoi");

let tongTienSoKetNoi = 0

function soKetNoi_doanhNghiep() {
    const soKetNoi = inputSoKetNoi.value * 1;
    checkLoaiKhachHang ();
    if(loaiKhachHang==="doanh nghiep"){
         if (soKetNoi <= 10 && soKetNoi > 0) {
        tongTienSoKetNoi = 75;
    } else if (soKetNoi > 10) {
        tongTienSoKetNoi = 75 + (soKetNoi - 10) * 5;
    } else {
        alert("Vui Lòng Chọn Số Kết Nối")
    }
    }
   
    return tongTienSoKetNoi;
}


function tinhTienKenhCaoCap(giaMoiKenh){
    const soKenhCaoCap= inputSoKenhCaoCap.value;
    return giaMoiKenh* soKenhCaoCap;
}



function tienCapNhaDan(){
    let phiXuLyHoaDon= 4.5;
    let phiDichVuCoban= 20.5;
    return phiDichVuCoban+phiXuLyHoaDon+tinhTienKenhCaoCap(7.5)
}


function tienCapDoanhNghiep(){
    soKetNoi_doanhNghiep();
    let phiXuLyHoaDon= 15;
    return phiXuLyHoaDon+tongTienSoKetNoi+tinhTienKenhCaoCap(50);
}







function btn_TC() {
  checkLoaiKhachHang();
  let tongTien = 0;
  switch (loaiKhachHang) {
    case "nha dan":
      tongTien = tienCapNhaDan();
      break;
    case "doanh nghiep":
      tongTien = tienCapDoanhNghiep();
      break;
    default:
      alert("Vui lòng chọn loại khách hàng");
      return;
  }
  document.getElementById("ketQua").innerText =
    "Loại: " + loaiKhachHang + " | Tổng tiền: $" + tongTien.toFixed(1);
}