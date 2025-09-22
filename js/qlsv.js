
const diemChuanInput = document.getElementById("diemChuan");
const toanInput = document.getElementById("toan");
const vanInput = document.getElementById("van");
const anhInput = document.getElementById("anh");
const khuVucInput = document.getElementById("khuVuc");
const doiTuongInput = document.getElementById("doiTuong");
let diemKhuVuc = 0;
let diemDoiTuong = 0;
let tongDiem3Mon = 0;
let ketQuaXetDuyet = "";



function tinhDiemKhuVuc() {

    const khuVuc = khuVucInput.value.trim().toUpperCase();

    if (khuVuc === "A") {
        diemKhuVuc = 2;
    } else if (khuVuc === "B") {
        diemKhuVuc = 1;

    } else if (khuVuc === "C") {
        diemKhuVuc = 0.5;
    } else {
        alert("Khu Vực Không Tồn Tại !!")
    }
    return diemKhuVuc

}


function tinhDiemDoiTuong() {

    const doiTuong = doiTuongInput.value;

    if (doiTuong == 1) {
        diemDoiTuong = 2.5;
    } else if (doiTuong == 2) {
        diemDoiTuong = 1.5;

    } else if (doiTuong == 3) {
        diemDoiTuong = 1;
    } else {
        alert("Đối Tượng Không Tồn Tại !!")
    }
    return diemDoiTuong

}

function tinhTongDiem3Mon() {
    const toan = toanInput.value * 1;
    const van = vanInput.value * 1;
    const anh = anhInput.value * 1;
    tongDiem3Mon = toan + van + anh;
    return tongDiem3Mon
}

function xetDuyet() {
    const diemChuan = diemChuanInput.value * 1;
    if ((tongDiem3Mon + diemDoiTuong + diemKhuVuc) >= diemChuan) {
        ketQuaXetDuyet = "Đạt"
    } else {
        ketQuaXetDuyet = "Rớt"
    }


    return ketQuaXetDuyet;




}


function show_qlsv() {
    const diemChuan = diemChuanInput.value * 1;
    const toan = toanInput.value * 1;
    const van = vanInput.value * 1;
    const anh = anhInput.value * 1;
    const show_qlsv_dienChuan = document.getElementById("show_qlsv_dienChuan");
    show_qlsv_dienChuan.innerHTML = diemChuan;
    const show_qlsv_toan = document.getElementById("show_qlsv_toan");
    show_qlsv_toan.innerHTML = toan;
    const show_qlsv_van = document.getElementById("show_qlsv_van");
    show_qlsv_van.innerHTML = van;
    const show_qlsv_anh = document.getElementById("show_qlsv_anh");
    show_qlsv_anh.innerHTML = anh;
    const show_qlsv_tong_diem_3_mon = document.getElementById("show_qlsv_tong_diem_3_mon");
    show_qlsv_tong_diem_3_mon.innerHTML = tongDiem3Mon;
    const show_qlsv_khuVuc = document.getElementById("show_qlsv_khuVuc");
    show_qlsv_khuVuc.innerHTML = diemKhuVuc;
    const show_qlsv_doiTuong = document.getElementById("show_qlsv_doiTuong");
    show_qlsv_doiTuong.innerHTML = diemDoiTuong;
    const show_qlsv_ketQua = document.getElementById("show_qlsv_ketQua");
    show_qlsv_ketQua.innerHTML = ketQuaXetDuyet;
}




function tinhToan() {



    tinhTongDiem3Mon();
    tinhDiemKhuVuc();
    tinhDiemDoiTuong()
    xetDuyet()
    show_qlsv();



    // console.log("diemChuan " + diemChuan);
    // console.log("tinhTongDiem3Mon " + tongDiem3Mon);
    // console.log("tinhDiemKhuVuc " + diemKhuVuc);
    // console.log("tinhDiemDoiTuong " + diemDoiTuong);
    // console.log("xetDuyet " + ketQuaXetDuyet);




    const form_qlsv = document.getElementById("form_qlsv");
    form_qlsv.style.display = "block";


}
