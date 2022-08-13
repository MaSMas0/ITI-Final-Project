import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import AboutScreen from './AboutScreen';
import ContactUs from './ContactUs';
const popupList = [
  {id: 0, name: 'Task'},
  {id: 1, name: 'Message'},
  {id: 2, name: 'Note'},
  {id: 3, name: 'Share'},
];
export default class SettingProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      isShow2: false,
    };
  }

  close = () => {
    this.setState({
      isShow: false,
      isShow2: false,
    });
  };

  render() {
    const {isShow} = this.state;
    const {isShow2} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          style={{
            margin: 10,
            width: 200,
            height: 60,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.setState({
              isShow: !this.state.isShow,
            });
          }}>
          <Text style={{color: 'white'}}> About </Text>
        </TouchableOpacity>
        <AboutScreen
          show={isShow}
          title={'About Team'}
          animationType={'fade'}
          closePopup={this.close}
          data={popupList}
          haveOutsideTouch={true}
        />
        <TouchableOpacity
          style={{
            margin: 10,
            width: 200,
            height: 60,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.setState({
              isShow2: !this.state.isShow,
            });
          }}>
          <Text style={{color: 'white'}}> ContactUs </Text>
        </TouchableOpacity>
        <ContactUs
          show={isShow2}
          title={'About Team'}
          animationType={'fade'}
          closePopup={this.close}
          data={popupList}
          haveOutsideTouch={true}
        />
      </SafeAreaView>
    );
  }
}
