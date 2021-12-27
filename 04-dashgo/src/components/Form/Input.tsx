import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

// Estende os props padrão do Input
interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <FormControl>
      { label && <FormLabel htmlFor={name}>{label}</FormLabel> }

      <ChakraInput
        id={name}
        name={name}
        type="email"
        focusBorderColor='pink.500'
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: "gray.900"
        }}
        size="lg"
        {...rest} 
        // Habilita o componente a receber o restante de props padrão do ChakraInput
      />
    </FormControl>
  )
}

export default Input;