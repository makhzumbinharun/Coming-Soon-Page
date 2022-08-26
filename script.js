(() => {
  const sec = 1000,
    min = sec * 60,
    hour = min * 60,
    day = hour * 24;

  const end = new Date("December 31, 2022 00:00:00").getTime();

  const int = setInterval(() => {
    const current = new Date().getTime();
    const remaining = end - current;

    document.querySelector("#days").innerHTML = Math.floor(remaining / day);
    document.querySelector("#hours").innerHTML = Math.floor(
      (remaining % day) / hour
    );
    document.querySelector("#minutes").innerHTML = Math.floor(
      (remaining % hour) / min
    );
    document.querySelector("#seconds").innerHTML = Math.floor(
      (remaining % min) / sec
    );

    if (remaining < 0) {
      document.querySelector(".main_para").innerHTML =
        "The big day is finally here - view here <a href=example.com>website</a>";
      const digits = document.querySelectorAll(".digit");
      digits.forEach((digit) => {
        digit.innerHTML = "00";
      });
      clearInterval(int);
    }
  }, 1000);
})();
