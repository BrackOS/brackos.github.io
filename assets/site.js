document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");

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
                console.error(
                    "BrackOS: could not load header.",
                    error
                );
            });
    }

    if (footer) {
        fetch("/assets/footer.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load footer");
                }

                return response.text();
            })
            .then(html => {
                footer.innerHTML = html;
            })
            .catch(error => {
                console.error(
                    "BrackOS: could not load footer.",
                    error
                );
            });
    }
});
