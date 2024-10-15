import { Button, Grid, Tooltip } from "@mui/material";
import { useContext } from "react";
import GameContext from "../../providers/GameContext";
import { MuiAlertColor, MuiVariant } from "../../utils/types/mui.types";
import PlayerChoice from "../../utils/types/playerChoices.types";

interface ActionProps {
  color: MuiAlertColor;
  variant: MuiVariant;
  action: string;
  actionMessage: string;
}

const Action = (props: ActionProps) => {
  const { color, variant, action, actionMessage } = props;
  const { setPlayerChoice } = useContext(GameContext);

  return (
    <Grid container direction="column" alignItems="center" gap={1}>
      {/* <Grid item>
        <Alert
          icon={false}
          color={color}
          variant="outlined"
          sx={{ color: `#eee` }}
        >
          {actionMessage}
        </Alert>
      </Grid> */}
      <Grid item>
        <Tooltip title={actionMessage} placement="bottom">
          <Button
            color={color}
            variant={variant}
            onClick={() => setPlayerChoice(color as PlayerChoice)}
          >
            {action}
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default Action;
