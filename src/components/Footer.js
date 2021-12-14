import React, {Component} from 'react';

const styleDiv = {
    display: 'flex',
    position: 'fixed',
    bottom: '15px',
    right: '20px'
}

const links = [
    {title: 'Telegram', icon: 'https://img.icons8.com/bubbles/50/000000/telegram-app.png', link: 'https://t.me/TheDudoser'},
    {title: 'Instagram', icon: 'https://img.icons8.com/bubbles/50/000000/instagram-new--v2.png', link: 'https://www.instagram.com/cut_in_picture/'},
]

class Footer extends Component {
    render() {
        return (
            <div className="style" style={styleDiv}>
                {links.map(link => {
                    return (
                        <a href={link.link} target='_blank'>
                        <img
                            src={link.icon}
                            alt={link.title}
                            height="40px"
                            width="40px"
                        />
                        </a>
                        )})
                }
            </div>
        );
    }
}

export default Footer;