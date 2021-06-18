import { useState, useEffect } from 'react'

export default function ColorThemeChange(props) {

    const [colorTheme, setColorTheme] = useState('light');

    useEffect(() => {
        setColorTheme(localStorage.getItem('colorTheme'));
    }, [])

    const toggleColorTheme = () => {
        if (colorTheme == 'light') {
            setColorTheme('dark');
        } else { 
            setColorTheme('light');
        }

    }

    useEffect(() => {
        
        localStorage.setItem('colorTheme', colorTheme);

        if (colorTheme == 'light') {
            document.querySelector('#dark-mode-toggle-btn').textContent = "☀"
            document.querySelector('body').style.backgroundColor = '#FFFFFF';
            document.querySelector('body').style.color = '#000000';
        } else {
            document.querySelector('#dark-mode-toggle-btn').textContent = "☾"
            document.querySelector('body').style.backgroundColor = '#202020';
            document.querySelector('body').style.color = '#FFFFFF';
        }
    }, [colorTheme]);

    return (
        <div className="color-theme-change">
            {props.children}
            <button id="dark-mode-toggle-btn"
                    onClick={() => { toggleColorTheme(); }}> 
                    ☀       
            </button>
        </div>
    )

}
