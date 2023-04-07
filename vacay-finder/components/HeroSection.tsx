import {
    Stack,
    Flex,
    Button,
    Heading,
    Link,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { Marcellus_SC } from '@next/font/google';
  
  export default function HeroSection() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        // marginTop={-20}
        backgroundImage={
          "/Vacation.jpeg"
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          marginTop={-60}
          marginLeft={-40}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 10 })}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Heading
                lineHeight={1.1}
                fontWeight={200}
                fontStyle={"Marcellus_SC"}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                <Text
                as={'span'}
                position={'relative'}
                _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    zIndex: -1,
                }}>
                Find The Vacation For You
                </Text>
            </Heading>
            <Text
              color={'black'}
              marginTop={5}
              fontWeight={150}
              lineHeight={1.2}
              fontSize={25}
              maxW={'500'}
              >
              Welcome to VacayFinder, the ultimate destination for travelers seeking personalized vacation recommendations
            </Text>
            <Stack direction={'row'}>
            <Link href="/recommender">
              <Button
                marginTop={5}
                bg={'orange.400'}
                fontWeight={300}
                rounded={'md'}
                color={'black'}
                _hover={{ bg: 'orange.500' }}>
                Get Started
              </Button>
              </Link>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }