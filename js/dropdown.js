const $drowdownArrow=document.querySelector(".gg-chevron-down"),$checkbox=document.getElementById("openDropdown"),$dropdownMenu=document.querySelector(".dropdown-menu");$checkbox.addEventListener("change",()=>{$drowdownArrow.classList.toggle("rotate-dropdown-arrow")}),$dropdownMenu.addEventListener("click",e=>{$checkbox.checked=!1,$checkbox.dispatchEvent(new Event("change"))});