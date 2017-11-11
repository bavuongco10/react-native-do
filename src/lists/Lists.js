// @flow
import autobind from "autobind-decorator";
import React, {Component} from "react";
import {StyleSheet, Image, View, Text} from "react-native";
import {H1, Button, Icon} from "native-base";
import {observable, action} from "mobx";
import { observer } from "mobx-react/native";

import {BaseContainer, Styles, Images} from "../components";

import variables from "../../native-base-theme/variables/commonColor";
import Small from "../components/Small";

export default class Lists extends Component {
    render(): React$Element<*> {
        return <BaseContainer title="Lists" navigation={this.props.navigation} scrollable>
            <Image source={Images.lists} style={Styles.header}>
                <View style={[Styles.center, Styles.flexGrow, style.mask]}>
                    <H1 style={{ color: "white" }}>Work</H1>
                    <Small>FREELANCE PROJECTS</Small>
                </View>
            </Image>
            <Item title="Design new icon" done />
            <Item title="Work on UI Kit" />
            <Item title='React article: "Designing for Mobile"' />
            <Item title="Revise wireframes" done />
            <Item title="Catch up with Mary" />
            <Item title="Design explorations for new project" />
        </BaseContainer>;
    }
}

@observer
class Item extends Component {

    props: {
        title: string,
        done?: boolean
    }

    @observable done: boolean;

    componentWillMount() {
        const {done} = this.props;
        this.done = !!done;
    }

    @autobind @action
    toggle() {
        this.done = !this.done;
    }

    render(): React$Element<*>  {
        const {title} = this.props;
        const btnStyle ={ backgroundColor: this.done ? variables.brandInfo : variables.lightGray };
        return <View style={Styles.listItem}>
            <Button transparent
                    onPress={this.toggle}
                    style={StyleSheet.flatten([Styles.center, style.button, btnStyle])}>
                {this.done ? <Icon name="md-checkmark" style={{ color: "white" }} /> : undefined}
            </Button>
            <View style={[Styles.center, style.title]}>
                <Text style={{ color: this.done ? variables.gray : variables.black }}>{title}</Text>
            </View>
        </View>;
    }
}

const style = StyleSheet.create({
    mask: {
        backgroundColor: "rgba(0, 0, 0, .5)"
    },
    button: {
        height: 75, width: 75, borderRadius: 0
    },
    title: {
        paddingLeft: variables.contentPadding
    }
});