import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Flex,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import { ReactElement } from 'react';
  
  // // Replace test data with your own
  // const features = Array.apply(null, Array(4)).map(function (x, i) {
  //   return {
  //       id: i,
  //       title: 'Travel Dates',
  //   };
  // });

  interface FeatureProps {
    title: string;
    icon: ReactElement;
  }

  const Feature = ({ title, icon }: FeatureProps) => {
    return (
      <HStack align={'top'}>
        <Box color={'green.400'} px={2}>
          <Icon as={CheckIcon} />
        </Box>
        <VStack align={'start'}>
          <Text fontWeight={600}>{title}</Text>
        </VStack>
      </HStack>
    );
  };
  
  export default function Features() {
    return (
      <Box>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} marginTop={16}>
          <Heading fontSize={'3xl'}>What's VacayFinder</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
           With VacayFinder, you can say goodbye to the hassle of endless online searches and tedious travel planning. Sit back, relax, and let our innovative platform do the work for you. So, what are you waiting for? Start planning your next adventure with VacayFinder today!
          </Text>
        </Stack>
  
        <Container maxW={'6xl'} mt={10} marginBottom={16}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Feature
            icon={<Icon as={CheckIcon}/>}
            title={'Travel Dates'}
          />
          <Feature
            icon={<Icon as={CheckIcon}/>}
            title={'Budget'}
          />
          <Feature
            icon={<Icon as={CheckIcon}/>}
            title={'Preferred Activities'}
          />
          <Feature
            icon={<Icon as={CheckIcon}/>}
            title={'Climate'}
          />
          <Feature
            icon={<Icon as={CheckIcon}/>}
            title={'Accommodation Style'}
          />
          <Feature
            icon={<Icon as={CheckIcon}/>}
            title={'Transportation Options'}
          />
          <Feature
            icon={<Icon as={CheckIcon}/>}
            title={'Local Cuisine'}
          />
          <Feature
            icon={<Icon as={CheckIcon}/>}
            title={'Other Specific Details'}
          />
            {/* {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                </VStack>
              </HStack>
            ))} */}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }