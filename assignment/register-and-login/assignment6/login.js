window.onload = loginLoad;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username');
const password = urlParams.get('password');

function loginLoad(){
	let form = document.getElementById('myLogin');
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	let username1 = document.getElementById('username').value;
	let password1 = document.getElementById('password').value;
	if(username1 == username && password1 == password){
		alert("เข้าสู่ระบบสำเร็จ");
		console.log(username1,password1);
	}
	else{
		alert("เข้าสู่ระบบไม่สำเร็จ");
		console.log(username1,password1);
		return false;
	}
}

			