import Stack from "expo-router/stack";

export default function NewsLayout() {
    return (
        <Stack>
            <Stack.Screen name="detail" options={{title: 'Detail'}} />
        </Stack>
    );
}