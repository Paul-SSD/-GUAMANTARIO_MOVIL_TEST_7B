import {
  Text,
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
} from "react-native";

type InputTextRFCProps = TextInputProps & { label: string };

// componente reutilizable para input de texto + label
export const InputTextRFC = ({ label, style, ...props }: InputTextRFCProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...props} style={[styles.inputText, style]}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color:'#2f2f2f'
  },
  inputText: {
    borderWidth:1,
    borderRadius:8,
    borderColor:'#d9d9d9d',
    paddingHorizontal:12,
    paddingVertical:8,
    fontSize:16,
    backgroundColor:'#f9f9f9'
  },
});
