const monthName = document.getElementById('month-name')
const dayName = document.getElementById('day-name')
const dayNum = document.getElementById('day-number')
const yearNum = document.getElementById('year');

const date = new Date();
const month = date.getMonth()
monthName.innerText = date.toLocaleString('ru', {
    month:'long'
})


dayName.innerText = date.toLocaleDateString('ru', {
    weekday: 'long'
})

dayNum.innerText = date.getDate()


yearNum.innerText =date.getFullYear()