import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import {BiMap} from 'react-icons/bi'

import logoRotorBlue from '../../assets/rotor-blue.svg';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';

import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <Nav.Link href='#header'>
                            <img
                                src={logoRotorBlue}
                                height="40"
                                style={{ transform: 'rotate(85deg)' }}
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Nav.Link>
                        <SocialIcons>
                            <SocialIconLink
                                href="https://wa.me/5493482599595"
                                target='_blank'
                                aria-label='Whatsapp'
                                rel='noopener noreferrer'>
                                <FaWhatsapp />
                            </SocialIconLink>
                            <SocialIconLink
                                href='https://www.instagram.com/medimagen_vo/'
                                target='_blank'
                                aria-label='Instagram'
                                rel='noopener noreferrer'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href='mailto: medimagenvo@gmail.com'
                                target='_blank'
                                aria-label='Gmail'
                                rel='noopener noreferrer'>
                                <AiOutlineMail />
                            </SocialIconLink>                            
                            <SocialIconLink
                                href='http://maps.google.com/maps?z=20&t=m&q=loc:-28.49068018400059+-59.35494634814276'
                                target='_blank'
                                aria-label='Maps'
                                rel='noopener noreferrer'>
                                <BiMap />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;