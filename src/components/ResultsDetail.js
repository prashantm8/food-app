import React, { useState, useEffect, useReducer } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>
        {result.rating}, {result.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginLeft: 15 },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5
  },
  rating: {
    color: "grey"
  }
});

export default ResultsDetail;
