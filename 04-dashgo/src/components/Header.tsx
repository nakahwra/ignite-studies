import { Flex, Icon, Input, HStack, Text, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"

const Header = () => {
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
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" ml="1" color="pink.500" >
          .
        </Text>
      </Text>

      <Flex
        as="label"
        position="relative"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        alignItems="center"
        color="gray.200"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          px="4"
          mr="4"
          color="gray.50"
          variant="unstyled"
          placeholder="Pesquisar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />

        <Icon as={RiSearchLine} fontSize="20"/>
      </Flex>

      <Flex align="center" ml="auto">
        <HStack 
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20"/>
          <Icon as={RiUserAddLine} fontSize="20"/>
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Lucas Nakahara</Text>

            <Text color="gray.300" fontSize="small">
              nakahara@gmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Lucas Nakahara" src="https://github.com/nakahwra.png"/>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header