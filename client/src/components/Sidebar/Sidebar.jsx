import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterByTemperament } from "../../redux/actions";
import style from "./Sidebar.module.css";
import ByName from "./Filters/ByName";
import SearchBar from "../SearchBar/SearchBar";
import ByWeight from "./Filters/ByWeight";
import ByTemps from "./Filters/ByTemps";
import ByOrigin from "./Filters/ByOrigin";
import { PreviewTemps } from "../PreviewTemps/PreviewTemps";
import menu from "../../assets/menu.png";
export default function Sidebar() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.currentPage);
  const [pageNumber, setPageNumber] = useState(page);
  const [isOpen, setIsOpen] = useState(false);
  function handleClick(e) {
    //e es evento
    window.location.reload();
  }

  const allDogs = useSelector((state) => state.dogs);
  const [filteredTemps, setFilteredTemps] = useState([]);
  const handleChange2 = (e) => {
    const name = e.target.value;
    const buscar = filteredTemps.find((ele) => ele === name);
    if (buscar) {
      setFilteredTemps(filteredTemps.filter((temp) => temp !== name));
    } else {
      setFilteredTemps([...filteredTemps, e.target.value]);
    }
  };
  const filtroTemps = (filteredTemps, temps) => {
    for (const name of filteredTemps) {
      const result = temps.includes(name);
      if (!result) return false;
    }
    return true;
  };
  const filtro = allDogs?.filter((ele) =>
    filtroTemps(filteredTemps, ele.temperaments)
  );
  const handleChangeOri = () => {
    setFilteredTemps([]);
  };
  useEffect(() => {
    dispatch(filterByTemperament(filtro));
    setPageNumber(1);
  }, [filteredTemps]);
  return (
    <div className={style.sidebar}>
      <div className={style.sidewrapper}>
        <div className={`${style.filterContainer} ${style.wrap}`}>
          <div className={style.filterFlex}>
            <label>Filter by:</label>
            <ByTemps handleChange2={handleChange2} temps2={filteredTemps} />
            <ByOrigin handleChangeOri={handleChangeOri} />
          </div>
        </div>
        <div className={`${style.filterContainer} ${style.wrap}`}>
          <div className={style.filterFlex}>
            <label>Sort by:</label>
            <ByWeight />
            <ByName />
          </div>
        </div>
        <div className={style.mobile}>
          <div className={style.filterButtonMobile}>
            <img onClick={()=>{setIsOpen((prev)=>!prev)}} src={menu}/>
          </div>
          {isOpen && (<div className={style.filtersMobile}>
            <div>
              
              <div>
                <label>Filter by:</label>
                <ByTemps handleChange2={handleChange2} temps2={filteredTemps} />
                <ByOrigin handleChangeOri={handleChangeOri} />
              </div>
            </div>
            <div>
              <div>
                <label>Sort by:</label>
                <ByWeight />
                <ByName />
              </div>
            </div>
            <button onClick={()=>setIsOpen(false)} className={style.closeFiltersMobile}>X</button>
          </div>)}
          <div className={style.buttonwrap}>
            <button className={style.clear} onClick={(e) => handleClick(e)}>
              RESET
            </button>
          </div>
          <div className={style.SearchBar}>
            <SearchBar />
          </div>
        </div>
      </div>
      <div className={style.filteredTemps}>
        {filteredTemps.length > 0 &&
          filteredTemps.map((temp) => <PreviewTemps key={temp} temp={temp} />)}
      </div>
    </div>
  );
}
