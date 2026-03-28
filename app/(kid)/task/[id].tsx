import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { colors, typography, spacing } from '@/tokens';

export default function TaskDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.surface.ground, padding: spacing.lg }}>
      <Text style={typography.h1}>Task Detail</Text>
      <Text style={typography.bodyRegular}>{id}</Text>
    </View>
  );
}
