import { Tabs } from "expo-router/tabs";

import {
  DumbbellIcon,
  HomeIcon,
  LayoutListIcon,
  LineChartIcon,
} from "../../components/icons";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />
      <Tabs.Screen
        name="workout-logs"
        options={{
          tabBarIcon: ({ focused }) => (
            <DumbbellIcon strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />
      <Tabs.Screen
        name="workout-split"
        options={{
          tabBarIcon: ({ focused }) => (
            <LayoutListIcon strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          tabBarIcon: ({ focused }) => (
            <LineChartIcon strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />
    </Tabs>
  );
}
