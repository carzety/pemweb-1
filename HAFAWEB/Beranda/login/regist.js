function validateForm() {
  let fname = document.getElementById("fullname").value;
  let mail = document.getElementById("email").value;
  let usname = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let regist = fname + mail + usname + pass;
  if (regist == "") {
    alert("Mohon Isi Dengan Lengkap");
    return false;
  }
}
