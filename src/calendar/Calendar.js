// @flow
import autobind from "autobind-decorator";
import moment from "moment";
import React, {Component} from "react";
import {ScrollView} from "react-native";
import {Container, Footer, FooterTab, Button, Icon, Picker} from "native-base";
import {observable, action} from "mobx";
import { observer } from "mobx-react/native";

import Month, {Date} from "./Month";

import {BaseContainer, Task} from "../components";

const now = moment();

@observer
export default class Calendar extends Component {

    @observable selectedMonth: number;
    @observable selectedDate: Date;

    constructor() {
        super();
        const month = now.month();
        const day = now.date();
        this.selectedMonth = month;
        this.selectedDate = { month, day };
    }

    @autobind @action
    onChangeMonth (month: number) {
        this.selectedMonth = month;
    }

    @autobind @action
    onChangeDate (date: Date) {
        this.selectedDate = date;
    }

    render(): React$Element<*> {
        const {navigation} = this.props;
        const title = <Picker
            style={{width: 150}}
            selectedValue={this.selectedMonth}
            onValueChange={this.onChangeMonth}
            iosHeader="Select Month"
            iosIcon={<Icon name="ios-arrow-down-outline" />}>
        {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                .map(val => <Picker.Item key={val} value={val} label={moment().month(val).format("MMMM")}/>)
        }
        </Picker>;
        return <BaseContainer {...{ navigation, title }}>
            <Container style={{ backgroundColor: "white" }}>
                <Month month={this.selectedMonth} date={this.selectedDate} onPress={this.onChangeDate} />
                <ScrollView>
                    <Task
                        date="2015-05-08 09:30"
                        title="New Icons"
                        subtitle="Mobile App"
                        completed={true}
                    />
                    <Task
                        date="2015-05-08 11:00"
                        title="Design Stand Up"
                        subtitle="Hangouts"
                        collaborators={[1, 2, 3]}
                        completed={false}
                    />
                </ScrollView>
            </Container>
            <Footer>
                <FooterTab>
                    <Button full>
                        <Icon name="ios-checkmark-circle-outline" />
                    </Button>
                    <Button full>
                        <Icon name="ios-contacts-outline" />
                    </Button>
                    <Button full>
                        <Icon name="ios-time-outline" />
                    </Button>
                    <Button full>
                        <Icon name="ios-alert-outline" />
                    </Button>
                </FooterTab>
            </Footer>
        </BaseContainer>;
    }
}
