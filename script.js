var deafulthasil = document.getElementById("hasil");
deafulthasil.value = 0;

function hitung(nilai) {
  var opr = document.getElementById("operasi");
  opr.value += nilai;
}
// menghasilkan output pada layar operasi
// memberikan nilai yang akan diolah pada tombol result

function result() {
  var prevNum = document.getElementById("operasi").value;
  var currentNum = eval(prevNum);
  console.log(prevNum);

  document.getElementById("hasil").value = currentNum;
  console.log(currentNum);
}
// mengolah data yg didapatkan pada layar operasi
// menampilkan pada layar hasil

function del() {
  var hapus = document.getElementById("operasi");
  hapus.value = hapus.value.slice(0, -1);
}
// menghapus satu karakter pada layar operasi

function Clear() {
  var clr1 = document.getElementById("operasi");
  clr1.value = " ";
  var clr2 = document.getElementById("hasil");
  clr2.value = 0;
}
// menghapus seluruh karakter

function ans() {
  var answ = document.getElementById("hasil").value;
  document.getElementById("operasi").value = answ;
}
// memunculkan kembali nilai dari layar hasil
// yang akan digunakan kembali dalam proses perhitungan
