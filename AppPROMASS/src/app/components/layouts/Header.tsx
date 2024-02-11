import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "../buttons/IconButton";
import { LabelText } from "../text/LabelText";
import { Fonts } from "../../styles/Fonts";
import { Colors } from "../../styles/Colors";
import responsiveDimensions from "../../styles/ResponsiveDimensions";
import { ShowCmp } from "../cmp/ShowCmp";
import { globalSty } from "../../styles/GlobalStyles";
import { StackNavigation } from "../../../routes/StackNavigator";


interface Props {
    title?: string;
    goBack?: boolean;
    settings?: boolean;
}

export const Header = ({
    title,
    goBack,
    settings,
}: Props) => {
    // Hooks
    const navigation = useNavigation<StackNavigation>();
    // Methods
    const onSettingsPress = () => navigation.navigate("Settings");

    // Component
    return (
        <View style={[sty.container]}>
            <View style={sty.icons}>
                <ShowCmp value={goBack}>
                    <IconButton
                        icon='arrow-left'
                        style={{ icon: sty.icon }}
                        onPress={() => navigation.goBack()}
                    />
                </ShowCmp>
                <View style={globalSty.flex} />
                <ShowCmp value={settings}>
                    <IconButton
                        icon="cog"
                        style={{ icon: sty.icon }}
                        onPress={onSettingsPress}
                    />
                </ShowCmp>
            </View>
            <View style={sty.titleContent}>
                <LabelText
                    value={title}
                    size={Fonts.verybig}
                    style={sty.title}
                />
            </View>
        </View>
    );
}

const sty = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        padding: 10,
        height: responsiveDimensions.height * .15,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    titleContent: {
        flexGrow: 1,
        flexBasis: 0,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        padding: 4,
        fontSize: Fonts.normal,
        color: Colors.text
    },
});

