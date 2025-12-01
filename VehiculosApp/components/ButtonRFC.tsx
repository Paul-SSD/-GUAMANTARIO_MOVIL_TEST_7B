import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

type ButtonRFCProps = TouchableOpacityProps & {
  label: string;
};

// creacion del componente reutilizable de boton
export const ButtonRFC = ({ label, style, ...props }: ButtonRFCProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  label: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
