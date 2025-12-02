import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

type ButtonRFCProps = TouchableOpacityProps & {
  label: string;
  color?: string;
  disabled?: boolean;
};

// creacion del componente reutilizable de boton
export const ButtonRFC = ({
  label,
  color = "#007bff",
  disabled = false,
  style,
  ...props
}: ButtonRFCProps) => {
  const buttonColor = disabled ? "#bdc3c7" : color;
  
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      style={[{ backgroundColor: buttonColor }, styles.button, style, disabled && styles.disabledButton]}
    >
      <Text style={[styles.label, disabled && styles.disabledLabel]}>{label}</Text>
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
  disabledButton: {
    opacity: 0.6,
  },
  disabledLabel: {
    color: "#ffffff",
    opacity: 0.7,
  },
});
