const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")

const nextYear = new Date().getFullYear() + 1
const newYears = `1 Jan ${nextYear}`

function countDown() {
	const newYearsDate = new Date(newYears)
	const currentDate = new Date()

	const totalSeconds = (newYearsDate - currentDate) / 1000

	const days = Math.floor(totalSeconds / 3600 / 24)
	const hours = Math.floor(totalSeconds / 3600) % 24
	const mins = Math.floor(totalSeconds / 60) % 60
	const seconds = Math.floor(totalSeconds) % 60

	daysEl.innerHTML = days
	hoursEl.innerHTML = formatTime(hours)
	minsEl.innerHTML = formatTime(mins)
	secondsEl.innerHTML = formatTime(seconds)

	console.log(days, hours, mins, seconds)
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time
}

//initial call
countDown()

setInterval(countDown, 1000)
