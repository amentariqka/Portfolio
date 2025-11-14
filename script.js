function funcname() {
    let details = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    
    const serviceID = "service_9h9s27c";
    const templateID = "template_wxn5h1e";
    
    emailjs.send(serviceID, templateID, details)
    .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message was sent successfully!");
    })
    .catch(err => console.log(err));
}

const hamburger = document.getElementById("hamburger");
const mobilemenu = document.getElementById("mobilemenu");

hamburger.addEventListener("click", () => {
    mobilemenu.classList.toggle("hidden");
});
function hamburgerr(){
    mobilemenu.classList.toggle("hidden");
}