import { View, Text } from 'react-native';
import { colors, typography, spacing } from '@/tokens';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.surface.page, padding: spacing.lg }}>
      <Text style={typography.h1}>Welcome to TaskHero</Text>
    </View>
  );
}
