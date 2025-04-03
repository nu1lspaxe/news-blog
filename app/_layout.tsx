import { store } from '@/redux';
import { Stack } from 'expo-router/stack';
import { Provider } from 'react-redux';
import React from 'react';

export default function AppLayout() {
  return (
    <Provider store={store}>
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            <Stack.Screen name="news" options={{ headerShown: false}} />
        </Stack>
    </Provider>
  );
}
