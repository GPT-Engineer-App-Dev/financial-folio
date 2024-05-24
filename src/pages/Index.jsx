import { Box, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaGlobe, FaCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Image src="/images/financial-times-logo.png" alt="Financial Times Logo" boxSize="50px" />
        <Flex gap={4}>
          <Link href="#" display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaChartLine />
            <Text ml={2}>Markets</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaGlobe />
            <Text ml={2}>World</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaCommentDots />
            <Text ml={2}>Opinion</Text>
          </Link>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        {/* Top News Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="lg" mb={4}>Top News</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">Headline 1</Heading>
                <Text mt={2}>Brief description of the news article. This is a summary of the content to give readers an idea of what the article is about.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">Headline 2</Heading>
                <Text mt={2}>Brief description of the news article. This is a summary of the content to give readers an idea of what the article is about.</Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar for Market Data */}
        <Box flex="1" p={4} bg="gray.100" borderRadius="lg" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="md">Stock Prices</Heading>
              <Text>Company A: $100</Text>
              <Text>Company B: $150</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Indices</Heading>
              <Text>Index A: 3000</Text>
              <Text>Index B: 4000</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Other Metrics</Heading>
              <Text>Metric A: 50%</</Text>
              <Text>Metric B: 2.5%</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <Flex gap={4}>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;