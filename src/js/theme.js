import refs from './refs.js'


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const replaceClass = (themeStart, themeEnd) => {
    refs.bodyRef.classList.replace(themeStart, themeEnd);
}

localStorage.getItem('Theme') === Theme.DARK
    ? (refs.bodyRef.classList.add(Theme.DARK),
        refs.checkBoxRef.checked = true)
    : (refs.bodyRef.classList.add(Theme.LIGHT));


const onDarkTheme = () => {
    replaceClass(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
}
    
const onLightTheme = () => {
    replaceClass(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
}

const changeInput = () => {
    refs.checkBoxRef.checked
        ? onDarkTheme()
        :onLightTheme()
}



refs.checkBoxRef.addEventListener('change', changeInput)