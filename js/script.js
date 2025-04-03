const list = document.getElementById("email-list");

for(let i = 0; i < 10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(resp => {
        let email = resp.data.response;
        let item = document.createElement("li");
        item.innerHTML = email;
        list.appendChild(item);
    })
}