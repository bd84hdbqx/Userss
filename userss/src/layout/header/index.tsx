import React, { ReactElement } from "react";

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <>
      <div
        className="container"
        style={{
          margin: "auto",
          width: "90%",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwX836gti4iMw-nhPe_xxEFpNHihVBYPp_w&usqp=CAU)",
            border: "3px solid #da4a85",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            marginTop: "10px",
          }}
        ></div>
        <div
          style={{
            marginTop: "10px",
            border: "3px solid #da4a85",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            marginTop: "10px",
            border: "3px solid #da4a85",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            marginTop: "10px",
            border: "3px solid #da4a85",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            border: "3px solid #da4a85",
            marginTop: "10px",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            border: "3px solid #da4a85",
            marginTop: "10px",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            marginTop: "10px",
            border: "3px solid #da4a85",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            border: "3px solid #da4a85",
            marginTop: "10px",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </>
  );
}

export default Header;
