/* @flow */

import React, {PropTypes, Component } from 'react'

import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'


export default class TouchableButton extends Component {

  static propTypes = {
    pressFn: PropTypes.func,
    normalBg: PropTypes.string.isRequired,
    pressBg: PropTypes.string
  };

  constructor() {
    super()
    this.state = {
      isButtonPressing: false
    }
  }


  render() {
    let isPressing = this.state.isButtonPressing
    let settingBg = isPressing ? this.props.pressBg : this.props.normalBg
    return (
      <TouchableWithoutFeedback
        style={{
          width: 44,
          height: 48,
          backgroundColor: 'transparent'
        }}
        onPress={this.props.pressFn}
        onPressIn = {() => this.onTouchDown()}
        onPressOut = {() => this.onTouchUp()}>
        <Image
          style={{
            width: 44,
            height: 48
          }}
          source={{uri: settingBg}}/>
      </TouchableWithoutFeedback>
    )
  }

  onTouchDown() {
    this.setState({
      isButtonPressing: true
    })

  }

  onTouchUp() {
    this.setState({
      isButtonPressing: false
    })
  }
}