const input_ten_khach_hang = document.getElementById("input_ten_khach_hang");

const input_so_dien = document.getElementById("input_so_dien")
let tongTienDien = 0;

function tinh_tongTienDien() {
    const so_dien = input_so_dien.value * 1;


    if (so_dien <= 50) {
        tongTienDien = so_dien * 500;
    } else if (so_dien <= 100) {
        tongTienDien = 50 * 500 + (so_dien - 50) * 650;
    } else if (so_dien <= 200) {
        tongTienDien = 50 * 500 + 50 * 650 + (so_dien - 100) * 850;
    } else if (so_dien <= 350) {
        tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (so_dien - 200) * 1100;
    } else {
        tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (so_dien - 350) * 1300;
    }

    return tongTienDien;
}


function show_infor() {
    const ten_chu_ho= document.getElementById("ten_chu_ho");
    const ten_khach_hang= input_ten_khach_hang.value;
    const so_dien = input_so_dien.value * 1;
    const khoang_50 = document.getElementById("khoang_50");
    const khoang_100 = document.getElementById("khoang_100");
    const khoang_200 = document.getElementById("khoang_200");
    const khoang_350 = document.getElementById("khoang_350");
    const khoang_con_lai = document.getElementById("khoang_con_lai");




    const gia_khoang_50= document.getElementById("gia_khoang_50");
   

    const gia_khoang_100= document.getElementById("gia_khoang_100");
   

    const gia_khoang_200= document.getElementById("gia_khoang_200");
   

    const gia_khoang_350= document.getElementById("gia_khoang_350");
   

    const gia_khoang_con_lai= document.getElementById("gia_khoang_con_lai");
  


    ten_chu_ho.innerHTML=ten_khach_hang;


    if (so_dien <= 50) {
        khoang_50.innerHTML = so_dien;
         gia_khoang_50.innerHTML="500d/kw"
    } else if (so_dien <= 100) {
        khoang_50.innerHTML = 50;
        khoang_100.innerHTML = so_dien-50;
        gia_khoang_50.innerHTML="500d/kw"
         gia_khoang_100.innerHTML="650d/kw"
    }else if (so_dien <= 200) {
        khoang_50.innerHTML = 50;
        khoang_100.innerHTML = 50;
        khoang_200.innerHTML = so_dien-100;
         gia_khoang_50.innerHTML="500d/kw"
         gia_khoang_100.innerHTML="650d/kw"
         gia_khoang_200.innerHTML="850d/kw"
    }else if (so_dien <= 350) {
        khoang_50.innerHTML = 50;
        khoang_100.innerHTML = 50;
        khoang_200.innerHTML = 100;
        khoang_350.innerHTML = so_dien- 200;
         gia_khoang_50.innerHTML="500d/kw"
         gia_khoang_100.innerHTML="650d/kw"
         gia_khoang_200.innerHTML="850d/kw"
        gia_khoang_350.innerHTML="1100d/kw"
    }else{
        khoang_50.innerHTML = 50;
        khoang_100.innerHTML = 50;
        khoang_200.innerHTML = 100;
        khoang_350.innerHTML = 150;
        khoang_con_lai.innerHTML = so_dien-350;
          gia_khoang_50.innerHTML="500d/kw"
         gia_khoang_100.innerHTML="650d/kw"
         gia_khoang_200.innerHTML="850d/kw"
        gia_khoang_350.innerHTML="1100d/kw"
        gia_khoang_con_lai.innerHTML="1300d/kw"
    }


    const show_tong_tien= document.getElementById("show_tong_tien");
     show_tong_tien.innerHTML= tongTienDien;
}





function btn_tong() {
    const ten_khach_hang = input_ten_khach_hang.value;
    const so_dien = input_so_dien.value * 1;
    tinh_tongTienDien();
    show_infor();


    console.log(ten_khach_hang);
    console.log(so_dien);
    console.log("tong tien dien " + tongTienDien);
    const table_res= document.getElementById("table_res");
    table_res.style.display="block";

}