/* import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import "./Detail2.css";

export default function Detail2() {

  const [
    sliderInfo,
    setSliderInfo,
    allProducts,
    setAllProducts,
    BS2,
    setBS2,
    BS3,
    setBS3,
    addToCart,
    deleteFromCart,
    cart,
    setCart,
    nrOfCartItems,
    setNrOfCartItems,
    total,
    setTotal,
    soldHistory,
    setSoldHistory,
    initial,
    setInitial,
  ] = useContext(MyContext);


  let fotos = [
    {
      id: 1,
      lnk:
        "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
      active: true,
    },
    {
      id: 2,
      lnk:
        "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
      active: false,
    },
    {
      id: 3,
      lnk:
        "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
      active: false,
    },
    {
      id: 4,
      lnk:
        "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
      active: false,
    },
  ];

  const [play, setPlay] = useState(fotos);

  const setActive = (id) => {
    console.log("work", id);

    let newPlays = play.map((foto) => {
      if (foto.active === true) {
        const updateFoto = {
          ...foto,
          active: false,
        };
        return updateFoto;
      }
      return foto;
    });

    let okPlays = newPlays.map((fot) => {
      if (fot.id === id) {
        const updateImg = {
          ...fot,
          active: true,
        };
        return updateImg;
      }
      return fot;
    });

    setPlay(okPlays);
  };



  return (
    <div className="detail2">
      <div>
        {play.map((foto) => {
          if (foto.active === true) {
            return (
              <div>
                <img
                  src={foto.lnk}
                  className="smallActiveImg"
                  alt="smallFoto"
                  onClick={() => setActive(foto.id)}
                />
              </div>
            );
          }
          return (
            <div>
              <img
                src={foto.lnk}
                className="smallNonactiveImg"
                alt="smallFoto"
                onClick={() => setActive(foto.id)}
              />
            </div>
          );
        })}
      </div>
      <div>
        {play.map((foto) => {
          if (foto.active === true) {
            return (
              <div>
                <img src={foto.lnk} className="bigImg" alt="bigFoto" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
 */