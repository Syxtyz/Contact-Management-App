import { Text, View } from "react-native";
import "../global.css";

export default function Page() {
  return (
    <View className="flex-1 justify-center items-center">
      {/* Navigation Bar */}
      <View>
      </View>
      <Text>Hello World</Text>
      <Text className="text-red-400">This is the first page of your app.</Text>
    </View>
  );
}