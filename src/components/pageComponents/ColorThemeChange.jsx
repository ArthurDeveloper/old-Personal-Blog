import { useState, useEffect } from 'react'

export default function ColorThemeChange(props) {

    const [checked, setChecked] = useState(false);

    const [colorTheme, setColorTheme] = useState('light');

    useEffect(() => {
        if (colorTheme == 'light') {
            setColorTheme('dark');
        } else {
            setColorTheme('light');
        }
    }, [checked])

    useEffect(() => {
        if (checked) {
            document.querySelectorAll('body')[0].style.backgroundColor = 'black'
        } else {
            document.querySelectorAll('body')[0].style.backgroundColor = 'white'
        }
    }, [colorTheme]);

    return (
        <div id="color-theme-change">
            {props.children}
            <input type="checkbox" id="dark-mode-toggle-checkbox"
                   onChange={() => {setChecked(!checked);}}/>
        </div>
    )

}
