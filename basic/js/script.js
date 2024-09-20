function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}

function copyURL() {
    navigator.clipboard.writeText(window.location.href)
}

function copyEmail() {
    navigator.clipboard.writeText("anna.ivakh@gmail.com");

    document.getElementById("copy-confirm").style.display="block";
        setTimeout(() => (document.getElementById("copy-confirm").style.display="none"), 2000);
}