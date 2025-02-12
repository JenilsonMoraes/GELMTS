import  { Typography } from "@mui/material";
import styles from "./cadastrarOrientador.module.css";
import OrientadorForm from "../../components/OrientadorForm/OrientadorForm";

const CadastrarOrientador = () => {

    const handleCadastrar = (data) => {
        console.log(data)
    }

    return (
        <section className={styles.FormularioOrientadorContainer}>
            <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
                color="primary.main"
            >
                Formulário de cadastro
            </Typography>

            <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ display: "flex", justifyContent: "center" }}
                color="primary.main"
            >
                Cadastrar Orientador
            </Typography>

            <OrientadorForm handleSubmitData={handleCadastrar} cadastro={true}/>
        </section>
    )
}

export default CadastrarOrientador;