let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');
let lapList = document.getElementById('lapList');

let minute = 0;
let second = 0;
let count = 0; // milliseconds
let timer = false;
let lapNumber = 0;

rightBtn.addEventListener('click', function () {
    if (timer == false) {
        // Start the timer
        timer = true;
        stopWatch();
        rightBtn.innerHTML = "Pause";
        leftBtn.innerHTML = "Lap";
    } else {
        // Pause the timer
        timer = false;
        rightBtn.innerHTML = "Resume";
        leftBtn.innerHTML = "Reset";
    }
});

leftBtn.addEventListener('click', function () {
    if (timer == true) {
        // Record a Lap 
        lapNumber++;
        
        let minString = minute;
        let secString = second;
        let countString = count;

        if (minute < 10) { minString = "0" + minString; }
        if (second < 10) { secString = "0" + secString; }
        if (count < 10) { countString = "0" + countString; }

        // Create the lap item and add it to the list
        let lapItem = document.createElement('div');
        lapItem.className = 'lapItem';
        lapItem.innerHTML = "<span>Lap " + lapNumber + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span> <span>" + minString + ":" + secString + "." + countString + "</span>";
        
        lapList.prepend(lapItem); // Add to the top of the list

    } else {
        // Reset Everything (Only if timer is paused)
        timer = false;
        minute = 0;
        second = 0;
        count = 0;
        lapNumber = 0;

        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
        document.getElementById('milliseconds').innerHTML = "00";
        lapList.innerHTML = ""; // Clear the lap list
        
        rightBtn.innerHTML = "Start";
        leftBtn.innerHTML = "Lap";
    }
});

// THE MAIN TIMER LOOP
function stopWatch() {
    if (timer == true) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        let minString = minute;
        let secString = second;
        let countString = count;

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('minutes').innerHTML = minString;
        document.getElementById('seconds').innerHTML = secString;
        document.getElementById('milliseconds').innerHTML = countString;

        // Loop this function every 10 milliseconds
        setTimeout(stopWatch, 10);
    }
}