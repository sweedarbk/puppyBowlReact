const BaseURL = "https://fsa-puppy-bowl.herokuapp.com/api"
const COHORT = "/2401-ftb-et-web-pt-1"
const API = `${BaseURL}${COHORT}`

export async function getAllPlayers() {
  try {
    const response = await fetch(`${API}/players`);
    const result = await response.json();
    if (result.success) {
      return result.data.players
    }
  } catch(err) {
    console.log(err)
  }
}

export async function getPlayer(id) {
  try {
    const players = await getAllPlayers()
    const result = await players.find((player) => {
      return player.id == id
    })
    return result
  } catch(err) {
      console.log(err)
    }
}

export async function addPlayer(player) {
  try {
    const response = await fetch(`${API}/players`, {
      method: 'post',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(player),
    });
    const json = await response.json();
    return json.data;
  } catch(err) {
    console.log(err)
  }
}

export async function deletePlayer(id) {
  try {
    const response = await fetch(`${API}/players/${id}`, {
        method: 'delete'
    });
    const json = await response.json()

    if(json.success) {
      return json
    }
    
  } catch (err) {
    console.log(err)
  }
}