/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import { Formik } from 'formik';
import React, { useState } from 'react';
import './Form.scss';

type Props = {
  teams: Team,
  addedTeams: newTeam[],
  setAddedTeams: (team: newTeam[]) => void;
};

export const Form: React.FC<Props> = ({ teams, setAddedTeams, addedTeams }) => {
  const [hasCity, setHasCity] = useState(true);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          city: '',
          abbreviation: '',
          conference: '',
        }}
        onSubmit={values => {
          const newTeam = {
            id: teams.meta.total_count + 1,
            name: values.name,
            city: values.city,
            abbreviation: values.abbreviation,
            conference: values.conference || 'East',
          };

          if (/^[a-zA-Z]+$/.test(values.city)) {
            values.city = '';
            values.name = '';
            values.abbreviation = '';

            teams.meta.total_count += 1;

            // eslint-disable-next-line no-console
            console.log(newTeam);
            setAddedTeams([...addedTeams, newTeam]);
            setHasCity(true);
          } else {
            setHasCity(false);
          }
        }}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
          } = formik;

          return (
            <form onSubmit={handleSubmit} className="form">
              <div className="label_input">
                <label htmlFor="name" className="label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>

              <div className="label_input">
                <label htmlFor="city" className="label">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className={classNames('input', { error: !hasCity })}
                  value={values.city}
                  onChange={handleChange}
                />
                {!hasCity && (
                  <div>Only letters</div>
                )}
              </div>

              <div className="label_input">
                <label
                  htmlFor="abbreviation"
                  className="label"
                >
                  Abbreviation
                </label>
                <input
                  type="text"
                  id="abbreviation"
                  placeholder="Only uppercase"
                  name="abbreviation"
                  className="input"
                  value={values.abbreviation}
                  onChange={handleChange}
                />
              </div>

              <div className="label_input">
                <label htmlFor="city" className="label">Conference</label>
                <select
                  name="conference"
                  id="conference"
                  className="input select"
                  value={values.conference}
                  onChange={handleChange}
                >
                  <option value="East">East</option>
                  <option value="West">West</option>
                </select>
              </div>

              <button type="submit" className="submit-buttom">
                Add Team
              </button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
