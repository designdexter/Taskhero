import { Tabs } from 'expo-router';
import { colors } from '@/tokens';

export default function KidLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary.default,
        tabBarInactiveTintColor: colors.icon.muted,
        tabBarStyle: {
          backgroundColor: colors.surface.card,
          borderTopColor: colors.border.subtle,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="rewards" options={{ title: 'Rewards' }} />
    </Tabs>
  );
}
