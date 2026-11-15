const loadFragment = (elementId, fragmentPath, fragmentName) => {
    const element = document.getElementById(elementId);

    if (!element) {
        return;
    }

    fetch(fragmentPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fragmentName}`);
            }

            return response.text();
        })
        .then(html => {
            element.innerHTML = html;
        })
        .catch(error => {
            console.error(
                `BrackOS: could not load ${fragmentName}.`,
                error
            );
        });
};

document.addEventListener("DOMContentLoaded", () => {
    loadFragment("site-header", "/assets/header.html", "header");
    loadFragment("site-footer", "/assets/footer.html", "footer");
});
