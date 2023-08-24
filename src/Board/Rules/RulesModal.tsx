import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";

interface RulesModalProps {
  openModal: boolean;
  onCloseModal: () => void;
}

const ModalTypography = styled(Typography)(() => ({
  color: "#111",
}));

const RulesModal = (props: RulesModalProps) => {
  const { openModal, onCloseModal } = props;
  return (
    <Dialog open={openModal} onClose={onCloseModal} maxWidth="lg">
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "22px", color: "#111" }}>
        Règles Etendues
      </DialogTitle>
      <DialogContent>
        <ModalTypography variant="h6">
          Bienvenue au jeu du Black Jack.
        </ModalTypography>
        <ModalTypography variant="body1">
          Vous jouer contre le croupier, votre objectif est de vous rapprocher
          de la somme 21 avec votre main de carte.
        </ModalTypography>
        <ModalTypography variant="body1">
          La valeur des cartes est définis comme suit :
        </ModalTypography>
        <List>
          <ListItem>
            <ModalTypography variant="body1">
              - de 2 à 9 : valeur nominale de la carte
            </ModalTypography>
          </ListItem>
          <ListItem>
            <ModalTypography variant="body1">
              - de 10 au roi : 10 points
            </ModalTypography>
          </ListItem>
          <ListItem>
            <ModalTypography variant="body1">
              - as : 1 ou 11 points (au choix du joueur)
            </ModalTypography>
          </ListItem>
        </List>
        <ModalTypography variant="body1">
          Au début de la partie, le croupier vous distribue une carte et une
          carte face visible pour lui. Il tire ensuite pour vous une seconde
          carte et une seconde carte face cachée pour lui.
        </ModalTypography>
        <ModalTypography variant="body1">
          Une fois les cartes distribuées, c&aposest à vous de jouer, misez une
          somme depuis votre banque. Vous avez ensuite 3 possibilité :
        </ModalTypography>
        <List>
          <ListItem>
            <ModalTypography variant="body1">
              <Chip color="stand" label="Stand" /> : Vous ne faites rien et
              garder votre main tel quel.
            </ModalTypography>
          </ListItem>
          <ListItem>
            <ModalTypography variant="body1">
              <Chip color="stand" label="Stand" /> : Vous redemandez une carte
              pour augementer votre main. Cette action est répétable autant de
              fois que vous le voulez
            </ModalTypography>
          </ListItem>
          <ListItem>
            <ModalTypography variant="body1">
              <Chip color="doubledown" label="Double Down" /> : Vous doublez
              votre mise mais ne piochez qu&aposune seule carte en plus dans
              votre main.
            </ModalTypography>
          </ListItem>
        </List>
        <ModalTypography variant="body1">
          Une fois que vous avez finis de jouer, c&aposest au tour du croupier.
          Ce dernier tentera de se rapporcher de 21 sans dépasser 17.
        </ModalTypography>
        <ModalTypography variant="body1">
          Une fois son tour finis, il révèle ses cartes.
        </ModalTypography>
        <List>
          <ListItem>
            <ModalTypography variant="body1">
              - Si vous avez fait 21, vous gagnez et triplez votre mise
            </ModalTypography>
          </ListItem>
          <ListItem>
            <ModalTypography variant="body1">
              - Si votre main est plus forte que celle du croupier, vous
              remportez la partie et gagnez 2 fois votre mise
            </ModalTypography>
          </ListItem>
          <ListItem>
            <ModalTypography variant="body1">
              - Si la main du croupier est plus forte que la votre, vous perdez
              la partie et perdez votre mise
            </ModalTypography>
          </ListItem>
          <ListItem>
            <ModalTypography variant="body1">
              - En cas d&aposégalité, personne ne remporte la partie et vous
              récuprez votre mise.
            </ModalTypography>
          </ListItem>
        </List>
        <ModalTypography variant="body1">
          <Chip color="error" label="ATTENTION" /> Votre partie prend
          automatiquement fin si votre main dépasse 21, vous avez alors brulé
          votre main.
        </ModalTypography>
      </DialogContent>
      <DialogActions>
        <Button
          size="medium"
          variant="outlined"
          onClick={onCloseModal}
          sx={{
            color: "#111",
            borderColor: "#111",
            "&:hover": { borderCOlor: "#11111100" },
          }}
        >
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RulesModal;
