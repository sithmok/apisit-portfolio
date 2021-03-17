window.onload = pageLoad;

function pageLoad(){
    let form = document.getElementById('myForm');
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('repassword').value;
    if(password != repassword){
        alert("รหัสผ่านไม่ตรงกัน");
        return false;
    }
    else{
        alert("สมัครสมาชิกสำเร็จ");
    }
}