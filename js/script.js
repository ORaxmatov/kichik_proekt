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
})


















