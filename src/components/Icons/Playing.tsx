import React from "react";

const Playing = () => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-facebook"
    >
      <rect
        ng-attr-x="{{config.x1}}"
        ng-attr-y="{{config.y}}"
        ng-attr-width="{{config.width}}"
        ng-attr-height="{{config.height}}"
        ng-attr-fill="{{config.c1}}"
        x="17.5"
        y="30"
        width="15"
        height="40"
        fill="#4658ac"
      >
        <animate
          attributeName="y"
          calcMode="spline"
          values="18;30;30"
          keyTimes="0;0.5;1"
          dur="1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.2s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          calcMode="spline"
          values="64;40;40"
          keyTimes="0;0.5;1"
          dur="1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.2s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect
        ng-attr-x="{{config.x2}}"
        ng-attr-y="{{config.y}}"
        ng-attr-width="{{config.width}}"
        ng-attr-height="{{config.height}}"
        ng-attr-fill="{{config.c2}}"
        x="42.5"
        y="30"
        width="15"
        height="40"
        fill="#e7008a"
      >
        <animate
          attributeName="y"
          calcMode="spline"
          values="20.999999999999996;30;30"
          keyTimes="0;0.5;1"
          dur="1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.1s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          calcMode="spline"
          values="58.00000000000001;40;40"
          keyTimes="0;0.5;1"
          dur="1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.1s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect
        ng-attr-x="{{config.x3}}"
        ng-attr-y="{{config.y}}"
        ng-attr-width="{{config.width}}"
        ng-attr-height="{{config.height}}"
        ng-attr-fill="{{config.c3}}"
        x="67.5"
        y="30"
        width="15"
        height="40"
        fill="#ff003a"
      >
        <animate
          attributeName="y"
          calcMode="spline"
          values="24;30;30"
          keyTimes="0;0.5;1"
          dur="1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          calcMode="spline"
          values="52;40;40"
          keyTimes="0;0.5;1"
          dur="1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </svg>
  );
};

export const PlayingSquare = () => {
  return (
    <svg
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-cube"
    >
      <g transform="translate(25,25)">
        <rect
          ng-attr-x="{{config.dp}}"
          ng-attr-y="{{config.dp}}"
          ng-attr-width="{{config.blockSize}}"
          ng-attr-height="{{config.blockSize}}"
          ng-attr-fill="{{config.c1}}"
          x="-20"
          y="-20"
          width="40"
          height="40"
          fill="#f7f7f7"
          transform="scale(1.08003 1.08003)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            calcMode="spline"
            values="1.5;1"
            keyTimes="0;1"
            dur="1s"
            keySplines="0 0.5 0.5 1"
            begin="-0.3s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(75,25)">
        <rect
          ng-attr-x="{{config.dp}}"
          ng-attr-y="{{config.dp}}"
          ng-attr-width="{{config.blockSize}}"
          ng-attr-height="{{config.blockSize}}"
          ng-attr-fill="{{config.c2}}"
          x="-20"
          y="-20"
          width="40"
          height="40"
          fill="#545454"
          transform="scale(1.11669 1.11669)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            calcMode="spline"
            values="1.5;1"
            keyTimes="0;1"
            dur="1s"
            keySplines="0 0.5 0.5 1"
            begin="-0.2s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(25,75)">
        <rect
          ng-attr-x="{{config.dp}}"
          ng-attr-y="{{config.dp}}"
          ng-attr-width="{{config.blockSize}}"
          ng-attr-height="{{config.blockSize}}"
          ng-attr-fill="{{config.c3}}"
          x="-20"
          y="-20"
          width="40"
          height="40"
          fill="red"
          transform="scale(1.2214 1.2214)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            calcMode="spline"
            values="1.5;1"
            keyTimes="0;1"
            dur="1s"
            keySplines="0 0.5 0.5 1"
            begin="0s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(75,75)">
        <rect
          ng-attr-x="{{config.dp}}"
          ng-attr-y="{{config.dp}}"
          ng-attr-width="{{config.blockSize}}"
          ng-attr-height="{{config.blockSize}}"
          ng-attr-fill="{{config.c4}}"
          x="-20"
          y="-20"
          width="40"
          height="40"
          fill="#ff7841"
          transform="scale(1.16266 1.16266)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            calcMode="spline"
            values="1.5;1"
            keyTimes="0;1"
            dur="1s"
            keySplines="0 0.5 0.5 1"
            begin="-0.1s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </g>
    </svg>
  );
};

export default Playing;
