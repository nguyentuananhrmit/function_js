function tinhThue() {
  const hoTen = document.getElementById("hoTen").value;
  const thuNhapNam = Number(document.getElementById("thuNhapNam").value);
  const soNguoiPhuThuoc = Number(document.getElementById("soNguoiPhuThuoc").value);
  const thuNhapChiuThue = thuNhapNam - 4 - soNguoiPhuThuoc * 1.6;

  let thueSuat = 0;
  if (thuNhapChiuThue <= 60) thueSuat = 5;
  else if (thuNhapChiuThue <= 120) thueSuat = 10;
  else if (thuNhapChiuThue <= 210) thueSuat = 15;
  else if (thuNhapChiuThue <= 384) thueSuat = 20;
  else if (thuNhapChiuThue <= 624) thueSuat = 25;
  else if (thuNhapChiuThue <= 960) thueSuat = 30;
  else thueSuat = 35;

  const thuePhaiTra = thuNhapChiuThue > 0 ? thuNhapChiuThue * thueSuat / 100 : 0;

  document.getElementById("ketQua").innerText =
    `Họ tên: ${hoTen} | Thu nhập chịu thuế: ${thuNhapChiuThue}tr | Thuế suất: ${thueSuat}% | Thuế phải trả: ${thuePhaiTra}tr`;
}
