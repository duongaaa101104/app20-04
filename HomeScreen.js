import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo & Location */}
      <View style={styles.topHeader}>
        <Image
          source={require("./assets/Group.png")}
          style={styles.carrotLogo}
        />
        <View style={styles.locationWrap}>
          <Text style={styles.emoji}>📍</Text>
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Text style={styles.emoji}>🔍</Text>
        <TextInput placeholder="Search Store" style={styles.searchInput} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <Image source={require("./assets/banner.png")} style={styles.banner} />

        {/* Sections */}
        <Section title="Exclusive Offer">
          <ProductCard
            name="Organic Bananas"
            quantity="7pcs, Priceg"
            price="$4.99"
            image={require("./assets/banana.png")}
          />
          <ProductCard
            name="Red Apple"
            quantity="1kg, Priceg"
            price="$4.99"
            image={require("./assets/apple.png")}
          />
        </Section>

        <Section title="Best Selling">
          <ProductCard
            name="Red Apple"
            quantity="1kg, Priceg"
            price="$4.99"
            image={require("./assets/apple.png")}
          />
          <ProductCard
            name="Organic Bananas"
            quantity="7pcs, Priceg"
            price="$4.99"
            image={require("./assets/banana.png")}
          />
        </Section>

        <Section title="Groceries">
          <View style={{ height: 140 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categories}
              contentContainerStyle={{ paddingVertical: 10 }}
            >
              <CategoryCard
                name="Pulses"
                image={require("./assets/pulses.png")}
              />
              <CategoryCard
                name="Rice"
                image={require("./assets/rice.png")}
              />
            </ScrollView>
          </View>

          <View style={styles.products}>
            <ProductCard
              name="Beef Bone"
              quantity="1kg, Priceg"
              price="$4.99"
              image={require("./assets/beef.png")}
            />
            <ProductCard
              name="Broiler Chicken"
              quantity="1kg, Priceg"
              price="$4.99"
              image={require("./assets/chicken.png")}
            />
          </View>
        </Section>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <BottomNavItem
          icon="🏬"
          label="Shop"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <BottomNavItem
          icon="🔍"
          label="Explore"
          onPress={() => navigation.navigate("SearchScreen")}
        />
        <BottomNavItem
          icon="🛒"
          label="Cart"
          onPress={() => console.log("Go to Cart")}
        />
        <BottomNavItem
          icon="❤️"
          label="Favourite"
          onPress={() => console.log("Go to Favourite")}
        />
        <BottomNavItem
          icon="👤"
          label="Account"
          onPress={() => console.log("Go to Account")}
        />
      </View>
    </View>
  );
}

// Components
function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.products}>{children}</View>
    </View>
  );
}

function ProductCard({ name, quantity, price, image }) {
  return (
    <View style={styles.productCard}>
      <Image source={image} style={styles.productImage} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productQuantity}>{quantity}</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>{price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={{ color: "white" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CategoryCard({ name, image }) {
  return (
    <View style={styles.categoryCard}>
      <Image source={image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{name}</Text>
    </View>
  );
}

function BottomNavItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Text>{icon}</Text>
      <Text style={styles.navLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  topHeader: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 12,
  },
  carrotLogo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  locationWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  locationText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4B5563",
  },
  emoji: {
    fontSize: 16,
    marginRight: 4,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E5E7EB",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  banner: {
    width: "100%",
    height: 128,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 16,
  },
  section: {
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
  },
  seeAll: {
    fontSize: 14,
    color: "#10B981",
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
  },
  productCard: {
    width: "48%",
    height: 220,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  productImage: {
    height: 64,
    resizeMode: "contain",
    marginBottom: 8,
  },
  productName: {
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
  },
  productQuantity: {
    fontSize: 12,
    color: "#6B7280",
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "600",
  },
  addButton: {
    backgroundColor: "#10B981",
    borderRadius: 14,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  categories: {
    flexDirection: "row",
    marginBottom: 16,
    paddingVertical: 8,
  },
  categoryCard: {
    width: 96,
    height: 120,
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    padding: 10,
  },
  categoryImage: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
  categoryName: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "white",
  },
  navItem: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#6B7280",
  },
});
