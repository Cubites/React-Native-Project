import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';

const data = [
  {
    id: '123',
    thumbnail: require('./assets/images/001.jpg'),
    title: '리액트네이티브 타이틀1',
    author: 'user',
  },
  {
    id: '1234',
    thumbnail: require('./assets/images/002.jpg'),
    title: '리액트네이티브 타이틀2',
    author: 'user',
  },
  {
    id: '1235',
    thumbnail: require('./assets/images/003.jpg'),
    title: '리액트네이티브 타이틀3',
    author: 'user',
  }
];

const width = Dimensions.get('window').width - 20;
let currentSlideIndex = 0;
let intervalId;

export const App = () => {
  const [DataToRender, setDataToRender] = useState([]);
  const [VisibleSlideIndex, setVisibleSlideIndex] = useState(0);
  const [ActiveSlideIndex, setActiveSlideIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    currentSlideIndex = viewableItems[0]?.index || 0;
    console.log(currentSlideIndex);
    setVisibleSlideIndex(currentSlideIndex);
  });

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold : 50
  });

  const flatList = useRef();

  const handleScrollTo = (index) => {
    flatList.current.scrollToIndex({ animated: false, index });
  }

  const pauseSlider = () => {
    clearInterval(intervalId);
  }

  useEffect(() => {
    if(DataToRender.length && flatList.current){
      startSlider();
    }
  }, [DataToRender.length]);

  useEffect(() => {
    const newData = [[...data].pop(), ...data, [...data].shift()];
    setDataToRender([...newData]);
  },[data.length]);

  useEffect(() => {
    const length = DataToRender.length;
    // 첫번째 페이지 리셋
    if(VisibleSlideIndex === length - 1 && length){
      handleScrollTo(1);
    }

    // 마지막 페이지 리셋
    if(VisibleSlideIndex === 0 && length){
      handleScrollTo(length - 2);
    }

    const lastSlide = currentSlideIndex === length - 1;
    const firstSlide = currentSlideIndex === 0;

    if(lastSlide && length) setActiveSlideIndex(0)
    else if(firstSlide && length) setActiveSlideIndex(length - 2);
    else setActiveSlideIndex(currentSlideIndex);
  }, [VisibleSlideIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.viewButton}>
        <Text style={styles.text}>Feature Posts</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {
            data.map(item => {
              return  <View 
                key={item.id} 
                style={[styles.buttonCircle, {backgroundColor: ActiveSlideIndex === index ? '#383838' : 'transparent'}]} />
            })
          }
        </View>
      </View>
      <FlatList
        ref={flatList}
        data={DataToRender}
        keyExtractor={(item, index) => item.id + index}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={1}
        getItemLayout={(_, index) => (
          {
            length: width,
            offset: width * index,
            index
          }
        )}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        renderItem={({ item }) => {
          return (
          <View>
              <Image 
                source={item.thumbnail}
                style={styles.image}
              />
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width,
    paddingTop: 50
  },
  image: {
    width: width,
    height: width / 1.6,
    borderRadius: 7,
    resizeMode: 'cover'
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: '700',
    color: '#333',
    fontSize: 22,
    paddingVertical: 5
  },
  buttonCircle: {
    width: 12,
    height: 12, 
    borderRadius: 6,
    borderWidth: 2,
    marginLeft: 4,
  }
});