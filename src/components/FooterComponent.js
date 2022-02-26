import React from 'react';
import {
    Icon
} from "semantic-ui-react"

const FooterComponent = () => {
    const iconSize = window.innerWidth > 500 ? "big" : "large"

    return (
        <div className="footer-container">
            <ul className="footer-list">
                <li>
                    <a onClick={() => window.open('https://www.instagram.com/soulyouknow/', '_blank')}>
                        <Icon name="instagram" size={iconSize}/>
                    </a>
                </li>
                <li>
                    <a onClick={() => window.open('https://www.facebook.com/soulyouknowband', '_blank')}>
                        <Icon name="facebook" size={iconSize} />
                    </a>
                </li> 
                <li>
                    <a onClick={() => window.open('https://open.spotify.com/artist/2hxK5s6Gvisb2GOx6Pl1cx', '_blank')}>
                        <Icon name="spotify" size={iconSize} />
                    </a>
                </li> 
                <li>
                    <a  onClick={() => window.open('https://music.apple.com/us/artist/soul-you-know/1567783709', '_blank')}>
                        <Icon name="apple" size={iconSize} />
                    </a>
                </li> 
                <li>
                    <a onClick={() => window.open('https://www.youtube.com/channel/UCXsqEevMY7FgWP4ASLmKf1A', '_blank')}>
                        <Icon name="youtube" size={iconSize} />
                    </a>
                </li> 
            </ul>
        </div>
    );
};

export default FooterComponent;