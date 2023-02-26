import React from 'react'

export default function Filters() {
    return (
        <div>
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
        </div>
    )
}