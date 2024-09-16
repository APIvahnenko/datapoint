document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
    copyText.addEventListener("click", () => {
        navigator.clipboard.writeText("anna.ivakh@gmail.com");

        document.getElementById("copy-confirm").style.display="block";
        setTimeout(() => (document.getElementById("copy-confirm").style.display="none"), 2000);
    });
});