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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
  },
  headerRight: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 12,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  titlesText: {
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
    color: colors.textDark,
    width: '50%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    fontSize: 32,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 600,
    color: colors.price,
  },
  detailWrapper: {
    flexDirection: 'row',
    marginTop: 30,
  },
  detailCardLeft: {
    paddingHorizontal: 20,
  },
  infoTextWrapper: {
    marginBottom: 20,
  },
  detailSubText: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: 'Montserrat-Medium',
    fontWeight: 500,
  },
  detailText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    color: colors.textDark,
  },
  detailCardImage: {
    resizeMode: 'contain',
    marginLeft: 30,
  },
  ingredientsWrapper: {
    marginTop: 60,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
    shadowColor: colors.black,
  },
  ingredientsItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientsItem: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    borderRadius: 50,
  },
  orderText: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    color: colors.black,
    marginRight: 10,
  },
});

export default Details;
