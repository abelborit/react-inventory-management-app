import { List, ListItem, Symbol } from "./index.styles";

interface PasswordStrengthIndicatorProps {
  password: string;
}

export const PasswordStrengthIndicator = ({
  password,
}: PasswordStrengthIndicatorProps) => {
  const rules = [
    { regex: /.{8,}/, message: "At least 8 characters" },
    { regex: /[a-z]/, message: "At least one lowercase letter" },
    { regex: /[A-Z]/, message: "At least one uppercase letter" },
    { regex: /\d/, message: "At least one number" },
    {
      regex: /[!@#$%^&*(),.?":{}|<>]/,
      message: "At least one special character",
    },
  ];

  return (
    <List>
      {rules.map((rule, index) => {
        const passed = rule.regex.test(password);

        return (
          <ListItem key={index} $passed={passed}>
            <Symbol>{passed ? "✔" : "✘"}</Symbol>
            {rule.message}
          </ListItem>
        );
      })}
    </List>
  );
};
