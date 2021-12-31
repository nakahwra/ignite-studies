import { useRouter } from "next/router";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

// Componente React que servirá como Provider na aplicação
export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure(); // Hook padrão ChakraUI com estados do drawer
  const router = useRouter();

  // Valida mudança na rota para fechar automaticamente a Sidebar
  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

// Função para substituir o hook padrão do React na utilização deste context
export const useSidebarDrawer = () => useContext(SidebarDrawerContext)