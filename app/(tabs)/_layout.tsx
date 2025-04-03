import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs 
            screenOptions={{ tabBarActiveTintColor: '#3399ff'}}
        >
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: 'News', 
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
                }} 
            />
            <Tabs.Screen 
                name="favorites" 
                options={{ 
                    title: 'Favorites', 
                    tabBarIcon: ({ color }) => <Ionicons name="heart" size={24} color={color} />,
                }} 
            />
        </Tabs>
    );
}
