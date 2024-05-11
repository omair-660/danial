let nav = document.getElementsByTagName("nav")[0];
let up = document.getElementById("up");

window.onscroll = function(){
    if (scrollY >= 800){
        nav.classList.add("bg");
        up.classList.add("open");
    } else {
        nav.classList.remove("bg");
        up.classList.remove("open");
    }
}

up.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener('load', (event) => {
    let loadingScreen = document.querySelector('.lood');
    loadingScreen.style.display = 'none';
});
document.addEventListener("DOMContentLoaded", function () {
    function startProgress(entry) {
        const target = entry.target;
        const progressValue = parseInt(target.getAttribute('aria-valuenow'));
        let currentProgress = 0;
        const progressInterval = setInterval(function () {
            target.querySelector('.progress-bar').style.width = currentProgress + '%';
            currentProgress++;
            if (currentProgress > progressValue) clearInterval(progressInterval);
        }, 20); 
    }

    const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startProgress(entry);
                progressObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.progress').forEach(progress => {
        progressObserver.observe(progress);
    });
});
function startCountingAnimation() {
    const counters = document.querySelectorAll('.counter');

    const options = {
      root: null,
      threshold: 0.75
    };

    const callback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute('data-target');
          const increment = Math.ceil(target / 100);
          let currentCount = 0;

          const updateCount = () => {
            if (currentCount < target) {
              currentCount += increment;
              entry.target.textContent = currentCount;
              setTimeout(updateCount, 10);
            } else {
              entry.target.textContent = target;
              observer.unobserve(entry.target);
            }
          };

          updateCount();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  document.addEventListener('DOMContentLoaded', startCountingAnimation);
  let span2 = document.getElementById("span-2");
  let span3 = document.getElementById("span-3");
  let menu = document.getElementsByClassName("navbar-toggler")[0];

  menu.onclick = function(){
    span2.classList.toggle("open");
    span3.classList.toggle("open");
  }

  let closeBtn = document.getElementById("close");
  let modal = document.getElementById("model");
  let port1 = document.getElementById("port1");
  let port2 = document.getElementById("port2");
  let port3 = document.getElementById("port3");
  let port4 = document.getElementById("port4");
  let port5 = document.getElementById("port5");
  let port6 = document.getElementById("port6");
  
  closeBtn.addEventListener("click", function() {
    modal.classList.add("none");
  });
  
  port1.addEventListener("click", function() {
    modal.classList.remove("none");
  });
  port2.addEventListener("click", function() {
    modal.classList.remove("none");
  });
  port3.addEventListener("click", function() {
    modal.classList.remove("none");
  });
  port4.addEventListener("click", function() {
    modal.classList.remove("none");
  });
  port5.addEventListener("click", function() {
    modal.classList.remove("none");
  });
  port6.addEventListener("click", function() {
    modal.classList.remove("none");
  });
  