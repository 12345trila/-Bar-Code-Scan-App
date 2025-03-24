import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/singin.png')} style={styles.backgroundImage} />
      <Text style={styles.title}>Get your groceries with nectar</Text>
      
      <View style={styles.phoneInputContainer}>
        <Image source={require("./assets/sdt.png")} style={styles.flag} />
        <Text style={styles.countryCode}>+880</Text>
        <TextInput placeholder="Enter your phone number" style={styles.input} keyboardType="phone-pad" />
      </View>
      
      <Text style={styles.orText}>Or connect with social media</Text>
      
      <TouchableOpacity style={styles.button}>
        <LinearGradient colors={["#4285F4", "#34A853"]} style={styles.gradientButton}>
          <FontAwesome name="google" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </LinearGradient>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <LinearGradient colors={["#3b5998", "#8b9dc3"]} style={styles.gradientButton}>
          <FontAwesome name="facebook" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginBottom: 20,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  orText: {
    marginVertical: 10,
    color: "gray",
  },
  button: {
    width: "100%",
    marginVertical: 5,
  },
  gradientButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default LoginScreen;