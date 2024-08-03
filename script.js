const weeklyItem = document.getElementById('weekly');
const dailyItem = document.getElementById('daily');
const monthlyItem = document.getElementById('monthly');
const listItems = document.querySelectorAll('.items');
const currentTime = document.querySelectorAll('.current-time');
const previousTime = document.querySelectorAll('.previous');

weeklyItem.classList.add('active');

listItems.forEach(items => {
    items.addEventListener('click', (e) => {
        listItems.forEach(item => item.classList.remove('active'))
        items.classList.add('active');
        let value = e.target.textContent;
        getData(value);
    })
})


async function getData(timeframe) {
    let response = await fetch('./data.json');
    let data = await response.json();
    data.forEach((item, index) => {
        let timeFrames = item.timeframes;
        let lowerCasetime = timeframe.toLowerCase();
        let dispalyTime = timeFrames[lowerCasetime];

        if (dispalyTime.current > 1) {
            currentTime[index].textContent = `${dispalyTime.current}hrs`;
        } else {
            currentTime[index].textContent = `${dispalyTime.current}hr`;
        }

        if (dispalyTime.previous > 1) {
            previousTime[index].textContent = `${dispalyTime.previous}hrs`;
        } else {
            previousTime[index].textContent = `${dispalyTime.previous}hr`;
        }
    })
}