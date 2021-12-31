import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo, Profile, NotificationsNav, SearchBox } from "./";

const Header = () => {
  const isWidescreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex 
      as="header" 
      w="100%"  
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      { isWidescreen && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWidescreen} />
      </Flex>
    </Flex>
  )
}

export default Header;