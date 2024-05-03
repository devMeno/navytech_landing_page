import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import Logo from "/public/images/logo/Logo_Navytech.png"

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Services",
        "Portfolio",
        "About us",
        "Testimonial",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} style={{color:'white',height:'96px'}}
        className={'bg-[#000816] text-white md:h-[96px]'}>
            <NavbarContent className={'2xl:-ml-[145px]'}>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <img src={Logo} alt="Logo" className={'w-[50px] md:w-[60px] h-[28px] md:h-[34px]'}/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href="#" aria-current="page" style={{color:'white',fontSize:'20px'}}>
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" style={{color:'white',fontSize:'20px'}}>
                        Portfolio
                    </Link>
                </NavbarItem>
                <NavbarItem style={{color:'white'}}>
                    <Link color="foreground" href="#" style={{color:'white',fontSize:'20px'}}>
                        About us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" style={{color:'white',fontSize:'20px'}}>
                        Testimonial
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className={'2xl:-mr-[145px]'}>
                <NavbarItem>
                    <button type="button"
                            className="text-white text-[14px] 2xl:text-[20px] bg-[#000816] h-[30px] md:h-[40px] 2xl:h-[48px] w-[100px] md:w-[180px] border-white border-[2px] rounded-lg  px-4 text-center">
                        Talk to us
                    </button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className={'bg-black h-[300px]'}>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color=""
                            className="w-full text-white"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
