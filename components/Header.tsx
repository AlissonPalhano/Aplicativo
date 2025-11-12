import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { PlusSquare, Heart, Send } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';

export default function Header() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.actions}>
          <PlusSquare color={Colors.text} size={26} strokeWidth={1.5}/>
          <Heart color={Colors.text} size={26} style={styles.icon} strokeWidth={1.5}/>
          <Send color={Colors.text} size={26} style={styles.icon} strokeWidth={1.5}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.background,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingTop: Platform.OS === 'android' ? 40 : 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold', // Using bold text as a stand-in for the logo font
    fontFamily: 'System', // A generic font
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
});
