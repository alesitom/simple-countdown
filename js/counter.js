(function () {
  const 
    second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let travelDay = "02/25/2023"
    
    const countDown = new Date(travelDay).getTime(),
      x = setInterval(function() {    
        const now = new Date().getTime(),
          distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
        if (distance < 0) {
          document.getElementById("headline").innerText = "Oggi è il giorno del nostro viaggio!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        }, 0)
  }());