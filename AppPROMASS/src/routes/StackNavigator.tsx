import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../modules/login/LoginScreen";
import { SettingsScreen } from "../modules/settings/SettingsScreen";
import { CreateEntradaScreen } from "../modules/create-entrada/CreateEntradaScreen";
import { BlogScreen } from "../modules/blog/home/BlogScreen";
import { HomeScreen } from "../modules/home/HomeScreen";
import { DetailsScreen } from "../modules/blog/details/DetailsScreen";
import { Entradas } from "../api/entradas/interface/Entradas.interfaces";
import { StackNavigationProp } from "@react-navigation/stack";

export type StackNavigation = StackNavigationProp<StackParamList>;

const Stack = createNativeStackNavigator<StackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Blog" component={BlogScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="CreateEntrada" component={CreateEntradaScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

export type StackParamList = {
    Home: undefined,
    Login: undefined,
    Blog: undefined,
    Details: {item:Entradas},
    CreateEntrada: undefined,
    Settings: undefined
};