document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    const animateProgress = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute("data-width");
                bar.style.width = targetWidth + "%";
            } else {
                // Reset animation when leaving the section
                entry.target.style.width = "0";
            }
        });
    };

    const observer = new IntersectionObserver(animateProgress, {
        threshold: 0.5, // Trigger when 50% of the element is visible
    });

    progressBars.forEach((bar) => observer.observe(bar));
});