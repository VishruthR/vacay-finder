import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    Container,
  } from '@chakra-ui/react';

  interface FeatureProps {
    image: string;
    city: string;
    country: string;
  }

  const Feature = ({ image, city, country }: FeatureProps) => {
    return (
        <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {city}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {country}
            </Heading>
            {/* <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                $399
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $599
              </Text>
            </Stack> */}
          </Stack>
        </Box>
      </Center>
    );
  };
  
  export default function Card2() {
    return (
        <SimpleGrid columns={3} spacing={5}>
            <Feature
                image={'/paris.jpeg'}
                city={'Paris'}
                country={'France'}
            />
            <Feature
                image={'/tokyo.jpeg'}
                city={'Tokyo'}
                country={'Japan'}
            />
            <Feature
                image={'/dubai.jpeg'}
                city={'Dubai'}
                country={'United Arab Emirates'}
            />
            <Feature
                image={'/sydney.jpeg'}
                city={'Sydney'}
                country={'Australia'}
            />
            <Feature
                image={'/agra.jpeg'}
                city={'Agra'}
                country={'India'}
            />
            <Feature
                image={'/bali.jpeg'}
                city={'Bali'}
                country={'Indonesia'}
            />
        </SimpleGrid>
    );
  }