import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Plus } from 'lucide-react-native';
import { STORIES, Story } from '@/data/mock';
import { Colors } from '@/constants/Colors';

export default function Stories() {
  const currentUserStory = {
    user: {
      id: 'currentUser',
      username: 'Seu story',
      avatar: 'https://i.pravatar.cc/150?u=currentUser',
    },
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Current User Story */}
        <View style={styles.storyContainer}>
          <TouchableOpacity style={styles.story}>
            <Image source={{ uri: currentUserStory.user.avatar }} style={styles.storyImage} />
            <View style={styles.plusIconContainer}>
              <Plus color="#fff" size={16} />
            </View>
          </TouchableOpacity>
          <Text style={styles.storyUsername}>{currentUserStory.user.username}</Text>
        </View>

        {/* Other Stories */}
        {STORIES.map((story: Story) => (
          <View key={story.id} style={styles.storyContainer}>
            <LinearGradient colors={Colors.storyBorder} style={styles.storyBorder}>
              <Image source={{ uri: story.user.avatar }} style={styles.storyImage} />
            </LinearGradient>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.storyUsername}>
              {story.user.username}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingLeft: 10,
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 15,
    width: 70,
  },
  story: {
    width: 68,
    height: 68,
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyBorder: {
    width: 68,
    height: 68,
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: Colors.background,
  },
  storyUsername: {
    fontSize: 12,
    color: Colors.text,
    marginTop: 5,
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.background,
  },
});
