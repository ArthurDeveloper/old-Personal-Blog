import { useEffect } from 'react'

export default function loading() {

    useEffect(() => {

        if (document.querySelector('#loading') !== null) {
            let el = document.querySelector('#loading');
            el.parentNode.removeChild(el);
            return;
        }

        const el = document.createElement('div');

        el.setAttribute('id', 'loading');

        const img = document.createElement('img');

        img.setAttribute('id', 'loading-img');

        img.setAttribute('src', '/loading.png');

        img.style.width = "30px";

        el.appendChild(img);
        
        document.body.appendChild(el);

    })

}