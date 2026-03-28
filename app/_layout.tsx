import { useEffect } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useAuth } from '@/hooks/useAuth';

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { user, role, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (!user && !inAuthGroup) {
      router.replace('/(auth)/login');
    } else if (user && role === 'parent' && inAuthGroup) {
      router.replace('/(parent)');
    } else if (user && role === 'kid' && inAuthGroup) {
      router.replace('/(kid)');
    }
  }, [user, role, isLoading, segments]);

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'WorkSans-Regular': require('../assets/fonts/WorkSans-Regular.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    'WorkSans-SemiBold': require('../assets/fonts/WorkSans-SemiBold.ttf'),
    'WorkSans-Bold': require('../assets/fonts/WorkSans-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <RootLayoutNav />;
}
