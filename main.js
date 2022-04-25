let buttonGo = document.querySelector('.ruletca-inner__button')
let errow = document.querySelector('.ruletca-inner__errows')
let balance = document.querySelector('.ruletca-balance__mani') 
//let revenue = document.querySelector('.ruletca-revenue__mani')
let nameWin = document.querySelector('.winner__ruletca') 
let buttonClosse = document.querySelector('.winner__button')
let awards =document.querySelector('.box-awards')

let van =document.querySelector('.box-awards__van')
let to =document.querySelector('.box-awards__to')
let fre =document.querySelector('.box-awards__fre')
let forN =document.querySelector('.box-awards__for')
let fife =document.querySelector('.box-awards__fife')


let buttonVan =document.querySelector('.box-awards__button-van')
let buttonTo =document.querySelector('.box-awards__button-to')
let buttonFre =document.querySelector('.box-awards__button-fre')
let buttonFor =document.querySelector('.box-awards__button-for')
let buttonFife =document.querySelector('.box-awards__button-fife')



let price = 100

let num = 7


let priceVan = 300
let priceTo = 200
let priceFre = 100
let priceFor = 50
let priceFife = 25

let degR = [0, 45, 90, 135, 180, 225, 270,  315,  360,]
let winnerR = ['Компютер', 'Холодильник', 'Айфон', 'Чайник', 'Плазму', 'Стиралку',  'Пилосос',  'Плитку',]


buttonGo.addEventListener('click', function(){
    if(balance.textContent > 0){
    let random = Math.floor(Math.random() * num)
    let deg = degR[random]
    let degF = deg + 360
    console.log(degF)
    let winner = winnerR[random]
    errow.style.transform = 'rotate(' +  degF + 'deg)';
    balance.textContent = balance.textContent - price
    nameWin.innerHTML= '<h3 class="winner__name"> Поздравляем Вы выйграли <span>' + winner + '</span></h3>' + '<img src="img/'+ winner +'.png" alt="" class="winner__img" />'
    nameWin.classList.add('you-winer')
    buttonClosse.classList.add('button-active')
    buttonGo.classList.add('butoon-ren')
    let numr =  Number(balance.textContent)
    if(deg === 0){
        van.innerHTML=  '<img src="img/'+ winner +'.png" alt="" class="box-awards__img" />'
        buttonVan.classList.add('buttonVan')
        buttonVan.textContent=('Продать за ' + priceVan)
        buttonVan.addEventListener('click', function(){
        balance.textContent = numr + 300
        buttonVan.classList.remove('buttonVan')
        van.innerHTML= ''
       })
      
    }
    if(deg === 45){
        to.innerHTML=  '<img src="img/'+ winner +'.png" alt="" class="box-awards__img" />'
        buttonTo.classList.add('buttonTo')
        buttonTo.textContent=('Продать за ' + priceTo)
        buttonTo.addEventListener('click', function(){
            balance.textContent = numr + 200
            buttonTo.classList.remove('buttonTo')
            to.innerHTML= ''
        })
    }
    if(deg === 90){
        fre.innerHTML=  '<img src="img/'+ winner +'.png" alt="" class="box-awards__img" />'
        buttonFre.classList.add('buttonFre')
        buttonFre.textContent=('Продать за ' + priceFre)
        buttonFre.addEventListener('click', function(){
            balance.textContent = numr + 100
            buttonFre.classList.remove('buttonFre')
            fre.innerHTML= ''
        })
    }
    if(deg === 135){
        forN.innerHTML=  '<img src="img/'+ winner +'.png" alt="" class="box-awards__img" />'
        buttonFor.classList.add('buttonFor')
        buttonFor.textContent=('Продать за ' + priceFor)
        buttonFor.addEventListener('click', function(){
            balance.textContent = numr + 50
            buttonFor.classList.remove('buttonFor')
            forN.innerHTML= ''
        })
    }
    if(deg === 180){
        fife.innerHTML=  '<img src="img/'+ winner +'.png" alt="" class="box-awards__img" />'
        buttonFife.classList.add('buttonFife')
        buttonFife.textContent=('Продать за ' + priceFife)
        buttonFife.addEventListener('click', function(){
            balance.textContent = numr + 25
            buttonFife.classList.remove('buttonFife')
            fife.innerHTML= ''
        })
    }
    if(deg === 225){
        van.innerHTML=  '<img src="img/'+ winner +'.png" alt="" class="box-awards__img" />'
        buttonVan.classList.add('buttonVan')
        buttonVan.textContent=('Продать за ' + priceVan)
        buttonVan.addEventListener('click', function(){
            balance.textContent = numr + 300
            buttonVan.classList.remove('buttonVan')
            van.innerHTML= ''
        })
    }
    if(deg === 270){
         to.innerHTML=  '<img src="img/'+ winner +'.png" alt="" class="box-awards__img" />'
         buttonTo.classList.add('buttonTo')
         buttonTo.textContent=('Продать за ' + priceTo)
         buttonTo.addEventListener('click', function(){
            balance.textContent = numr + 200
            buttonTo.classList.remove('buttonTo')
            to.innerHTML= ''
        })
        }
    if(deg === 315){
         fre.innerHTML=  '<img src="img/'+ winner +'.png" alt="" class="box-awards__img" />'
         buttonFre.classList.add('buttonFre')
         buttonFre.textContent=('Продать за ' + priceFre)
         buttonFre.addEventListener('click', function(){
            balance.textContent = numr + 100
            buttonFre.classList.remove('buttonFre')
            fre.innerHTML= ''
        })
        }
    if(deg === 360){
         forN.innerHTML=  '<img src="img/'+ winner +'.png" alt="" class="box-awards__img" />'
         buttonFor.classList.add('buttonFor')
         buttonFor.textContent=('Продать за ' + priceFor)
         buttonFor.addEventListener('click', function(){
            balance.textContent = numr + 50
            buttonFor.classList.remove('buttonFor')
            forN.innerHTML= ''
        })
        }
    }else{
        alert('Увас закончились деньги!!')
    }
    
})

buttonClosse.addEventListener('click', function(){
    let degF = 0
    errow.style.transform = 'rotate(' + degF + 'deg)';
    nameWin.classList.remove('you-winer')
    buttonClosse.classList.remove('button-active')
    buttonGo.classList.remove('butoon-ren')
    errow.classList.remove('animat')
})
