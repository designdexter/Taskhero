import { View, Text } from 'react-native';
import { colors, typography, spacing } from '@/tokens';

export default function KidsDashboardScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.surface.ground, padding: spacing.lg }}>
      <Text style={typography.h1}>Kids Dashboard</Text>
    </View>
  );
}
