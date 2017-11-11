// @flow
import autobind from "autobind-decorator";
import React from "react";
import {View, Image, StyleSheet, ScrollView, KeyboardAvoidingView} from "react-native";
import {H1, Container, Button, Text} from "native-base";
import type { NavigationScreenProp } from "react-navigation/src/TypeDefinition";

import Mark from "./Mark";

import {Small, Styles, Images, Field, NavigationHelpers, WindowDimensions} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export default class Login extends React.Component {

    props: {
        navigation: NavigationScreenProp<*, *>
    }

    @autobind
    signIn() {
        NavigationHelpers.reset(this.props.navigation, "Walkthrough");
    }

    @autobind
    signUp() {
        this.props.navigation.navigate("SignUp");
    }

    render(): React$Element<*> {
        return <Image source={Images.login} style={style.img}>
            <Container style={StyleSheet.flatten(Styles.imgMask)}>
                <ScrollView contentContainerStyle={style.content}>
                    <KeyboardAvoidingView behavior="position">
                        <View style={style.logo}>
                            <View>
                                <Mark />
                                <H1 style={StyleSheet.flatten(style.title)}>Get Started!</H1>
                            </View>
                        </View>
                        <View style={style.blur}>
                            <Field label="Username"
                                   autoCapitalize="none"
                                   returnKeyType="next"
                                   inverse
                            />
                            <Field label="Password"
                                   secureTextEntry
                                   autoCapitalize="none"
                                   returnKeyType="go"
                                   onSubmitEditing={this.signIn}
                                   last
                                   inverse
                            />
                            <View>
                                <View>
                                    <Button primary full onPress={this.signIn}>
                                        <Text>Sign In</Text>
                                    </Button>
                                </View>
                                <View>
                                    <Button transparent full onPress={this.signUp}>
                                        <Small style={{color: "white"}}>Don't have an account? Sign Up</Small>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </Container>
        </Image>;
    }
}

const style = StyleSheet.create({
    img: {
        resizeMode: "cover",
        ...WindowDimensions
    },
    content: {
        flex: 1,
        justifyContent: "flex-end"
    },
    logo: {
        alignSelf: "center",
        marginBottom: variables.contentPadding * 2
    },
    title: {
        marginTop: variables.contentPadding * 2,
        color: "white",
        textAlign: "center"
    },
    blur: {
        backgroundColor: "rgba(255, 255, 255, .2)"
    }
});
