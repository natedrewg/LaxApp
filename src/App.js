import './App.css';
import PlayerUpdateForm from './ui-components/PlayerUpdateForm';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, Button } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from 'react'

import * as queries from './graphql/queries';

import awsconfig from './aws-exports';
import awsExports from './aws-exports';
Amplify.configure(awsconfig);
Amplify.configure(awsExports);

const App = ({ signOut, user }) => {
  const [Player, setPlayer] = useState([])
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    fetchPlayer()
  }, [])

  async function fetchPlayer() {
    try {
      const PlayerData = await API.graphql(graphqlOperation(queries.listPlayers))
      const Player = PlayerData.data.listPlayers.items
      setPlayer(Player)
    } catch (err) { console.log('error fetching todos') }
  }

  const handleClick = event => {
    setIsShown(current => !current);
  }
  return (
    <div className="App">
      <div class = " flex item-center justify-center">
        <div class = "bg-white rounded-md px-4 py-4">
          <PlayerUpdateForm id={user.username}/>
          <div class="justify-between flex px-4">
            <Button onClick={signOut}>Sign out</Button> 
            <Button onClick={handleClick}>Slackers</Button>
          </div>
          
            {isShown && (
              Player.map((Player, index) => (
                <div key={Player.id ? Player.id : index} style={styles.Player}>
                  <p style={styles.PlayerName}>{Player.name}</p>
                  <p style={styles.Playerstatus}>{JSON.stringify(Player.status)}</p>
                </div>
              ))
            )}
        </div>
        
      </div>
    </div>
  );
}

const styles = {
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  PlayerName: { fontSize: 15, fontWeight: 'bold' },
  Playerstatus: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App);