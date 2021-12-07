document.querySelector(".button").onclick = function(){
    var password = document.querySelector(".password").value,
    confirm = document.querySelector(".confirm").value

    if(password == ""){
        alert("ismiz va passwordiz kirgizing");
    }

    else if (password != confirm){
        alert ("password bilan confirm password bir xil kirgiznig!")
        return false
    }

    else if (password == confirm ){
      alert ("hammasi tug'ri kiritildi ")
    }
    return true
}