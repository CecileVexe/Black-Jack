import { Alert, Button, Grid } from "@mui/material";
import { MuiAlertColor, MuiVariant } from "../../utils/types/mui.types";

interface ActionProps {
  color: MuiAlertColor;
  variant: MuiVariant;
  action: string;
  actionMessage: string;
}

const Action = (props: ActionProps) => {
  const { color, variant, action, actionMessage } = props;
  return (
    <Grid container direction="column" alignItems="center" gap={1}>
      <Grid item>
        <Alert
          icon={false}
          color={color}
          variant="outlined"
          sx={{ color: `#eee` }}
        >
          {actionMessage}
        </Alert>
      </Grid>
      <Grid item>
        <Button color={color} variant={variant}>
          {action}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Action;
