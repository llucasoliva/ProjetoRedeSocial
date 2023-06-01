
// Função para abrir o pop-up
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

// Função para fechar o pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// const loluser = document.querySelector("#loluser");
// const API_KEY = "RGAPI-f0bde41a-7064-479b-b5a1-1d7d9fce9ecd";
// const options = {
//   method: 'GET',
//   mode: 'cors',
//   cache: 'default'
// };

// loluser.addEventListener("blur", async () => {
//   try {
//     const search = loluser.value.replace("-", "");
//     const summonerData = await fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=${API_KEY}`, options)
//       .then(response => response.json());

//     const id = summonerData.id;
//     getProfile(id);

//     const icon = summonerData.profileIconId;
//     const img = document.querySelector('#img-thumbnail');
//     getIcon(icon, img, "perfil");

//     const nickname = summonerData.name;
//     getNickname(nickname);
//   } catch (error) {
//     console.log("ERRO: " + error);
//   }
// });

// async function getProfile(id) {
//   try {
//     const leagueData = await fetch(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`, options)
//       .then(response => response.json());

//     const infosoloq = leagueData[1];
//     const tier = infosoloq.tier;
//     const rank = infosoloq.rank;

//     getTier(tier);
//     getRank(rank);

//     const img = document.querySelector('#tier-thumbnail');
//     setTierImage(tier, img);

//   } catch (error) {
//     console.log("ERRO: " + error);
//   }
// }

// function getIcon(icon, img, tipo) {
//   if (tipo === "perfil") {
//     img.src = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${icon}.png`;
//   }
// }

// function getNickname(nickname) {
//   document.querySelector("#lolnick").innerHTML = nickname;
// }

// function getTier(tier) {
//   document.querySelector("#loltier").innerHTML = tier;
// }

// function getRank(rank) {
//   document.querySelector("#lolrank").innerHTML = rank;
// }

// function setTierImage(tier, img) {
//     let imagePath;
  
//     switch (tier) {
//       case "BRONZE":
//         imagePath = "perfil/lolranks/Emblem_Bronze.png";
//         break;
//       case "CHALLENGER":
//         imagePath = "perfil/lolranks/Emblem_Challenger.png";
//         break;
//       case "DIAMOND":
//         imagePath = "perfil/lolranks/Emblem_Diamond.png";
//         break;
//       case "GOLD":
//         imagePath = "perfil/lolranks/Emblem_Gold.png";
//         break;
//       case "GRANDMASTER":
//         imagePath = "perfil/lolranks/Emblem_Grandmaster.png";
//         break;
//       case "IRON":
//         imagePath = "perfil/lolranks/Emblem_Iron.png";
//         break;
//       case "MASTER":
//         imagePath = "perfil/lolranks/Emblem_Master.png";
//         break;
//       case "PLATINUM":
//         imagePath = "perfil/lolranks/Emblem_Platinum.png";
//         break;
//       case "SILVER":
//         imagePath = "perfil/lolranks/Emblem_Silver.png";
//         break;
//       default:
//         imagePath = ""; // Defina uma imagem padrão para casos não correspondentes
//         break;
//     }
  
//     img.src = imagePath;
//   }