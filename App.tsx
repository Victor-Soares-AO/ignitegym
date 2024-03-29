import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';
import { Loading } from '@components/Loading';

import { THEME } from 'src/theme';

export default function App() {

    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    return (
        <NativeBaseProvider theme={THEME}>
            <StatusBar
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
            />
            {fontsLoaded ? <SignUp /> : <Loading />}
        </NativeBaseProvider>
    );
}