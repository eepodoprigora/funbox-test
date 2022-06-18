import styles from './App.module.css';
import Card from "./Components/Card";
import {useState} from "react";

function App() {
    const items = [
        {
            id: 0,
            minititle: "Сказочное заморское яство",
            minititleSelectedHover: "Котэ не одобряет?",
            title: "Нямушка",
            stuffing: "с фуа-гра",
            portionCount: 10,
            gift: ["мышь в подарок"],
            weight: "0,5",
            status: "default",
            selectedText: "Печень утки разварная с артишоками."
        },
        {
            id: 1,
            minititle: "Сказочное заморское яство",
            minititleSelectedHover: "Котэ не одобряет?",
            title: "Нямушка",
            stuffing: "с рыбой",
            portionCount: 40,
            gift: ["2 мыши в подарок"],
            weight: "2",
            status: "selected",
            selectedText: "Головы щучьи с чесноком да свежайшая сёмгушка."
        },
        {
            id: 2,
            minititle: "Сказочное заморское яство",
            minititleSelectedHover: "Котэ не одобряет?",
            title: "Нямушка",
            stuffing: "с курой",
            portionCount: 100,
            gift: ["5 мышей в подарок", "заказчик доволен"],
            weight: "5",
            status: "disabled",
            selectedText: "Филе из цыплят с трюфелями в бульоне."
        }
    ]

    const [cards, setCards] = useState(items)

    function toggleStatus(id) {
        let index = getItemIndexById(id);
        if (cards[index].status !== "disabled") {
            cards[index].status = (cards[index].status === "default") ? "selected" : "default";
            setCards(
                [...cards],
                cards[index].status
            );
        }
    }

    function getItemIndexById(id) {
        let res = -1;
        items.map((item, index) => {
            if (item.id === id) res = index;
        });
        return res;
    }

    return (
        <div className="App">
            <div className={styles.container}>
                <h1 className={styles.header}>Ты сегодня покормил кота?</h1>
                <ul className={styles.list}>
                    {cards.map((item, index) => (
                            <Card key={index}
                                  title={item.title}
                                  minititle={item.minititle}
                                  stuffing={item.stuffing}
                                  portionCount={item.portionCount}
                                  gift={item.gift}
                                  weight={item.weight}
                                  status={item.status}
                                  selectedText={item.selectedText}
                                  minititleSelectedHover={item.minititleSelectedHover}
                                  id={item.id}
                                  toggleStatus={toggleStatus}

                            />
                        )
                    )
                    }
                </ul>
            </div>

        </div>
    );
}

export default App;
