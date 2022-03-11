const $ = document.querySelector.bind(document)

const container = $('.container')
const showModal = $('.modal')
const clickBtn = $('.create')
const closeBtn = $('.close')
const showHeading = $('.heading')
const successBtn = $('.success')
const errorBtn = $('.error')
const headingList = $('.heading-list')
const clearBtn = $('.onclear')


clickBtn.onclick = () => {
    container.style.display = 'none'
    setTimeout(() => {
        showModal.classList.add('open')
        setTimeout(() => {
            showHeading.innerHTML = 'Mày Là Một Con Chó'
        }, 5000)


    }, 2000)
}

errorBtn.onmouseover = () => {
    errorBtn.innerText = 'Yes'
}
errorBtn.onmouseout = () => {
    errorBtn.innerText = 'No'
}

closeBtn.onclick = () => {
    headingList.classList.add('support')
}
closeBtn.onmouseout = () => {
    headingList.classList.remove('support')
}

if (clickBtn == successBtn || clickBtn == errorBtn) {
    closeBtn.onclick = () => {
        showModal.classList.remove('open')
    }
}

setTimeout(() => {
    clearBtn.classList.add('support')
}, 9000)
clearBtn.onclick = () => {
    showModal.classList.remove('open')
    container.style.display = 'flex'
}
