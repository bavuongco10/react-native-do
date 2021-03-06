// @flow
import autobind from "autobind-decorator";
import React, {Component} from "react";
import {View, Text} from "react-native";
import {Container, Header, Body, Left, Right, Title, Button} from "native-base";
import CarouselCard from "react-native-card-carousel";
import type { NavigationScreenProp } from "react-navigation/src/TypeDefinition";

import IntroCard from "./IntroCard";

import {Styles, NavigationHelpers} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

type Card = { color: string, label: string};
type Cards = Card[];

export default class Walkthrough extends Component {

    props: {
        navigation: NavigationScreenProp<*, *>
    }

    cards: Cards = [
        {
            color: variables.brandPrimary,
            label: "Share with coworkers, friends, and family"
        },
        {
            color: variables.brandSecondary,
            label: "Manage your tasks efficiently and quickly"
        },
        {
            color: variables.brandInfo,
            label: "Group by topics that matter to you"
        }
    ];

    @autobind
    home() {
        NavigationHelpers.reset(this.props.navigation, "Main");
    }

    render(): React$Element<*> {
        return <Container>
            <Header noShadow>
                <Left />
                <Body>
                    <Title>Walkthrough</Title>
                </Body>
                <Right />
            </Header>
            <View style={[Styles.bg, Styles.center, Styles.flexGrow]}>
                <CarouselCard
                    data={this.cards}
                    onPress={() => true}
                    contentRender = {(card: Card) => <IntroCard color={card.color} label={card.label} />}
                />
                <View style={[{marginTop: variables.contentPadding}, Styles.center]}>
                    <Button onPress={this.home} light>
                        <Text>Got it</Text>
                    </Button>
                </View>
            </View>
        </Container>;
    }
}