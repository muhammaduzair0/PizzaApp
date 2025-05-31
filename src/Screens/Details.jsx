import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

const Details = ({route, navigation}) => {
  const {item} = route.params;

  const renderIngredientsItem = ({item}) => {
    return (
      <View
        style={[
          styles.ingredientsItemWrapper,
          {
            marginLeft: item.id === 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.ingredientsItem} />
      </View>
    );
  };
  return (
    //Header
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={10}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesText}>{item.title}</Text>
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>

      {/* Pizza Info */}
      <View style={styles.detailWrapper}>
        <View style={styles.detailCardLeft}>
          <View style={styles.infoTextWrapper}>
            <Text style={styles.detailSubText}>Size</Text>
            <Text style={styles.detailText}>
              {item.sizeName} {item.sizeNumber}
            </Text>
          </View>
          <View style={styles.infoTextWrapper}>
            <Text style={styles.detailSubText}>Crust</Text>
            <Text style={styles.detailText}>{item.crust}</Text>
          </View>
          <View style={styles.infoTextWrapper}>
            <Text style={styles.detailSubText}>Delivery In</Text>
            <Text style={styles.detailText}>{item.deliveryTime}</Text>
          </View>
        </View>
        <View>
          <Image style={styles.detailCardImage} source={item.image} />
        </View>
      </View>
      {/* Ingredients */}
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.ingredientsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* Place an Order */}
      <TouchableOpacity onPress={() => alert('Your order has been placed')}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Place an order</Text>
          <Feather name="chevron-right" size={18} color={colors.black} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
