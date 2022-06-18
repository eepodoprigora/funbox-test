import {useRef} from "react";
import PropTypes from 'prop-types';
import cat from '../img/cat.png';
import './Card.css'


const Card = ({
                  minititle,
                  title,
                  stuffing,
                  portionCount,
                  gift,
                  weight,
                  selectedText,
                  status,
                  minititleSelectedHover,
                  toggleStatus,
                  id
              }) => {
    const mainRef = useRef(null)
    const minititleRef = useRef(null)
    const bottomRef = useRef(null)


    function showSelectedHoverTitle(text, pointerAction) {
        if (mainRef.current.classList.contains('selected') && pointerAction === "MouseEnter") {
            minititleRef.current.innerHTML = minititleSelectedHover
            minititleRef.current.style.color = '#E52E7A'
        }
        if ((mainRef.current.classList.contains('selected') ||
            mainRef.current.classList.contains('default'))
            && pointerAction === "MouseLeave") {
            minititleRef.current.innerHTML = minititle
            minititleRef.current.style.color = '#666666'
        }
    }


    return (
        <div className={`card ${status}`} ref={mainRef} onClick={()=> toggleStatus( id)}>
            <div className="card__main "
                 onMouseEnter={() => showSelectedHoverTitle(title, 'MouseEnter')}
                 onMouseLeave={() => showSelectedHoverTitle(title, "MouseLeave")}>
                <h3 className="card__minititle" ref={minititleRef}>{minititle}</h3>
                <h2 className="card__title">{title}</h2>
                <p className="card__stuffing">{stuffing} </p>
                <p className="card__portionCount">{portionCount} порций</p>
                {gift.map((item, key) =>
                    <p key={item}
                       className="card__gift">{item}</p>
                )}
                <p className="card__weight">{weight} <span>кг</span></p>
                <img className="card__img" src={cat} alt='Pretty cat'/>
            </div>
            <div className={`card__bottom-default card__bottom`} ref={bottomRef}>
                Чего сидишь? Порадуй котэ,&nbsp;
                <a  href='##' className="card__buy">купи</a><span>.</span>
            </div>
                <div className={`card__bottom-selected card__bottom`}>{selectedText}</div>
            <div className={`card__bottom-disabled card__bottom`}>Печалька, {stuffing} закончился.</div>
        </div>

    )
}

Card.propTypes = {
    minititle: PropTypes.string,
    title: PropTypes.string,
    stuffing: PropTypes.string,
    portionCount: PropTypes.number,
    gift: PropTypes.array,
    weight: PropTypes.string,
    selectedText: PropTypes.string,
    status: PropTypes.string,
    minititleSelectedHover: PropTypes.string,
    toggleStatus: PropTypes.func,
    id: PropTypes.number
}

export default Card