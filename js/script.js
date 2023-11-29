window.addEventListener('DOMContentLoaded', ()=>{
  const TabItems = document.querySelector('.tabheader__items'),
        TabItem  = document.querySelectorAll('.tabheader__item'),
        TabContent = document.querySelectorAll('.tabcontent')

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

})


















