import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Home() {
  const users = ["Ciel", "Caro", "Tsu"];

  const variable = true;

  const [nom, setNom] = useState("");

  const [selected, setSelected] = useState("");

  {
    /* Hook qui renvoie [getter, setter] */
  }

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      {variable && <Text>Test</Text>} {/* <condition> && <affichage> */}
      {variable ? <Text>Vrai</Text> : <Text>Faux</Text>} {/* Ternaire */}
      {users.map((user) => {
        {
          /* Boucle avec map */
        }
        return <Text key={user}>{user}</Text>;
      })}
      <View style={{ height: 1, borderWidth: 1 }} />
      <Text style={{ fontSize: 18, fontWeight: "600" }}>
        Saisie + bouton Valider
      </Text>
      <Text>Valeur validée : {nom || "(vide)"}</Text>
      <TextInput
        value={nom}
        onChangeText={setNom}
        placeholder="Taper un nom "
        style={{ borderWidth: 1, padding: 12, borderRadius: 10 }}
        autoCapitalize="none"
      />
      <Button title="Sélectionner" onPress={() => setSelected(nom)} />
      <Text>{selected + " a été sélectionné"}</Text>
    </View>
  );
}
