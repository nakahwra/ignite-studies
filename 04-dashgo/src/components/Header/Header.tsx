import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo, Profile, NotificationsNav, SearchBox } from "./";

const Header = () => {
  const { onOpen } = useSidebarDrawer();

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
      { !isWidescreen && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          display="flex"
          // align="center"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          aria-label="Open navigation menu"
        >

        </IconButton>
      )}

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