/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik } from 'formik';
import React from 'react';
import { addTeam } from '../../api/api';
import './Form.scss';

type Props = {
  teamLast: number
};

export const Form: React.FC<Props> = ({ teamLast }) => {
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
            id: teamLast + 1,
            name: values.name,
            city: values.city,
            abbreviation: values.abbreviation,
            conference: values.conference,

          };

          addTeam(newTeam);
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
                  className="input"
                  value={values.city}
                  onChange={handleChange}
                />
              </div>

              <div className="label_input">
                <label htmlFor="abbreviation" className="label">Abbreviation</label>
                <input
                  type="text"
                  id="abbreviation"
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
                  <option value="east">East</option>
                  <option value="west">West</option>
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
