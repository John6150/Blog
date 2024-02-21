let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let email = document.getElementById("email")
let gender = document.getElementById("gender")
let pass = document.getElementById("pass")
let cpass = document.getElementById("cpass")
let show = document.getElementById("show")
let show2 = document.getElementById("show2")
let hide = document.getElementById("hide")
let hide2 = document.getElementById("hide2")


let users = JSON.parse(localStorage.getItem("Users")) || []

function sub_(ev) {
    alert(ev)
    ev.preventDefualt()
}

function private_() {
    if (pass.type == "password") {
        show.src = "/Images/hide.png"
        pass.type = "text"
    } else {
        show.src = "/Images/show.png"
        pass.type = "password"
    }
}
function private_2() {
    if (cpass.type == "password") {
        show2.src = "/Images/hide.png"
        cpass.type = "text"
    } else {
        show2.src = "/Images/show.png"
        cpass.type = "password"
    }
}

function sub() {
    if (fname.value == '' || lname.value == '' || email.value == '' || pass.value == '' || cpass.value == '' || gender.value == '') {
        alert("Sorry, complete the fields")
    } else
        if (pass.value != cpass.value) {
            alert("Passwords do not match, try again!")

        } else {
            users.push({ FirstName: fname.value, LastName: lname.value, Email: email.value, Password: pass.value })

            fetch("http://localhost:1234/Users", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ FirstName: fname.value, LastName: lname.value, Email: email.value, Password: pass.value })
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                })
            window.location.href = "signin.html"
            localStorage.setItem("Users", JSON.stringify(users))
        }
}
