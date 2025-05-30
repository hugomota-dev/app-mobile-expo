// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="(auth)" options={{headerShown: false}} />
//       <Stack.Screen name="index" options={{headerShown: false}} />
//     </Stack>
//   );
// }

import { Slot } from 'expo-router';
import { AuthProvider } from '../src/context/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
