import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../modules/home/HomeScreen";
import { SettingsScreen } from "../modules/settings/SettingsScreen";
import { CreateEntradaScreen } from "../modules/create-entrada/CreateEntradaScreen";
import { BlogScreen } from "../modules/blog/BlogScreen";
import { NavigationProp } from "@react-navigation/native";

export type ScreenNames = ["Home", "Blog", "CreateEntrada", "Settings"];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Blog" component={BlogScreen} />
            <Stack.Screen name="CreateEntrada" component={CreateEntradaScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}