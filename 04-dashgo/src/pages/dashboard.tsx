import { Flex } from "@chakra-ui/react";
import { Header, Sidebar } from "../components";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />
        <h1>Content</h1>
      </Flex>
    </Flex>
  )
}