import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header, Sidebar } from "../components";

// Dependencia requer que seja renderizada pelo browser, desativa SSR
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
})

// Configurações visuais dos gráficos
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enables: false,
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      "2021-12-23T00:00:00.000Z",
      "2021-12-24T00:00:00.000Z",
      "2021-12-25T00:00:00.000Z",
      "2021-12-26T00:00:00.000Z",
      "2021-12-27T00:00:00.000Z",
      "2021-12-28T00:00:00.000Z",
      "2021-12-29T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
    },
  },
};

// Valores estáticos para os gráficos
const series = [
  {
    name: "series1",
    data: [31, 120, 10, 28, 61, 18, 109]
  }
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            borderRadius={8}
            p="8"
            bg="gray.800"
            pb="4"
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>

            <Chart type="area" options={options} series={series} height={160}/>
          </Box>

          <Box
            borderRadius={8}
            p="8"
            bg="gray.800"
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>

            <Chart type="area" options={options} series={series} height={160}/>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}