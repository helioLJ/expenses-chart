const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 83.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
]

const cols = document.querySelectorAll('.col')
const hoverStats = document.querySelectorAll('.hover-stats')
const dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const date = new Date()
let currentDay = dayNames[date.getDay()]
let totalMounth

cols.forEach((col) => {
    data.forEach((days) => {
        if (days.day === col.nextElementSibling.textContent) {
            col.style.height = days.amount + "%"
        }
    })
    
    if (col.nextElementSibling.textContent === currentDay) {
      col.classList.add("current-day")
    }
})

hoverStats.forEach((stats) => {
  data.forEach((days => {
    if (days.day === stats.parentElement.nextElementSibling.textContent) {
        stats.textContent = "$" + days.amount
    }
  }))
})