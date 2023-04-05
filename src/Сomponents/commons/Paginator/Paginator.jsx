import React, {useState} from 'react'
import s from './Paginator.module.css'

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pagesArr = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return (
        <div className={s.paginationItem}>
            {portionNumber > 1 && <button className={s.leftButton} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            {pagesArr
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span key={p.id}
                                 className={currentPage === p && s.activePaginationElement}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}
                    >{p}</span>
                })}
            {portionCount > portionNumber && <button className={s.rightButton} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}

export default Paginator