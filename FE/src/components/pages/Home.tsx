import { Button, Container, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SteamService from "../../services/SteamService";
import ControlledTextField from "../UI/ControlledTextField";

function Home() {
  const {
    control,
    register,
    setValue,
    getValues,
    handleSubmit,
    clearErrors,
    reset,
    watch,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      steamID: "",
    },
  });

  const [steamGames, setSteamGames] = useState<any[]>([]);

  const steamSearchHandler = (data: any) => {
   SteamService.getAllGamesByUserID(data.steamID)
    .then((response) => {
      setSteamGames(response.response.games);
    })
    .catch((error) => {
      window.alert("Error receiving Data");
    });
  };

  const downloadHandler = () => {
    let gameNames:string[] = [];
    steamGames.forEach((game)=>{
      gameNames.push(game.name);
    });
    
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(gameNames)], {
      type: "text/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = "export.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  return(
    <Container>
      <Stack spacing={2}>
        <ControlledTextField 
          label="Steam ID"
          control={control}
          name="steamID"
          placeholder="Decimal Steam ID"
          error={errors.steamID}
          required
          errorMessage="Steam ID is required"
        />
        <Stack direction={"row"}>
          <Button variant="contained" onClick={handleSubmit(steamSearchHandler)}>Search Games</Button>
          <Button variant="contained" onClick={downloadHandler}>Download</Button>
        </Stack>
      {steamGames &&
      <ul>
        {steamGames.map((game, index) => (
          <li>
            {game.name}
          </li>
        ))}
      </ul>}
        </Stack>
    </Container>
  );

}

export default Home;
