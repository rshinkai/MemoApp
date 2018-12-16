import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetail')}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>Memo</Text>
            <Text style={styles.memoDate}>Date</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetail')}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>Memo</Text>
            <Text style={styles.memoDate}>Date</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetail')}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>Memo</Text>
            <Text style={styles.memoDate}>Date</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetail')}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>Memo</Text>
            <Text style={styles.memoDate}>Date</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FFF',
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
