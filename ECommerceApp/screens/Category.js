import React from 'react';
import {StyleSheet, View,Text} from 'react-native';

function Category(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          Category
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Category;