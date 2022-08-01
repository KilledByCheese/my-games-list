package de.killedbycheese.gamelist.gamelistapi.steam.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;



@Controller
@RequestMapping("/steam")
public class SteamController {
	
			
	@GetMapping
	public ResponseEntity<?> getToDos(@RequestParam String userID)  {
		final String uri = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=DCD7D8F07E1387927821BE31232030FC&format=json&include_appinfo=true&steamid="+userID;
		RestTemplate restTemplate = new RestTemplate();
		String result = restTemplate.getForObject(uri, String.class);
		
		return new ResponseEntity<String>(result, HttpStatus.OK);			
	}
	
	
	
}
