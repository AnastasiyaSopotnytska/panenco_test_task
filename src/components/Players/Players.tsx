import React, { useEffect, useState } from 'react';
import { getPlayers } from '../../api/api';
import { Pagination } from '../Pagination';
import './Players.scss';

export const Players: React.FC = () => {
  const [players, setPlayers] = useState<Player>();
  const [perPage, setPerPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getPlayers(perPage, currentPage)
      .then(result => setPlayers(result))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, [perPage, currentPage]);

  return (
    <>
      <h2 className="title">Players</h2>
      <div className="player">
        {players?.data.map(player => (
          <div key={player.id} className="player_card">
            <div className="initials">
              {player.first_name.charAt(0)}
              {player.last_name.charAt(0)}
            </div>
            <div className="name_lasname" title={player.team.name}>
              <div>{player.first_name}</div>
              <div>{player.last_name}</div>
            </div>
          </div>
        ))}
      </div>

      {players && (
        <Pagination
          component={players}
          perPage={perPage}
          currentPage={currentPage}
          setPerPage={setPerPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};
