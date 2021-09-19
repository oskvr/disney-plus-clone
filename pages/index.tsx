import { Button, ButtonProps } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box,
  BoxProps,
  Flex,
  Grid,
  Heading,
  HStack,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Spacer,
  Stack,
  StackProps,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const DisneyButton = (props: ButtonProps) => {
  return (
    <Button
      bg="#0063e5"
      _hover={{ bg: "#0483ee" }}
      _active={{ transform: "scale(0.95)" }}
      textTransform="uppercase"
      fontWeight="normal"
      fontSize="15px"
      rounded="sm"
      px="14"
      {...props}
    >
      {props.children}
    </Button>
  );
};

const StarLogo = () => {
  return (
    <Text
      as="i"
      bgImage="https://cannonball-cdn.bamgrid.com/assets/originals/DSNY_STAR_LOGO_LIGHT_RGB.png"
      color="transparent"
      d="inline-block"
      bgPos="center"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      STAR
    </Text>
  );
};
function useScroll() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.pageYOffset);
    });
  }, []);

  return scroll;
}
const Navbar = (props: BoxProps) => {
  const scrollPosition = useScroll();
  const showFullNavbar = scrollPosition >= 780;
  //TODO: Fix navbar show/hide. Currently hijacks pointer events when opacity is set to 0.
  return (
    <HStack
      as="nav"
      bg={showFullNavbar ? "rgba(0,0,0,0.7)" : "transparent"}
      transition="0.5s"
      w="full"
      px="8"
      py="2"
      pos="fixed"
      top="0"
      left="0"
      zIndex="9999"
      {...props}
    >
      <Image
        alt="Disney logo"
        src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
        w="20"
        transition="0.5s"
        opacity={showFullNavbar ? 1 : 0}
      />
      <Spacer />
      <DisneyButton
        size="sm"
        color="white"
        px="4"
        py="0"
        transition="0.5s"
        opacity={showFullNavbar ? 1 : 0}
      >
        Sign up now
      </DisneyButton>
      <Button
        size="sm"
        rounded="sm"
        variant="outline"
        color="white"
        bg="rgba(0,0,0,0.5)"
        _hover={{ color: "black", bg: "white" }}
      >
        Log in
      </Button>
    </HStack>
  );
};

const Footer = (props: StackProps) => {
  return (
    <VStack spacing="5" py="10" px="5%" {...props}>
      <Image
        alt="Disney logo"
        src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
        w="20"
      />
      <HStack fontSize="9" color="gray.400" spacing="5" wrap="wrap">
        <Link src="#" textDecoration="none" _hover={{ color: "white" }}>
          English
        </Link>
        <Link src="#" textDecoration="none" _hover={{ color: "white" }}>
          Subscriber Agreement
        </Link>
        <Link src="#" textDecoration="none" _hover={{ color: "white" }}>
          Privacy Policy
        </Link>
        <Link src="#" textDecoration="none" _hover={{ color: "white" }}>
          UK & EU Privacy Rights
        </Link>
        <Link src="#" textDecoration="none" _hover={{ color: "white" }}>
          Cookies Policy
        </Link>
        <Link src="#" textDecoration="none" _hover={{ color: "white" }}>
          Interest-Based Ads
        </Link>
        <Link src="#" textDecoration="none" _hover={{ color: "white" }}>
          Supported Devices
        </Link>
        <Link src="#" textDecoration="none" _hover={{ color: "white" }}>
          Help Centre
        </Link>
      </HStack>
      <Text fontSize="9" color="gray.400">
        &copy; 2021 Disney and its related entities. All Rights Reserved.
      </Text>
    </VStack>
  );
};
const Home: NextPage = () => {
  let firstImageGridId = 0;
  const firstImageGrid = [
    {
      id: firstImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Mandalorian_S2.png",
    },
    {
      id: firstImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Wandavision_EN_(1).png",
    },
    {
      id: firstImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/FAWS.png",
    },
    {
      id: firstImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/AvengersEndgame@2x.png",
    },
    {
      id: firstImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Mighty_Ducks.png",
    },
    {
      id: firstImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Soul_EN.png",
    },
    {
      id: firstImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_Frozen2_AUNZ.jpg",
    },
    {
      id: firstImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Own_the_Room.png",
    },
    {
      id: firstImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/StarWars_TheBadBatch_en-US-10.jpg",
    },
  ];

  let secondImageGridId = 0;
  const secondImageGrid = [
    {
      id: secondImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Solar_Opposites-1.png",
    },
    {
      id: secondImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/The_Simpsons-5.png",
    },
    {
      id: secondImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Greys_Anatomy-4.png",
    },
    {
      id: secondImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/AvengersEndgame@2x.png",
    },
    {
      id: secondImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Family_Guy-3.png",
    },
    {
      id: secondImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Nomadland_SWEDEN-2.png",
    },
    {
      id: secondImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Love_Victor_EN_(1).png",
    },
    {
      id: secondImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/Own_the_Room.png",
    },
    {
      id: secondImageGridId++,
      src: "https://cannonball-cdn.bamgrid.com/assets/originals/9-1-9.png",
    },
  ];
  return (
    <>
      <Navbar />
      <Flex minH="100vh" direction="column" color="white" bg="#040714">
        {/* First section */}
        <Box
          bgImage={{
            base: "https://cannonball-cdn.bamgrid.com/assets/originals/DIS_STAR_Mobile-x2_Portrait_ROUTE_A_st22-01_SE-1.jpg",
            md: "https://cannonball-cdn.bamgrid.com/assets/originals/DIS_STAR_CD_Desktop_ROUTE_A-ALT_st24_SE-1.jpg",
          }}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          h="100vh"
          d="grid"
          alignContent="center"
        >
          <Grid
            textAlign={{ base: "center", md: "left" }}
            maxW={{ base: "300px", md: "680px" }}
            mx={{ base: "auto", md: "0" }}
            // py="48"
            px="5%"
            gap="3"
            justifyItems={{ base: "center", md: "start" }}
          >
            <Image
              alt="disney logo"
              src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
              maxW="100%"
              w="36"
            />
            <Heading as="h1" fontSize={{ base: "md", md: "2xl", lg: "3xl" }}>
              The greatest stories, <br /> all in one place
            </Heading>
            <Heading as="h3" fontSize={{ base: "sm", md: "lg", lg: "xl" }}>
              Now including <StarLogo />
            </Heading>
            <Stack spacing="5" direction={{ base: "column", md: "row" }}>
              <VStack
                align={{ base: "center", md: "start" }}
                borderBottom={{
                  base: "1px solid rgba(255,255,255,0.3)",
                  md: "none",
                }}
                py="3"
              >
                <Heading as="h3" size="md" fontWeight="medium">
                  89 kr{" "}
                  <Text as="span" color="gray.400" fontSize="xs">
                    | Month
                  </Text>
                </Heading>
                <Text fontSize="sm" color="gray.400">
                  Subscription required.
                </Text>
                <DisneyButton w="full">Sign up now</DisneyButton>
              </VStack>
              <VStack align={{ base: "center", md: "start" }} py="3">
                <Heading as="h3" size="md" fontWeight="medium">
                  890 kr{" "}
                  <Text as="span" color="gray.400" fontSize="xs">
                    | Year
                  </Text>
                </Heading>
                <Text fontSize="sm" color="gray.400">
                  Save over 15%.* Subscription required.
                </Text>
                <DisneyButton w="full">Save on 12 months</DisneyButton>
              </VStack>
            </Stack>
            <Text fontSize="8" color="gray.400">
              *Savings compared to 12 months of the monthly subscription price.
            </Text>
          </Grid>
        </Box>
        {/* end of first section */}

        {/* second section */}
        <Stack
          spacing="5"
          direction={{ base: "column", md: "row-reverse" }}
          align="center"
          justify="center"
          // textAlign="center"
          py="32"
          px="10"
        >
          <Box
            w={{ base: "100%", md: "50%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading as="h3" size="lg" mb="5">
              Introducing <StarLogo />
            </Heading>
            <Text color="gray.400">
              Star on Disney+ brings you more. Hundreds more TV series & movies,
              plus thousands of hours of drama, suspense, humour and thrills.
              Enjoy Star as part of your Disney+ subscription.
            </Text>
          </Box>
          <Box w="auto">
            <Image
              alt=""
              src="https://cannonball-cdn.bamgrid.com/assets/originals/Star_Family-TV_Mobile_SWEDEN_712x677-1.jpg"
              w="100%"
              d="block"
            />
          </Box>
        </Stack>
        {/* end of second section */}

        {/* third section */}
        <Stack
          spacing="10"
          direction={{ base: "column", md: "row" }}
          px="5%"
          align="center"
        >
          <Box>
            <Heading mb="10">Watch the way you want</Heading>
            <UnorderedList color="gray.400" spacing="4">
              <ListItem>
                Host virtual movie nights with GroupWatch. Pause, rewind and
                react with up to six personal friends. To invite or be invited
                to join GroupWatch, subscription is required
              </ListItem>
              <ListItem>
                Download any movie or series and watch on-the-go
              </ListItem>
              <ListItem>
                Keep your family safe with easy parental controls
              </ListItem>
              <ListItem>
                An ever-growing range of titles in stunning 4K UHD and Dolby
                Atmos sound on compatible devices
              </ListItem>
              <ListItem>Stream on up to four devices at the same time</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Image
              alt=""
              src="https://cannonball-cdn.bamgrid.com/assets/originals/SE_Desktop_MLP_Devices_Desktop_1072x858.png"
            />
          </Box>
        </Stack>
        {/* end of third section */}

        <Box mt="32" px="5%">
          <Box textAlign="center">
            <Heading size="lg" fontWeight="semibold">
              Disney+ originals, movies and TV series
            </Heading>
            <Text color="gray.400" my="6">
              Explore the greatest stories from Disney, Pixar, Marvel, Star Wars
              and National Geographic, as well as exclusive Disney+ Originals.
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 2, md: 3 }} gap="5">
            {firstImageGrid.map((img) => (
              <Image alt="" key={img.id} src={img.src} rounded="md" />
            ))}
          </SimpleGrid>
        </Box>

        <Box textAlign="center" py="32">
          <DisneyButton>Sign up now</DisneyButton>
        </Box>

        <Box px="5%">
          <Box textAlign="center">
            <Heading size="lg" fontWeight="semibold">
              More laughs, more drama and originals from Star
            </Heading>
            <Text color="gray.400" my="6">
              Discover a brand new world of entertainment from Star on Disney+
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 2, md: 3 }} gap="5">
            {secondImageGrid.map((img) => (
              <Image alt="" key={img.id} src={img.src} rounded="md" />
            ))}
          </SimpleGrid>
        </Box>

        <Box px="5%" py="32">
          <Box textAlign="center" mb="10">
            <Heading size="lg" fontWeight="semibold">
              Available on your favourite devices
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 2, md: 4 }} textAlign="center">
            <Box>
              <Image
                alt=""
                src="https://cannonball-cdn.bamgrid.com/assets/originals/device-group-tv.png"
              />
              <Heading as="h3" size="sm" py="5">
                TV
              </Heading>
              <List color="gray.400">
                <ListItem>Amazon Fire TV</ListItem>
                <ListItem>Android TV</ListItem>
                <ListItem>Apple TV</ListItem>
                <ListItem>Chromecast</ListItem>
                <ListItem>LG TVs</ListItem>
                <ListItem>Samsung</ListItem>
              </List>
            </Box>

            <Box>
              <Image
                alt=""
                src="https://cannonball-cdn.bamgrid.com/assets/originals/device-group-computer.png"
              />
              <Heading as="h3" size="sm" py="5">
                Computer
              </Heading>
              <List color="gray.400">
                <ListItem>Chrome OS</ListItem>
                <ListItem>MacOS</ListItem>
                <ListItem>Windows PC</ListItem>
              </List>
            </Box>

            <Box>
              <Image
                alt=""
                src="https://cannonball-cdn.bamgrid.com/assets/originals/device-group-mobile-tablet.png"
              />
              <Heading as="h3" size="sm" py="5">
                Mobile & Tablet
              </Heading>
              <List color="gray.400">
                <ListItem>Amazon Fire Tablets</ListItem>
                <ListItem>Android Phones & Tablets</ListItem>
                <ListItem>iPhone and iPad</ListItem>
              </List>
            </Box>

            <Box>
              <Image
                alt=""
                src="https://cannonball-cdn.bamgrid.com/assets/originals/device-group-game-consoles.png"
              />
              <Heading as="h3" size="sm" py="5">
                Game Consoles
              </Heading>
              <List color="gray.400">
                <ListItem>PS4</ListItem>
                <ListItem>PS5</ListItem>
                <ListItem>Xbox One</ListItem>
                <ListItem>Xbox Seies X</ListItem>
                <ListItem>Xbox Series S</ListItem>
              </List>
            </Box>
          </SimpleGrid>
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Home;
