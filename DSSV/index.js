

// 1. lay data tu layout
// 2. tao object sinh vien
// 3. luu sinh vien vao mang


var DSSV = []
function themSv() {
  var ma =  document.getElementById("txtMaSV").value 
  var ten =  document.getElementById("txtTenSV").value 
 
  var email =  document.getElementById("txtEmail").value 
  var matKhau =  document.getElementById("txtPass").value 
  var diemToan = document.getElementById("txtDiemToan").value
  var diemLy = document.getElementById("txtDiemLy").value
  var diemHoa = document.getElementById("txtDiemHoa").value
  var sv = {
    ma:  ma,
    ten:  ten,
    email: email,
    matKhau: matKhau,
    diemToan: diemToan,
    diemLy: diemLy,
    diemHoa:diemHoa,
    
  }
  
  DSSV.push(sv)
 renderDSSV()
}

function renderDSSV() {
    // hien thi DSSV ra layout
  // table => tr > td
  var contentHTML = ""
  for (var i = 0; i < DSSV.length; i++) {
    var sv = DSSV[i]
    var trString = `<tr> 
    <td>${sv.ma}</td>
    <td>${sv.ten}</td>
    <td>${sv.email}</td>
    <td>0</td>
    <td><button onclick="xoaSv('${sv.ma}')" class="btn btn-primary">xoa</button></td>
    </tr>`
    contentHTML = contentHTML + trString
  }
  
  document.getElementById("tbodySinhVien").innerHTML = contentHTML
}

// tim vi tri => findIndex
// splice(vi tri, so luong phan tu can xoa)
function xoaSv(maSv) { 
//    console.log("🚀 ~ xoaSv ~ xoaSv:", xoaSv)
//    var viTri = DSSV.findIndex(function (item) {
//     return item.ma == maSv

//    })
var viTri = -1 
for(i=0; i < DSSV.length; i++) {
    if (DSSV[i].ma == maSv) {
        viTri = i;
    }
}
 if (viTri != -1) {
    //  tim thay sinh vien can xoa
    DSSV.splice(viTri,1) 
    //cap nhat lai giao dien
    renderDSSV()
 }
   
    

}