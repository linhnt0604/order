function checkAll() {
    var cakes = document.getElementById("cakes").value;
    var date = document.getElementById("date").value;
    var name = document.getElementById("name").value;
    var mes = document.getElementById("mes").value;
    var deliver = document.getElementById("deliver").value;

    console.log(date);
    var check = new Date();
    var dd = String(check.getDate()).padStart(2, "0");
    var mm = String(check.getMonth() + 1).padStart(2, "0");
    var yyyy = check.getFullYear();
    check = yyyy + "-" + mm + "-" + dd;
    console.log(check);

    if (cakes == "") {
        document.getElementById("miscakes").innerHTML = "Please select our product.";
    } else {
        document.getElementById("miscakes").innerHTML = "";
    }

    if (date.length == "") {
        document.getElementById("misdate").innerHTML = "Please fill out the deliver date.";
    } else if (date < check) {
        document.getElementById("misdate").innerHTML = "The date you entered is in the past."; //Báo lỗi nếu ngày nhập là ngày trong quá khứ
    } else {
        document.getElementById("misdate").innerHTML = "";
    }

    if (name.length < 1) {
        document.getElementById("misname").innerHTML = "Please fill out your name.";
    } else if (name.length > 100) {
        document.getElementById("misname").innerHTML = "Your name should not exceed 100 characters.";
    } else {
        document.getElementById("misname").innerHTML = "";
    }

    if (mes.length > 30) {
        document.getElementById("mismes").innerHTML = "Message should not exceed 30 characters.";
    } else {
        document.getElementById("mismes").innerHTML = "";
    }

    if (deliver.length < 1) {
        document.getElementById("misdeliver").innerHTML = "Please fill out the address.";
    } else if (deliver.length > 500) {
        document.getElementById("misdeliver").innerHTML = "Address should not exceed 500 characters.";
    } else {
        document.getElementById("misdeliver").innerHTML = "";
    }
}