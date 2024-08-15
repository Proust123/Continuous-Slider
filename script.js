const colors = document.querySelectorAll('.color')
const next = document.querySelector('.next')
const prev = document.querySelector('.pre')

let index = 0

next.addEventListener('click', () => {
    index++
    if(index > colors.length - 1){
        index = 0
    }

    resetInterval()

    removeClass()

    if(index === 0){
        colors[colors.length - 1].classList.add('currentActive2')
        setTimeout(() => {
            colors[colors.length - 1].classList.remove('currentActive2')
        },500)
    }else{
        colors[index - 1].classList.add('currentActive2')
        setTimeout(() => {
            colors[index - 1].classList.remove('currentActive2')
        }, 500)

    }  

    colors[index].classList.add('currentActive')
})

prev.addEventListener('click', () => {
    index--
    if(index < 0){
        index = colors.length - 1
    }
    
    resetInterval()

    removeClass()

    if(index === colors.length - 1){
        colors[0].classList.add('prevActive2')
        setTimeout(() => {
            colors[0].classList.remove('prevActive2')
        }, 500)
    }else{
        colors[index + 1].classList.add('prevActive2')
        setTimeout(() =>{
            colors[index + 1].classList.remove('prevActive2')
        }, 500)
    }


    colors[index].classList.add('prevActive')

})


function removeClass(){
    colors.forEach((color) => {
        color.classList.remove('currentActive')
        color.classList.remove('prevActive')
    })
}

let interval = setInterval(run, 2000)

function run(){
    index++
    if(index > colors.length - 1){
        index = 0
    }

    removeClass()

    if(index === 0){
        colors[colors.length - 1].classList.add('currentActive2')
        setTimeout(() => {
            colors[colors.length - 1].classList.remove('currentActive2')
        },500)
    }else{
        colors[index - 1].classList.add('currentActive2')
        setTimeout(() => {
            colors[index - 1].classList.remove('currentActive2')
        }, 500)

    } 

    colors[index].classList.add('currentActive')

}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}