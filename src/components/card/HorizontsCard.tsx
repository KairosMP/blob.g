import { Flex, Heading, Text, Image, VStack } from "@chakra-ui/react";
import { CustomScorllbar } from "../../styles/styles";

interface HorizontsCardProps {
    card : {
        image: {
            url: string,
            alt: string
        },
        title: string,
        content: string,
        publishDate: string,
    }
}

export function HorizontsCard({ card }: HorizontsCardProps) {
    const { image, title, content, publishDate } = card

    return (
        <Flex maxW={'850px'} maxH={'400px'} borderRadius={'8'} bgColor={"gray.100"}>
            <Image 
                src={image.url} 
                alt={image.alt} 
                maxW={['200px', '300px', '400px']} 
                maxH={['200px', '300px', '400px']} 
                objectFit={'cover'} 
                borderLeftRadius={'8px'} 
            />
            <VStack p={'16px'} spacing={'16px'} align={"flex-start"} maxW={'350px'} minW={'200px'} h={['200px','300px', '400px']}>
                <Text variant={'subtitle'}>{publishDate}</Text>
                <Heading size={"lg"} >{title}</Heading>
                <Text overflowY={"auto"} css={CustomScorllbar}>{content}</Text>
            </VStack>
        </Flex>
    )
}