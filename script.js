(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
      let toy = "July 07, 2020 00:00:00",
        countDown = new Date(toy).getTime(),
        x = setInterval(function() {    
  
      let now = new Date().getTime(),
        distance = countDown - now;
  
    document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
    if (distance < 0) {
      let headline = document.getElementById("headline"),
        countdown = document.getElementById("countdown"),
        content = document.getElementById("content");
  
    document.getElementById("headline").innerHTML = "<h1 style='font-size: 30px; letter-spacing: 2px; font-family: Just Another Hand ;'> <br><br> Happy Birthday! <br><br>Monik 🎉 <br><br> Semoga harap berisikan bayak doa dan cinta untukmu 🤗 </h1>";
      countdown.style.display = "none";
      
    clearInterval(x);
          }
        }, 0)
    }());