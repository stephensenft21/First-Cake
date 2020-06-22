import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { IconButtonsSignUp } from "../material/MaterialButtons";
import TextField from "@material-ui/core/TextField";
import style from "../../Style";

const useStyles = makeStyles({
    card: {
        maxWidth: "345px"
        //maxHeight: "50%"
    },
    media: {
        height: 140
    }
});
export function RegisterInput(props) {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>
                <CardContent>
                    <Typography
                        align="justify"
                        variant="subtitle2"
                        color="textPrimary"
                        component="div"
                    >
                        <TextField
                            style={style.emailInput}
                            onChange={props.handleFieldChange}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email*"
                            autoFocus
                        />
                    </Typography>

                    <Typography
                        align="justify"
                        variant="subtitle2"
                        color="textPrimary"
                        component="div"
                    >
                        <TextField
                            style={style.passwordInput}
                            onChange={props.handleFieldChange}
                            type="password"
                            name="password"
                            id="passwords"
                            placeholder="Password*"
                            autoFocus
                        />
                    </Typography>
                    <Typography
                        align="justify"
                        variant="subtitle2"
                        color="primary"
                        component="div"
                    >
                        <div style={style.loginButton}>
                            <IconButtonsSignUp />
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}