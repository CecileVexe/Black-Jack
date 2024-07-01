import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { getHandValue } from "../../utils/player/JoueurUtils";
import { Cards } from "../../utils/types/cardsDeck.types";

interface AceModalProps {
  openModal: boolean;
  onCloseModal: () => void;
  cards: Cards[];
  setCards: (_: Cards[]) => void;
}

const ModalTypography = styled(Typography)(() => ({
  color: "#111",
}));

const AceModal = (props: AceModalProps) => {
  const { openModal, onCloseModal, cards, setCards } = props;
  const [aceValue, setAceValue] = useState(1);
  const aceCard = cards.find((card) => card.value === 0);

  const handleChange = (event: any) => {
    setAceValue(parseInt(event.target.value, 10));
  };

  return (
    aceCard && (
      <Dialog open={openModal} onClose={onCloseModal} fullWidth maxWidth="sm">
        <DialogTitle
          sx={{ fontWeight: "bold", fontSize: "22px", color: "#111" }}
        >
          Choisissez une valeur
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Décidez de la valeur de votre carte :
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: "auto",
              width: "fit-content",
            }}
          >
            <ModalTypography variant="body1">{aceCard.card}</ModalTypography>

            <img
              className="cards"
              src="/images/cards/2_of_clubs.svg"
              alt="Paquet de carte"
            />

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="choisir-une-valeur-carte-as"
                name="ace-value"
                value={aceValue}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio color="hit" />}
                  label="1"
                />
                <FormControlLabel
                  value={10}
                  control={<Radio color="hit" />}
                  label={10}
                />
              </RadioGroup>
            </FormControl>
            <ModalTypography variant="body1">{`Futur valeur de la main : ${getHandValue(
              cards
            )} + ${aceValue} = ${
              getHandValue(cards) + aceValue
            }`}</ModalTypography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="hit"
            onClick={() => {
              const newCard = cards.map((card) => {
                if (card === aceCard) {
                  return { ...card, value: aceValue };
                }
                return card;
              });
              setCards(newCard);
              onCloseModal();
            }}
          >
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    )
  );
};

export default AceModal;
