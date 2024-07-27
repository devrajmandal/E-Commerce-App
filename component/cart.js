import React, { useContext } from "react";
import { Image, Text, View, FlatList, StyleSheet } from "react-native";
import styles from "./style"; // Ensure this path is correct
import products from "./data"; // Ensure this path is correct
import { FavoriteContext } from "./contextapi"; // Ensure this path is correct

const Cart = ({ navigation }) => {
  // Access favorite item IDs from the context
  const { ids: favoriteItems } = useContext(FavoriteContext);

  // Debug: Log favorite items
  console.log("Favorite Item IDs: ", favoriteItems);

  // Filter products to show only favorite items
  const favoriteProducts = products.filter((product) =>
    favoriteItems.includes(product.id)
  );

  // Debug: Log favorite products
  console.log("Favorite Products: ", favoriteProducts);

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <View>
        <Image
          style={styles.productImage}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.productRating}>
          Rating: {item.rating.rate} ({item.rating.count})
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={favoriteProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.productList}
      ListEmptyComponent={() => (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      )}
    />
  );
};

export default Cart;
