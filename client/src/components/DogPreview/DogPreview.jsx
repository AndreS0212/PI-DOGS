import React from "react";
import style from "./DogPreview.module.css";
import { PreviewTemps } from "../PreviewTemps/PreviewTemps";
export const DogPreview = ({ form, handleDelete }) => {
  return (
    <div>
      {form && (
        <div className={style.card}>
          <h1>{form.name}</h1>
          <div className={style.img_container}>
            <img src={form.image} alt={`Imagen de ${form.name}`} />
          </div>
          <div className={style.tempContainer}>
            {form.temperaments &&
              form.temperaments.map((el) => (
                <PreviewTemps handleDelete={handleDelete} temp={el} />
              ))}
          </div>
          <div className={style.container}>
            {(form.min_weight || form.max_weight) && (
              <span>
                Min weight: {form.min_weight} - Max weight: {form.max_weight}
              </span>
            )}
          </div>
          <div className={style.container}>
            {(form.min_height || form.max_height) && (
              <span>
                Min height: {form.min_height} - Max height: {form.max_height}
              </span>
            )}
          </div>
          <div className={style.container}>
            {(form.min_life_span || form.max_life_span) && (
              <span>
                Min Life Span: {form.min_life_span} - Max Life Span:{form.max_life_span}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
