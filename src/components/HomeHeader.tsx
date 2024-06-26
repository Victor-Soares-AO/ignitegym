import { HStack, Heading, Text, VStack, Icon } from 'native-base';

import { UserPhoto } from './UserPhoto';

import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export function HomeHeader() {
    return (
        <HStack bg='gray.600' pt={16} pb={5} px={5} alignItems='center'>
            <UserPhoto
                source={{ uri: 'https://github.com/victor-soares-ao.png' }}
                alt='Foto do usuário'
                size={16}
                mr={4}
            />
            <VStack flex={1}>
                <Text color='gray.100' fontSize='md'>
                    Olá,
                </Text>

                <Heading color='gray.100' fontSize='md'>
                    Victor Soares
                </Heading>
            </VStack>

            <TouchableOpacity>
                <Icon
                    as={MaterialIcons}
                    name='logout'
                    size={7}
                    color='gray.200'
                />
            </TouchableOpacity>
        </HStack>
    )
}