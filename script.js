let online = document.getElementById("online")
let offline = document.getElementById("offline")

let onlineEvent = () => {
    console.log("hi");
    online.classList.add("active");
    offline.classList.remove("active")
}

let offlineEvent = () => {
    offline.classList.add("active")
    online.classList.remove("active")
}
