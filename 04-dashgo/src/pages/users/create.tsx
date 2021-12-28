import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { Header, Input, Sidebar } from "../../components";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />
          
          <Stack spacing="8">
            <SimpleGrid minChildWidth="240px" w="100%" spacing="8">
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>
            
            <SimpleGrid minChildWidth="240px" w="100%" spacing="8">
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirm" type="password" label="Confirmar senha" />
            </SimpleGrid>
          </Stack>

          <Flex mt="8" justify="flex-end">
            <Stack direction="row" spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}