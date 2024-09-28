import { Avatar, Box, chakra, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

const testimonials = [
    {
        name: 'Srishti Pandey',
        role: 'B.Tech 3rd Year Student - Web Developer',
        roll: 'Roll no. 2205250100055',
        content:
            'A resume builder website is a web-based tool that allows users to create and customize a professional resume to their desired specifications. These websites typically provide templates for creating a resume.',
        avatar: '/',
    },
    {
        name: 'Pragati Pandey',
        role: 'B.Tech 3rd Year Student - Web Designer',
        roll: 'Roll no. 2205250100037',
        content:
            'I love working on web design projects that allow me to express my creativity and build user-friendly interfaces.',
        avatar: '/', // Update with the correct path
    },
    {
        name: 'Shaurya Giri',
        role: 'B.Tech 3rd Year Student - Software Engineer',
        roll: 'Roll no. 2205250100048',
        content:
            'Developing software solutions that enhance user experience is my passion. I strive to write clean and efficient code.',
        avatar: '/', // Update with the correct path
    }
];

function TestimonialCard(props) {
    const { name, role, roll, content, avatar } = props;
    return (
        <Flex
            boxShadow={'lg'}
            maxW={'640px'}
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('white', 'gray.800')}
            _after={{
                content: '""',
                position: 'absolute',
                height: '37px',
                width: '41px',
                left: '35px',
                top: '-10px',
                backgroundSize: 'cover',
            }}
            _before={{
                content: '""',
                position: 'absolute',
                zIndex: '-1',
                height: 'full',
                maxW: '640px',
                width: 'full',
                filter: 'blur(40px)',
                transform: 'scale(0.98)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
            }}>
            <Flex
                direction={'column'}
                textAlign={'left'}
                justifyContent={'space-between'}>
                <chakra.p
                    color={useColorModeValue('gray.500', 'gray.50')}
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}>
                    {content}
                </chakra.p>
                <chakra.p fontFamily={'Work Sans'} color={useColorModeValue('gray.700', 'gray.50')} fontWeight={'bold'} fontSize={14}>
                    {name}
                    <chakra.span
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={'gray.500'}>
                        {' '}
                        - {role}
                    </chakra.span>
                </chakra.p>
                <chakra.p fontFamily={'Inter'} color={'gray.500'} fontSize={12}>
                    {roll}
                </chakra.p>
            </Flex>
            <Avatar
                src={avatar}
                height={'80px'}
                width={'80px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
            />
        </Flex>
    );
}

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us - Resume Builder</title>
                <meta name="description" content="Learn more about the Resume Builder website and its mission to provide easy-to-use tools for creating professional resumes." />
                <meta name="keywords" content="resume builder, about us, mission, professional resumes, tools" />
                <meta name="author" content="Srishti Pandey" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="About Us - Resume Builder" />
                <meta property="og:description" content="Learn more about the Resume Builder website and its mission to provide easy-to-use tools for creating professional resumes." />
                <meta property="og:image" content="./Branding/Profile.jpg" />
                <meta property="og:url" content="/" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Flex
                textAlign={'center'}
                pt={10}
                justifyContent={'center'}
                direction={'column'}
                width={'full'}>
                <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                    <chakra.h3
                        fontFamily={'Work Sans'}
                        fontWeight={'bold'}
                        fontSize={20}
                        textTransform={'uppercase'}
                        color={'purple.400'}>
                        Our Team
                    </chakra.h3>
                    <chakra.h1
                        py={5}
                        fontFamily={'Work Sans'}
                        fontWeight={'bold'}
                        fontSize={48}
                        color={useColorModeValue('gray.700', 'gray.50')}>
                        Meet Our Team
                    </chakra.h1>
                    <chakra.h2
                        margin={'auto'}
                        width={'70%'}
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={useColorModeValue('gray.500', 'gray.400')}>
                        We are a passionate team dedicated to providing the best resume-building tools for professionals worldwide.
                    </chakra.h2>
                </Box>
                <SimpleGrid
                    columns={{ base: 1, xl: 1 }}
                    spacing={'20'}
                    mt={16}
                    mx={'auto'}>
                    {testimonials.map((cardInfo, index) => (
                        <TestimonialCard key={index} {...cardInfo} />
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    );
}
