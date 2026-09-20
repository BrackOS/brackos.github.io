document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");

    if (header) {
        fetch("/assets/header.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load header");
                }

                return response.text();
            })
            .then(html => {
                header.innerHTML = html;
            })
            .catch(error => {
                console.error("BrackOS: could not load header.", error);
            });
    }
});
