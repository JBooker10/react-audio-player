import React from "react";

interface IState {
  height: number;
  width: number;
  color: string;
}

const Note = ({ color, height, width }: IState): JSX.Element => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 525.153 525.153"
      height={height}
      width={width}
      style={{
        margin: "auto",
        display: "block ",
        fill: color
      }}
    >
      <path
        d="M248.047,0v270.738c-13.763-4.989-28.424-8.162-43.85-8.162c-72.559,0-131.288,58.598-131.288,131.288
		s58.73,131.288,131.288,131.288c67.482,0,122.557-51.115,129.822-116.759h1.466V87.569h116.759V0H248.047z"
      />
    </svg>
  );
};

export default Note;
