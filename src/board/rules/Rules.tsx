import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import RulesModal from "./RulesModal";

const Rules = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("xl"));

  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Card sx={{ maxHeight: "500px" }}>
        <CardHeader
          title="Règles"
          action={
            <Button
              variant="outlined"
              size="small"
              endIcon={<ManageSearchOutlinedIcon />}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Règles Complètes
            </Button>
          }
        />
        {matches && (
          <CardContent>
            <Typography variant="h6">
              Bienvenue au jeu du Black Jack.
            </Typography>
            <Typography variant="body2">
              Vous jouer contre le croupier, votre objectif est de vous
              rapprocher de la somme 21 avec votre main de carte.
            </Typography>
            <Typography variant="body2">
              La valeur des cartes est définis comme suit :
            </Typography>
            <List dense disablePadding>
              <ListItem>
                <Typography variant="body2">
                  - de 2 à 9 : valeur nominale de la carte
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  - de 10 au roi : 10 points
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  - as : 1 ou 11 points (au choix du joueur)
                </Typography>
              </ListItem>
            </List>

            <Typography variant="body2">
              Une fois les cartes distribuées, misez une somme depuis votre
              banque.
            </Typography>
          </CardContent>
        )}
      </Card>
      <RulesModal openModal={openModal} onCloseModal={handleCloseModal} />
    </>
  );
};

export default Rules;
