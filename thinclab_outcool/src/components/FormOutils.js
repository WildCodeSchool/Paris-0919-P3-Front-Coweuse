import React from "react";
import "./FormOutils.css";

const FormOutils = () => {
  return (
    <div>
      <h1>Ajout des outils</h1>
      <form class="form-style-9">
        <ul>
          <li>
            <input
              type="text"
              name="field1"
              class="field-style field-split align-left"
              placeholder="Production"
            />
            <input
              type="email"
              name="field2"
              class="field-style field-split align-right"
              placeholder="Parcelle"
            />
          </li>
          <li>
            <input
              type="text"
              name="field3"
              class="field-style field-split align-left"
              placeholder="Objectifs Dates"
            />
            <input
              type="url"
              name="field4"
              class="field-style field-split align-right"
              placeholder="Outils"
            />
          </li>
          <li>
            <input
              type="text"
              name="field3"
              class="field-style field-full align-none"
              placeholder="Utilisation des outils"
            />
          </li>
          <li></li>
          <li>
            <input type="submit" value="Envoyer" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default FormOutils;
