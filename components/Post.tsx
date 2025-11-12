import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react-native';
import { Post as PostType } from '@/data/mock';
import { Colors } from '@/constants/Colors';

const { width } = Dimensions.get('window');

type PostProps = {
  post: PostType;
};

export default function Post({ post }: PostProps) {
  return (
    <View style={styles.container}>
      {/* Post Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
          <Text style={styles.username}>{post.user.username}</Text>
        </View>
        <MoreHorizontal color={Colors.text} size={24} />
      </View>

      {/* Post Image */}
      <Image source={{ uri: post.image }} style={styles.postImage} />

      {/* Post Actions */}
      <View style={styles.actionsContainer}>
        <View style={styles.leftActions}>
          <Heart color={Colors.text} size={28} style={styles.actionIcon} strokeWidth={1.5}/>
          <MessageCircle color={Colors.text} size={28} style={styles.actionIcon} strokeWidth={1.5}/>
          <Send color={Colors.text} size={28} style={styles.actionIcon} strokeWidth={1.5}/>
        </View>
        <Bookmark color={Colors.text} size={28} strokeWidth={1.5}/>
      </View>

      {/* Post Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.likes}>
          Curtido por <Text style={styles.bold}>{post.firstLiker.username}</Text> e{' '}
          <Text style={styles.bold}>{post.likes.toLocaleString('pt-BR')} outros</Text>
        </Text>
        <Text style={styles.caption}>
          <Text style={styles.bold}>{post.user.username}</Text> {post.caption}
        </Text>
        {post.commentsCount > 0 && (
          <Text style={styles.comments}>
            Ver todos os {post.commentsCount} comentários
          </Text>
        )}
        <Text style={styles.timestamp}>{post.createdAt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  username: {
    fontWeight: '600',
    color: Colors.text,
  },
  postImage: {
    width: width,
    height: width, // Square aspect ratio
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: 'row',
  },
  actionIcon: {
    marginRight: 15,
  },
  infoContainer: {
    paddingHorizontal: 15,
  },
  likes: {
    color: Colors.text,
    marginBottom: 5,
  },
  caption: {
    color: Colors.text,
    marginBottom: 5,
    lineHeight: 18,
  },
  comments: {
    color: Colors.textSecondary,
    marginBottom: 5,
  },
  timestamp: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});
