const toggleSwitch = $('input[type="checkbox"]');
const nav = $('#nav');
const toggleIcon = $('#toggle-icon');
const image1 = $('#image1');
const image2 = $('#image2');
const image3 = $('#image3');
const textbox = $("#text-box")

function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode() {
    $('#nav').css('background-color', 'rgb(255 255 255 / 50%)');
    $("#text-box").css('background-color', 'rgb(0 0 0 / 50%)');
    $('#toggle-icon').children[0].textContent = 'Dark Mode';
    $('#toggle-icon').children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

function lightMode() {
    $('#nav').css('background-color', 'rgb(255 255 255 / 50%)');
    $("text-box").css('background-color', 'rgb(0 0 0 / 50%)') ;
    $('#toggle-icon').children[0].textContent = 'Light Mode';
    $('#toggle-icon').children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

toggleSwitch.change(switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}

console.log('clicked')