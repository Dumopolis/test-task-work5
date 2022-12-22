const navbar = document.querySelector('nav')
const navItem = document.querySelectorAll('.nav-item')
const burger = document.querySelector('.burger-icon')
const body = document.querySelector('.body')
const menu = document.querySelector('.navbar-collapse')
console.log('fghds');
const handleClick =(event) =>{
    navItem.forEach(item=> item.classList.remove('active'))
    event.target.parentElement.classList.add('active')
    
}

const toggleBurger = () => {
    burger.classList.toggle('open')
    
   
}
burger.addEventListener('click', toggleBurger)
navItem.forEach(item =>{
    console.log(item);
    item.addEventListener('click', handleClick)
} )

const mediaQuery = window.matchMedia('(max-width: 992px)')
function handleTabletChange() {
  if (mediaQuery.matches) {
    document.querySelectorAll(".btn-text").forEach(btn=>btn.classList.add('collapse'))
  }else{
    document.querySelectorAll(".btn-text").forEach(btn=>btn.classList.remove('collapse')) 
  }
}
handleTabletChange()
mediaQuery.addEventListener('change',handleTabletChange)

