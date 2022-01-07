import { ElementType } from "react";
import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ActiveLink } from "./";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  href: string;
  children: string;
}

const NavLink = ({ icon, href, children, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}

export default NavLink;