import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Team.scss';
import { getTeam } from '../../api/api';
import { Form } from '../Form';
import { Pagination } from '../Pagination';

export const Team: React.FC = () => {
  const [teams, setTeams] = useState<Team>();
  const [perPage, setPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getTeam(perPage, currentPage)
      .then(result => setTeams(result))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, [perPage, currentPage]);

  return (
    <>
      <h2 className="title">Teams</h2>
      {teams && (
        <Form teamLast={teams?.meta.total_count} />
      )}

      <table className="content-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Abbreviation</th>
            <th>Conference</th>
          </tr>
        </thead>
        <tbody>
          {teams
            && teams.data.map(team => (
              <tr key={team.id}>
                <th>{team.name}</th>
                <th>{team.city}</th>
                <th>{team.abbreviation}</th>
                <th className={classNames({ east: team.conference === 'East' }, { west: team.conference === 'West' })}>{team.conference}</th>
              </tr>
            ))}
        </tbody>
      </table>

      {teams && (
        <Pagination
          component={teams}
          perPage={perPage}
          currentPage={currentPage}
          setPerPage={setPerPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};
