/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  TextField,
  Typography,
} from "@mui/material";

import SelectComponent from "../../components/UI/SelectComponent/SelectComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";
import { cursos } from "../../../utils/lists";
import avatarOrientador from "../../assets/avatarOrientador.jpg";


const schema = yup
  .object({
    nome: yup.string().required(),
    curso: yup.string().required(),
  })
  .required();

const ModalSearchOrientadores = ({
  handleClose,
  controlDialog,
  title,
  actionButton,
  actionButtonText,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Dialog onClose={handleClose} open={controlDialog}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "50vw",
          },
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <form
          style={{
            display: "flex",
            gap: "30px",
            padding: "20px",
            justifyContent: "center",
          }}
        >
          <InputTextComponent
            fontWeight="bold"
            name="nome"
            label="CPF"
            fullWidth
            placeholder="Digite seu CPF"
            control={control}
            helperText="Digite o CPF"
            sx={{ width: "30vw", maxWidth: "800px" }}
          />
          <SelectComponent
            name="curso"
            control={control}
            listagem={cursos}
            helperText="Selecione o curso"
          />

          <Button variant="contained">Filtrar</Button>
        </form>

        <List sx={{ width: "20%" }}>
          {/*Listagem dos orientadores para seleção e depois deleção/update */}
          <Card>
            <CardMedia sx={{ height: 140 }} image={avatarOrientador} title="foto do orientador" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Orientador 01
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Curso: XXX
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" onClick={actionButton}>
                {actionButtonText}
              </Button>
            </CardActions>
          </Card>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalSearchOrientadores;
