import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Button, Text } from "../../components/ui";
import { supabase } from "../../lib/supabase";

const week = [
  { day: "17", name: "Tue" },
  { day: "18", name: "Wed" },
  { day: "19", name: "Thu" },
  { day: "20", name: "Fri" },
  { day: "21", name: "Sat" },
  { day: "22", name: "Sun" },
];

const exercises = [
  { name: "Incline Bench Press", muscle: "Chest", reps: "8-10", sets: 3 },
  { name: "Flat Bench Press", muscle: "Chest", reps: "8-10", sets: 3 },
  { name: "Seated DB Press", muscle: "Shoulder", reps: "8-10", sets: 4 },
  { name: "Skullcrusher", muscle: "Tricep", reps: "12-15", sets: 2 },
];

export default function Home() {
  const handleSignOut = () => {
    supabase.auth.signOut();
  };
  return (
    <SafeAreaView>
      <Button title="logout" onPress={handleSignOut} />
      <View style={{ padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 30,
                backgroundColor: "#E5E7EB",
              }}
            />
            <View>
              <Text>Good morning,</Text>
              <Text>Arjay! 🌄</Text>
            </View>
          </View>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 5,
              backgroundColor: "#E5E7EB",
            }}
          />
        </View>

        <View>
          <Text variant="header">Your week</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <View
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 14,
                  borderRadius: 40,
                  alignItems: "center",
                  backgroundColor: "#0F172A",
                }}
              >
                <Text style={{ color: "white" }}>16</Text>

                <Text style={{ color: "white" }}>Mon</Text>
              </View>
              {week.map((x) => (
                <View
                  key={x.name}
                  style={{
                    paddingVertical: 20,
                    paddingHorizontal: 14,
                    borderColor: "#E5E7EB",
                    borderWidth: 1,
                    borderRadius: 40,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#64748b" }}>{x.day}</Text>

                  <Text>{x.name}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        <Text variant="header">Today's workout</Text>

        <View style={{ gap: 20 }}>
          {exercises.map((x) => (
            <View
              key={x.name}
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 20, backgroundColor: "#E5E7EB" }} />

                <View>
                  <Text variant="muted">{x.name}</Text>

                  <Text>{x.muscle}</Text>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", gap: 20 }}>
                  <Text>{x.reps}</Text>
                  <Text>X</Text>
                  <Text>{x.sets}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <Text variant="header">Previous workouts</Text>
        <View style={{ gap: 14 }}>
          <View
            style={{
              height: 90,
              flexDirection: "row",
              backgroundColor: "#E5E7EB",
              borderRadius: 10,
            }}
          />
          <View
            style={{
              height: 90,
              flexDirection: "row",
              backgroundColor: "#E5E7EB",
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
