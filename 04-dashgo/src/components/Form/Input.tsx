import { forwardRef, ForwardRefRenderFunction } from "react";
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

// Estende os props padrão do Input
interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

// 2. Tipagem das refs encaminhadas - recebimento de uma ref do tipo HTMLInput
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
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
          ref={ref} // 3. Recebimento da ref encaminhada anteriormente
          {...rest}
          // Habilita o componente a receber o restante de props padrão do ChakraInput
        />

        { !!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    )
}

export default forwardRef(Input); // 1. Encaminhamento da ref para o componente Input