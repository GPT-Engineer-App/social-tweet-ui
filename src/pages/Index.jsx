import { Box, Flex, IconButton, Input, Stack, Text, VStack, Image, Button } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUserAlt, FaEllipsisH, FaFeatherAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex height="100vh" maxWidth="100%" overflow="hidden">
      {/* Sidebar */}
      <VStack spacing={2} align="stretch" width="250px" bg="blue.500" color="white" padding={4}>
        <Box>
          <IconButton icon={<FaTwitter />} fontSize="2xl" variant="unstyled" aria-label="Twitter" isRound />
        </Box>
        <VStack spacing={4} align="stretch">
          <Button leftIcon={<FaHome />} justifyContent="flex-start">
            Home
          </Button>
          <Button leftIcon={<FaHashtag />} justifyContent="flex-start">
            Explore
          </Button>
          <Button leftIcon={<FaBell />} justifyContent="flex-start">
            Notifications
          </Button>
          <Button leftIcon={<FaEnvelope />} justifyContent="flex-start">
            Messages
          </Button>
          <Button leftIcon={<FaBookmark />} justifyContent="flex-start">
            Bookmarks
          </Button>
          <Button leftIcon={<FaListAlt />} justifyContent="flex-start">
            Lists
          </Button>
          <Button leftIcon={<FaUserAlt />} justifyContent="flex-start">
            Profile
          </Button>
          <Button leftIcon={<FaEllipsisH />} justifyContent="flex-start">
            More
          </Button>
        </VStack>
        <Button mt="auto" colorScheme="blue" leftIcon={<FaFeatherAlt />}>
          Tweet
        </Button>
      </VStack>

      {/* Feed */}
      <VStack flex="1" padding={4} spacing={4} align="stretch">
        <Box padding={4} bg="gray.100" borderRadius="lg">
          <Flex gap={2}>
            <Image borderRadius="full" boxSize="40px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZXxlbnwwfHx8fDE3MTQ2Nzg5NDl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" />
            <Input placeholder="What's happening?" />
          </Flex>
        </Box>
        <Stack spacing={3}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Box key={index} padding={4} bg="gray.100" borderRadius="lg">
              <Flex gap={2}>
                <Image borderRadius="full" boxSize="40px" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwcHJvZmlsZXxlbnwwfHx8fDE3MTQ2Nzg5NDl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" />
                <VStack align="stretch">
                  <Text fontWeight="bold">John Doe</Text>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </VStack>
              </Flex>
            </Box>
          ))}
        </Stack>
      </VStack>

      {/* Trends */}
      <VStack width="300px" padding={4} spacing={4} align="stretch">
        <Box padding={4} bg="gray.100" borderRadius="lg">
          <Text fontSize="lg" fontWeight="bold">
            Trends for you
          </Text>
          <VStack spacing={2} mt={2}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Text key={index} cursor="pointer" _hover={{ textDecoration: "underline" }}>
                #Trend{index + 1}
              </Text>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Index;
