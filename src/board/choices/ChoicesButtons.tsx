import { Grid } from "@mui/material";
import actions from "../../utils/actions";
import Action from "./Action";

const ChoicesButtons = () => {
  return (
    <Grid container direction="row" gap={1}>
      {actions.map((action, index) => (
        <Grid item key={`action-${index}`}>
          <Action
            color={action.color}
            variant="contained"
            action={action.title}
            actionMessage={action.message}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ChoicesButtons;
