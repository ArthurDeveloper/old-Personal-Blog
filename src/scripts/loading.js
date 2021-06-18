import { useState, useEffect } from 'react'

import Router from 'next/router'

export default function loading() {

    const [loading, setLoading] = useState(false);

    Router.events.on('routeChangeStart', () => { setLoading(true); })
    Router.events.on('routeChangeComplete', () => { setLoading(false); })

    useEffect(() => {

        if (!loading && document.querySelector('#loading') !== null) {
            
            window.setTimeout(() => {
                let elLoading = document.querySelector('#loading');
                if (elLoading !== null) {
                    elLoading.parentNode.removeChild(elLoading);
                }

                let elOverlay = document.querySelector('#overlay');
                if (elOverlay !== null) {
                    elOverlay.parentNode.removeChild(elOverlay);
                }
            }, 200);

            return;
        }

        if (loading && document.querySelector('#loading') === null) {

            const el = document.createElement('div');

            el.setAttribute('id', 'loading');

            const img = document.createElement('img');

            img.setAttribute('id', 'loading-img');

            img.setAttribute('src', '/loading.png');

            img.style.width = "30px";

            // Verifica se o dark mode está ativo
            if (localStorage.getItem("colorTheme") === 'dark') {
                img.style.filter = "invert(100%)";
            }

            const overlay = document.createElement('div');

            overlay.setAttribute('id', 'overlay');

            document.body.appendChild(overlay);

            el.appendChild(img);
            
            document.body.appendChild(el);

        }

    }, [loading])

}