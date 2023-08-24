import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  List,
  ListItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import RulesModal from "./RulesModal";

const Rules = () => {
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
              Règles Etendues
            </Button>
          }
        />
        <CardContent>
          <Typography variant="h6">Bienvenue au jeu du Black Jack.</Typography>
          <Typography variant="body2">
            Vous jouer contre le croupier, votre objectif est de vous rapprocher
            de la somme 21 avec votre main de carte.
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

          <Grid container gap={3} py="10px" alignItems="center">
            <Grid item>
              <Typography display="inline" variant="body2" pt="10px">
                Vous avez ensuite 3 possibilités :
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip
                placement="top-end"
                title="Vous ne faites rien et garder votre main tel quel"
                arrow
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <Chip color="stand" label="Stand" />
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip
                placement="top-end"
                title="Vous redemandez une carte pour augementer votre main. Cette action est répétable autant de fois que vous le voulez"
                arrow
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <Chip color="hit" label="Hit" />
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip
                placement="top-end"
                title="Vous doublez votre mise mais ne piochez qu'une seule carte en plus dans votre main"
                arrow
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <Chip color="doubledown" label="Double Down" />
              </Tooltip>
            </Grid>
          </Grid>
          <Typography variant="body2">
            Une fois le tour du croupier finis, il révèle ses cartes.
          </Typography>
          <List dense>
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
                - En cas d&apos;égalité, personne ne remporte la partie et vous
                récupérez votre mise.
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <RulesModal openModal={openModal} onCloseModal={handleCloseModal} />
    </>
  );
};

export default Rules;
