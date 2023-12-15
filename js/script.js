window.addEventListener('DOMContentLoaded', ()=>{
  const TabItems = document.querySelector('.tabheader__items'),
        TabItem  = document.querySelectorAll('.tabheader__item'),
        TabContent = document.querySelectorAll('.tabcontent'),
        Loader = document.querySelector('.loader')

// Loader start
    setTimeout(()=>{
      Loader.style.opacity = '0'
      setTimeout(()=>
      {
        Loader.style.display = 'none'
      }, 500)
    }, 2000)
//Loader end


// Tab start
        function hideTabContent(){

          TabContent.forEach((item)=>{
            item.style.display = 'none'
          })

          TabItem.forEach((item) =>{
            item.classList.remove('tabheader__item_active')
          })
        }

        function showTabContent(i=0){
            TabContent[i].style.display = 'block'
            TabItem[i].classList.add('tabheader__item_active')
        }

        hideTabContent()
        showTabContent()

        TabItems.addEventListener('click', (event)=>{
          
            const target = event.target
            if(target && target.classList.contains('tabheader__item')){
                TabItem.forEach((item, index)=>{
                    if(target == item){
                      hideTabContent()
                      showTabContent(index)
                    }
                })
            }
        })
// Tab end

//Timer start
const deadline = '2023-12-31'

function getTimeRemaining(endtime){
  let days, hours, minutes, seconds
  const timer = Date.parse(endtime) - Date.parse(new Date())
  if(timer <= 0){
    days = 0
    hours = 0
    minutes = 0
    seconds = 0
  }else{
    days = Math.floor(timer/(1000*60*60*24))
    hours= Math.floor((timer/(1000*60*60))%24)
    minutes = Math.floor((timer/1000/60)%60)
    seconds = Math.floor((timer/1000)%60)
  }
  

  return { timer, days, hours, minutes, seconds}
}

  function getZero(num){
    if(num>=0 && num < 10){
    return `0${num}`
    }else{
      return num
    }
  }

  function setClock(selector, endtime){
    const timer = document.querySelector(selector)
    days = timer.querySelector('#days')
    hours = timer.querySelector('#hours')
    minutes = timer.querySelector('#minutes')
    seconds = timer.querySelector('#seconds')
    timeInterval = setInterval(updatClock, 1000)
   
    updatClock()

  function updatClock(){
    const t = getTimeRemaining(endtime)

    days.innerHTML = getZero(t.days)
    hours.innerHTML = getZero(t.hours)
    minutes.innerHTML = getZero(t.minutes)
    seconds.innerHTML = getZero(t.seconds)

    if(t.timer <= 0){
      clearInterval(timeInterval)

    }
  }

   }

setClock('.timer', deadline)

//Timer end

// Modal start
const modalTrigger = document.querySelectorAll('[data-modal]')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('[data-close]')
const body = document.querySelector('body')


function closeModal(){
  modal.classList.remove('show')
  modal.classList.add('hide')
  body.style.overflow = ''
}

function openModal(){
  modal.classList.add('show')
  modal.classList.remove('hide')
  body.style.overflow = 'hidden'
  clearInterval(modalTimerId)
}

modalTrigger.forEach((item)=>{
  item.addEventListener('click',openModal)
})

modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e)=>{
 if(e.target == modal){
  closeModal()
 }
})

document.addEventListener('keydown', (e)=>{
  if(e.code === 'Escape' && modal.classList.contains('show')){
    closeModal()
  }
})

const modalTimerId = setTimeout(openModal, 4000)



function showModalByScroll(){
  if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
    openModal()
    window.removeEventListener('scroll', showModalByScroll)
  }
}

window.addEventListener('scroll',showModalByScroll)
// Modal end
})


















