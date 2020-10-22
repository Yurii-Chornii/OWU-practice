// alert('ok');
const btn = document.getElementById('btn-oll-sections');
btn.onclick = () => {
    const background = document.getElementById('logo-wrapper');
    background.classList.toggle('logo-dropdown-active');
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('dropdown-visibility');
    const icon = document.getElementById('btn-icon-open-close-dropdown');
    icon.classList.toggle('fa-times');
}
