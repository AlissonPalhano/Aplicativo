import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from '@/components/Header';
import Stories from '@/components/Stories';
import Post from '@/components/Post';
import { POSTS } from '@/data/mock';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={POSTS}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={Stories}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
