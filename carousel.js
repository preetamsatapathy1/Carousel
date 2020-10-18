const slidewrapper = document.querySelector('.slide_wrapper')
let counter = 1
const nxtBtn = document.querySelector('#next-btn')
const prevBtn = document.querySelector('#prev-btn')

nxtBtn.addEventListener('click',nextButton)
prevBtn.addEventListener('click',prevButton)
slidewrapper.addEventListener('transitionend',handleTransitionEnd)


const firstClone = slidewrapper.children[0].cloneNode(true)
const lastClone = slidewrapper.children[slidewrapper.children.length - 1].cloneNode(true)


firstClone.id = 'first-clone'
lastClone.id = 'last-clone'


slidewrapper.append(firstClone)
slidewrapper.prepend(lastClone)
const slidewidth = slidewrapper.children[counter].clientWidth
slidewrapper.style.transform = 'translateX(' + (-slidewidth * counter) + 'px)'

function nextButton(){
    if(counter >= slidewrapper.children.length-1) return
    counter+=1
    const slidewidth = slidewrapper.children[counter].clientWidth
    slidewrapper.style.transition = '0.4s ease-in'
    slidewrapper.style.transform = 'translateX(-' + slidewidth*counter + 'px)'
}

function prevButton(){
    if(counter <= 0) return
    counter-=1
    const slidewidth = slidewrapper.children[counter].clientWidth
    slidewrapper.style.transition = '0.4s ease-in'
    slidewrapper.style.transform = 'translateX(-' + slidewidth*counter + 'px)'
}

function handleTransitionEnd(){
    if(counter == 0){
        counter = slidewrapper.children.length - 2
        slidewrapper.style.transition = 'none'
        slidewrapper.style.transform = 'translateX(-' + slidewidth*counter + 'px)'
    }
    if(counter == slidewrapper.children.length - 1){
        counter = 1
        slidewrapper.style.transition = 'none'
        slidewrapper.style.transform = 'translateX(-' + slidewidth*counter + 'px)'
    }
}