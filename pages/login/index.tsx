import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Heading, Stack, VStack, Text, Link } from "@chakra-ui/layout";
import DisneyButton from "../../components/DisneyButton";

export default function Login() {
  return (
    <Box as="main" bg="rgb(26, 29, 41)" minH="100vh">
      <Stack maxW="300px" mx="auto" py="14">
        <Link href="" alignSelf="center">
          <Image
            alt="disney logo"
            src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
            maxW="100%"
            w="36"
            mb="8"
          />
        </Link>
        <Stack as="form" spacing="5">
          <Heading as="h3" color="white" size="md">
            Log in with your email
          </Heading>
          <Input placeholder="Email" color="white" />
          <DisneyButton w="full">Continue</DisneyButton>
          <Box fontSize="xs">
            <Text as="span" mr="3" color="gray.400">
              New to Disney+?
            </Text>
            <Link href="#" color="white">
              Sign up
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
