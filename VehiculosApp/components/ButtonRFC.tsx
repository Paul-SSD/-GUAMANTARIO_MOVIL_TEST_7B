import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

type ButtonRFCProps = TouchableOpacityProps & {
  label: string;
  color?: string;
};

// creacion del componente reutilizable de boton
export const ButtonRFC = ({
  label,
  color = "#007bff",
  style,
  ...props
}: ButtonRFCProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[{ backgroundColor: color }, styles.button, style]}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
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
