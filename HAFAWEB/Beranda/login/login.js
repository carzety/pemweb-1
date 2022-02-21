function priviet(e) {
  e.preventDefault();
  let dataNama =
    document.getElementById("name").value +
    document.getElementById("password").value;
  let valid = "osmanselim" + "1234";
  if (dataNama == valid) {
    location.href = "/Beranda/beranda/src/beranda.html";
    alert("Anda Berhasil Masuk");
  } else {
    alert(
      "Anda belum terdaftar sebagai Mitra kami \nSegera lakukan Registrasi dengan klik tombol Registrasi"
    );
  }
}
