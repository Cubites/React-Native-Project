import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Posts = [
  {
    id: '1',
    admin: 'user1',
    userImg: require('../assets/logo.png'),
    postTime: '5분 전',
    post: '모집합니다',
    pdate: '2022.12.10 10시 ~ 4시',
    liked: 6,
    likes: 3,
    member: 'user1, user2, user3'
  }
]

const HomeScreen = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  const fetchPosts = async () => {
    try{
      const list = [];
      await firestore()
        .collection('posts')
        .orderBy('postTime', 'desc')
        .get()
        .then((querySnapshot) => {
          consoel
        })
    }catch(e){

    }
  }
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})