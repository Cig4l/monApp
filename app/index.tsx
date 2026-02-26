import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Home() {
  // const users = ["Ciel", "Caro", "Tsu"];
  const [groceries, setGroceries] = useState([
    {
      name: "Tomatoes",
      quantity: 3,
    },
    {
      name: "Flour",
      quantity: 1,
    },
    {
      name: "Baking powder",
      quantity: 1,
    },
    {
      name: "Eggs",
      quantity: 3,
    },
    {
      name: "Can of Olives",
      quantity: 1,
    },
    {
      name: "Olive oil",
      quantity: 1,
    },
  ]);

  const [newGroceryItem, setGroceryItem] = useState({ name: "", quantity: 0 });

  function deleteGroceryItem(index: number) {
    setGroceries((groceryItem) =>
      groceryItem.filter((element, elementIndex) => elementIndex !== index),
    );
  }

  function addGroceryItem() {
    setGroceries([
      ...groceries,
      {
        name: newGroceryItem.name,
        quantity: newGroceryItem.quantity,
      },
    ]);
  }

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Groceries List</Text>

      {groceries.map((grocery, index) => (
        <View
          key={index}
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
        >
          <Text>
            {grocery.name}: x{grocery.quantity}
          </Text>

          <Button title="Delete" onPress={() => deleteGroceryItem(index)} />
        </View>
      ))}

      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Add a Grocery Item
      </Text>
      <TextInput
        value={newGroceryItem.name}
        onChangeText={(text) =>
          setGroceryItem({ ...newGroceryItem, name: text })
        }
        placeholder="Name of the grocery item"
        style={{ borderWidth: 1, padding: 12, borderRadius: 10 }}
        autoCapitalize="none"
      />
      <TextInput
        value={newGroceryItem.quantity.toString()}
        onChangeText={(text) =>
          setGroceryItem({ ...newGroceryItem, quantity: parseInt(text, 10) })
        }
        placeholder="Quantity of the grocery item"
        style={{ borderWidth: 1, padding: 12, borderRadius: 10 }}
        autoCapitalize="none"
      />
      <Button title="Add grocery item" onPress={() => addGroceryItem()} />
    </View>
  );

  // const variable = true;

  // const [nom, setNom] = useState("");

  // const [selected, setSelected] = useState("");

  // {
  //   /* Hook qui renvoie [getter, setter] */
  // }

  // return (
  //   <View style={{ flex: 1, padding: 16, gap: 12 }}>
  //     {variable && <Text>Test</Text>} {/* <condition> && <affichage> */}
  //     {variable ? <Text>Vrai</Text> : <Text>Faux</Text>} {/* Ternaire */}
  //     {users.map((user) => {
  //       {
  //         /* Boucle avec map */
  //       }
  //       return <Text key={user}>{user}</Text>;
  //     })}
  //     <View style={{ height: 1, borderWidth: 1 }} />
  //     <Text style={{ fontSize: 18, fontWeight: "600" }}>
  //       Saisie + bouton Valider
  //     </Text>
  //     <Text>Valeur validée : {nom || "(vide)"}</Text>
  //     <TextInput
  //       value={nom}
  //       onChangeText={setNom}
  //       placeholder="Taper un nom "
  //       style={{ borderWidth: 1, padding: 12, borderRadius: 10 }}
  //       autoCapitalize="none"
  //     />
  //     <Button title="Sélectionner" onPress={() => setSelected(nom)} />
  //     <Text>{selected + " a été sélectionné"}</Text>
  //   </View>
  // );
}
