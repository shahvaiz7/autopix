import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function BottomTab({ state, descriptors, navigation }) {
    const icon = {
        Shoot: (props) => <MaterialCommunityIcons name="camera-outline" size={20} {...props} />,
        Order: (props) => <MaterialCommunityIcons name="note-outline" size={20} {...props} />,
        Guide: (props) => <MaterialCommunityIcons name="folder-open-outline" size={20} {...props} />,
        Profile: (props) => <MaterialCommunityIcons name="account-outline" size={20} {...props} />

    }
    // const icon = {
    //     Shoot: function (props) {
    //         return (MaterialCommunityIcons, { name: "camera-outline", size: 26, ...props });
    //     },
    //     Order: function (props) {
    //         return (MaterialCommunityIcons, { name: "note-outline", size: 26, ...props });
    //     },
    //     Guide: function (props) {
    //         return (MaterialCommunityIcons, { name: "folder-open-outline", size: 26, ...props });
    //     },
    //     profile: function (props) {
    //         return (MaterialCommunityIcons, { name: "account-outline", size: 26, ...props });
    //     }
    // };
    return (
        <View>
            <ImageBackground source={require("../assets/bottomtab.png")} style={styles.tabbar} imageStyle={{ resizeMode: 'stretch', marginTop: -30 }} >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={route.name}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabbarItem}
                        >
                            {
                                icon[route.name]({
                                    color: isFocused ? '#FF4A22' : '#ffffff'
                                })
                            }
                            {/* <MaterialCommunityIcons name="camera-outline" size={18} color={isFocused ? '#FF4A22' : '#ffffff'} /> */}
                            <Text style={{
                                color: isFocused ? '#FF4A22' : '#ffffff', fontSize: 12,
                                fontFamily: 'DMSans_400Regular',
                            }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    tabbar: {

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000000',
        paddingBottom: 15,






    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',



    }
})