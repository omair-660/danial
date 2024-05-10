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