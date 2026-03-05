import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

// <div></div> = View en React Native
// <p></p> = Text
// <ul></ul> et <ol></ol> = FlatList

export default function Home() {
  const [userName, setUserName] = useState(""); // useX = hook = suivre variable = màj DOM = rerender de la partie concernée
  const [userIndex, setUserIndex] = useState(1);

  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + userIndex.toString(),
      );
      const data = await response.json();
      setUserName(data.name);
    } catch (error) {
      console.error("Erreur:", error);
    }
  }

  useEffect(() => {
    getData();
  }, [userIndex]);
  // dès qu'une variable en dépendance de l'effet change, effet se relance
  // si []], le useEffect() s'active seulement au chargement du composant
  // si ,pas de crochet, se refresh en boucle, à ne pas faire !!

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text>{userName}</Text>
      <TextInput
        value={userIndex.toString()}
        onChangeText={(text) => {
          setUserIndex(parseInt(text));
          getData();
        }}
        placeholder="User index"
        style={{ borderWidth: 1, padding: 12, borderRadius: 10 }}
        autoCapitalize="none"
      />
    </View>
  );

  // const [groceries, setGroceries] = useState([
  //   {
  //     name: "Tomatoes",
  //     quantity: 3,
  //   },
  //   {
  //     name: "Flour",
  //     quantity: 1,
  //   },
  //   {
  //     name: "Baking powder",
  //     quantity: 1,
  //   },
  //   {
  //     name: "Eggs",
  //     quantity: 3,
  //   },
  //   {
  //     name: "Can of Olives",
  //     quantity: 1,
  //   },
  //   {
  //     name: "Olive oil",
  //     quantity: 1,
  //   },
  // ]);

  // const [newGroceryItem, setGroceryItem] = useState({ name: "", quantity: 0 });

  // function deleteGroceryItem(index: number) {
  //   setGroceries((groceryItem) =>
  //     groceryItem.filter((element, elementIndex) => elementIndex !== index),
  //   );
  // }

  // function addGroceryItem() {
  //   setGroceries([
  //     ...groceries,
  //     {
  //       name: newGroceryItem.name,
  //       quantity: newGroceryItem.quantity,
  //     },
  //   ]);
  // }

  // return (
  //   <View style={{ flex: 1, padding: 16, gap: 12 }}>
  //     <Text style={{ fontSize: 18, fontWeight: "600" }}>Groceries List</Text>

  //     {groceries.map((grocery, index) => (
  //       <View
  //         key={index}
  //         style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
  //       >
  //         <Text>
  //           {grocery.name}: x{grocery.quantity}
  //         </Text>

  //         <Button title="Delete" onPress={() => deleteGroceryItem(index)} />
  //       </View>
  //     ))}

  //     <Text style={{ fontSize: 14, fontWeight: "600" }}>
  //       Add a Grocery Item
  //     </Text>
  //     <TextInput
  //       value={newGroceryItem.name}
  //       onChangeText={(text) =>
  //         setGroceryItem({ ...newGroceryItem, name: text })
  //       }
  //       placeholder="Name of the grocery item"
  //       style={{ borderWidth: 1, padding: 12, borderRadius: 10 }}
  //       autoCapitalize="none"
  //     />
  //     <TextInput
  //       value={newGroceryItem.quantity.toString()}
  //       onChangeText={(text) =>
  //         setGroceryItem({ ...newGroceryItem, quantity: parseInt(text, 10) })
  //       }
  //       placeholder="Quantity of the grocery item"
  //       style={{ borderWidth: 1, padding: 12, borderRadius: 10 }}
  //       autoCapitalize="none"
  //     />
  //     <Button title="Add grocery item" onPress={() => addGroceryItem()} />
  //   </View>
  // );

  //     {variable && <Text>Test</Text>} {/* <condition> && <affichage> */}
  //     {variable ? <Text>Vrai</Text> : <Text>Faux</Text>} {/* Ternaire */}
  //     {users.map((user) => {
  //       {
  //         /* Boucle avec map */
  //       }
}
