document.addEventListener("DOMContentLoaded", () => {

    // Animation des cartes

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.8s ease";

        observer.observe(card);

    });

    // Animation des statistiques

    const counters = document.querySelectorAll(".stat-card h2");

    counters.forEach(counter => {

        const targetText = counter.innerText;
        const target = parseInt(targetText);

        let count = 0;

        const updateCounter = () => {

            if (count < target) {

                count += Math.ceil(target / 40);

                counter.innerText = count + "+";

                setTimeout(updateCounter, 40);

            } else {

                counter.innerText = targetText;

            }

        };

        updateCounter();

    });

    // Bouton retour en haut

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.style.position = "fixed";
    topButton.style.bottom = "25px";
    topButton.style.right = "25px";
    topButton.style.width = "55px";
    topButton.style.height = "55px";
    topButton.style.border = "none";
    topButton.style.borderRadius = "50%";
    topButton.style.background = "linear-gradient(135deg,#2563eb,#7c3aed)";
    topButton.style.color = "#fff";
    topButton.style.fontSize = "22px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    topButton.style.zIndex = "9999";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // Formulaire contact

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            alert("Merci pour votre message. Je vous répondrai bientôt.");

            form.reset();

        });

    }

    // Effet photo 3D

    const image = document.querySelector(".image-box img");

    if (image) {

        image.addEventListener("mousemove", (e) => {

            const rect = image.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = (x - rect.width / 2) / 20;
            const rotateX = -(y - rect.height / 2) / 20;

            image.style.transform =
                `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform =
                "perspective(1000px) rotateY(0deg) rotateX(0deg)";

        });

    }

});