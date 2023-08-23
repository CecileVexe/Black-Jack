import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import RulesModal from "./RulesModal";
import { useState } from "react";

const Rules = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Card>
        <CardHeader sx={{ textAlign: "center" }} title="Règles" />
        <CardContent>
          <Typography variant="h6">Bienvenue au jeu du Black Jack.</Typography>
          <Typography variant="body1">
            Vous jouer contre le croupier, votre objectif est de vous rapprocher
            de la somme 21 avec votre main de carte.
          </Typography>
          <Typography variant="body1">
            La valeur des cartes est définis comme suit :
          </Typography>
          <List dense={true} disablePadding={true}>
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

          <Typography variant="body1">
            Une fois les cartes distribuées, misez une somme depuis votre
            banque.
          </Typography>

          <Typography variant="body1" pt="10px">
            Vous avez ensuite 3 possibilité :
          </Typography>
          <Grid container gap={3} pb="15px">
            <Grid item>
              <Chip color="stand" label="Stand" />
            </Grid>
            <Grid item>
              <Chip color="hit" label="Hit" />
            </Grid>
            <Grid item>
              <Chip color="doubledown" label="Double Down" />
            </Grid>
          </Grid>
          <Typography variant="body1">
            Une fois le tour du croupier finis, il révèle ses cartes.
          </Typography>
          <List dense={true}>
            <ListItem>
              <Typography variant="body2">
                - Si vous avez fait 21, vous gagnez et triplez votre mise
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                - Si votre main est plus forte que celle du croupier, vous
                gagnez et doublez votre mise
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                - Si la main du croupier est plus forte que la votre, vous
                perdez votre mise
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                - En cas d'égalité, personne ne remporte la partie et vous
                récupérez votre mise.
              </Typography>
            </ListItem>
          </List>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            endIcon={<ManageSearchOutlinedIcon />}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Règles Etendues
          </Button>
        </CardActions>
      </Card>
      <RulesModal openModal={openModal} onCloseModal={handleCloseModal} />
    </>
  );
};

export default Rules;
