
const link = document.querySelector(".link-list");
const linkBtn = document.querySelector(".link-btn");
const cancelBtn = document.querySelector(".cancel-btn");
      
linkBtn.onclick = ()=> {
    link.classList.add("active")
    linkBtn.classList.add("hide")
}

cancelBtn.onclick = ()=> {
    link.classList.remove("active")
    linkBtn.classList.remove("hide")

}

