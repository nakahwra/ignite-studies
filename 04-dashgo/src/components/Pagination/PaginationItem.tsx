import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

const PaginationItem = ({ 
  number, 
  isCurrent = false 
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        width="4"
        fontSize="xs"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
        >
        {number}
      </Button> 
    );
  }

  return (
    <Button 
      size="sm"
      width="4"
      fontSize="xs"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      >
      {number}
    </Button>
);
}

export default PaginationItem;