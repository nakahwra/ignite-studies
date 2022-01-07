import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header, Pagination, Sidebar } from "../../components";

export default function UserList() {
  const isWidescreen = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />
      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex align="center" justify="space-between" mb="8">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button 
              as="a" 
              size="sm" 
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize={20}/>}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th width="8" px={["4", "4", "6"]} color="gray.300">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWidescreen && <Th>Data de cadastro</Th> }
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Nakahara</Text>
                    <Text fontSize="sm" color="gray.300">nakahara@gmail.com</Text>
                  </Box>
                </Td>
                { isWidescreen && <Td>24 de Dezembro, 2021</Td> }
                <Td>
                  { isWidescreen && (
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize={16}/>}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Nakahara</Text>
                    <Text fontSize="sm" color="gray.300">nakahara@gmail.com</Text>
                  </Box>
                </Td>
                { isWidescreen && <Td>24 de Dezembro, 2021</Td> }
                <Td>
                  { isWidescreen && (
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize={16}/>}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Nakahara</Text>
                    <Text fontSize="sm" color="gray.300">nakahara@gmail.com</Text>
                  </Box>
                </Td>
                { isWidescreen && <Td>24 de Dezembro, 2021</Td> }
                <Td>
                  { isWidescreen && (
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize={16}/>}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}