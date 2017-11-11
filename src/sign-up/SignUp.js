// @flow
import autobind from "autobind-decorator";
import React, {Component} from "react";
import {View, Image, StyleSheet, KeyboardAvoidingView, ScrollView} from "react-native";
import {Container, Button, Header, Left, Right, Body, Icon, Title} from "native-base";
import type { NavigationScreenProp } from "react-navigation/src/TypeDefinition";

import {Styles, Images, Field, NavigationHelpers} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export default class SignUp extends Component {

    props: {
        navigation: NavigationScreenProp<*, *>
    }

    @autobind
    back() {
        this.props.navigation.goBack();
    }

    @autobind
    signIn() {
        NavigationHelpers.reset(this.props.navigation, "Walkthrough");
    }

    render(): React$Element<*> {
        return <Container>
            <Header noShadow>
                <Left>
                    <Button onPress={this.back} transparent>
                        <Icon name='close' />
                    </Button>
                </Left>
                <Body>
                    <Title>Sign Up</Title>
                </Body>
                <Right />
            </Header>
            <ScrollView style={{ backgroundColor: "white", flex: 1 }} >
                <KeyboardAvoidingView behavior="position">
                    <Image source={Images.signUp} style={Styles.header}>
                        <Container style={StyleSheet.flatten([Styles.imgMask, Styles.center])}>
                            <View style={style.circle}>
                                <Icon name="ios-add-outline" style={{fontSize: 75, color: variables.brandInfo }} />
                            </View>
                        </Container>
                    </Image>
                    <Field label="Name" />
                    <Field label="Username" />
                    <Field label="Password" secureTextEntry />
                    <Field label="Birthday" last />
                </KeyboardAvoidingView>
            </ScrollView>
            <Button primary full onPress={this.signIn} style={{ height: variables.footerHeight }}>
                <Icon name="md-checkmark" />
            </Button>
        </Container>;
    }
}

const style = StyleSheet.create({
    circle: {
        backgroundColor: "white",
        height: 125,
        width: 125,
        borderRadius: 62.5,
        justifyContent: "center",
        alignItems: "center"
    }
});