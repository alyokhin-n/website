import React from 'react';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Logo from 'common/components/UIElements/Logo';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FooterArea, {
    WidgetArea,
    MenuArea,
    Menu,
    MenuItem,
    CopyrightText,
} from './footer.style';

import {footer} from 'common/data/AppClassic';
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Button} from "@mantine/core";

const Footer = () => {
    const {logo, menu, widgets} = footer;
    const date = new Date();
    const year = date.getFullYear();

    return (
        <FooterArea>
            <Container>
                <WidgetArea>
                    {widgets.map((item) => (
                        <Box className="col" key={`footer-widget--key${item.id}`}>
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                <img src={item.icon?.src} alt={item.title} />
                                <Heading as="h3" content={item.title} />
                                <Text content={item.description} />
                            </Link>
                        </Box>
                    ))}
                </WidgetArea>
                {/* End of footer widgets area */}
                <MenuArea>
                    <Logo
                        className="logo"
                        href="/appclassic"
                        logoSrc={logo}
                        title="App Classic"
                    />
                    <Menu>
                        {menu.map((item) => (
                            <MenuItem key={`footer-link${item.id}`}>
                                <AnchorLink href={item.path} offset={item.offset}>
                                    {item.label}
                                </AnchorLink>
                                <Link href={item.path} offset={item.offset}>
                                    {item.text}
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                    <CopyrightText>Copyright © {year}. All rights reserved by Orienteering.PRO</CopyrightText>
                </MenuArea>
                {/* End of footer menu area */}
            </Container>
        </FooterArea>
    );
};

export default Footer;
