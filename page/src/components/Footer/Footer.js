
import React from 'react'

import footerIns from '../../asserts/footer/footerInstagram.png'
import footerGithub from '../../asserts/footer/footerGithub.png'
import footerGoogle from '../../asserts/footer/footerGoogle.png'
import footerLinkedin from '../../asserts/footer/footerLinkedin.png'
import '../Footer/Footer.css'

export const Footer = () => {
    return [
        {
            id: 1,
            link: 'https://www.instagram.com/kkkkrisyang/',
            name: 'footerIns',
            src: footerIns,
            width: '40',
            text: 'Instagram'
        },
        {
            id: 2,
            link: 'https://github.com/kristyyang',
            name: 'footerGithub',
            src: footerGithub,
            width: '40',
            text: 'github'
        },
        {
            id: 3,
            link: 'mailto: kristyyang1110@gmail.com"',
            name: 'footerGoogleplus',
            src: footerGoogle,
            width: '45',
            text: 'google plus'
        },
        {
            id: 4,
            link: 'https://www.linkedin.com/in/kristy-yang-637791101/',
            name: 'footerLinkedin',
            src: footerLinkedin,
            width: '45',
            text: 'linkedin'
        },
    ].map(socialFooterIcon => {
        return (
            <a key={socialFooterIcon.id} href={socialFooterIcon.link}>
                <img
                    className={socialFooterIcon.name}
                    src={socialFooterIcon.src}
                    width={socialFooterIcon.width}
                    alt={socialFooterIcon.text}
                />
            </a>
        )
    })
}

export default Footer;
