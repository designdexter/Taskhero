import { View, Text } from 'react-native';
import { colors, typography, spacing } from '@/tokens';

export default function TasksScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.surface.ground, padding: spacing.lg }}>
      <Text style={typography.h1}>Tasks</Text>
    </View>
  );
}
