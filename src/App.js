
import './App.css';
import Card from './components/Card';


function App() {
  const cardsArr = [
    {
      cardHeader: "card1",
      cardId: 1,
      cardStatus: "active",
      isSelected: false,
      flavour: "с фуагра",
      portionsAmount: "10 ",
      portionsText: "порций",
      presentAmount: "",
      present: "мышь в подарок",
      weight: "0,5",
      description: "Печень утки разварная с артишоками.",
      isOver: "Печалька, с фуа-гра закончился.",
    },
    {
      cardHeader: "card2",  
      cardId: 2,
      cardStatus: "active",
      isSelected: true,
      flavour: "с рыбой",
      portionsAmount: "40 ",
      portionsText: "порций",
      presentAmount: "2",
      present: "мыши в подарок",
      weight: "2",
      description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      isOver: "Печалька, с рыбой закончился.",
    },
    {
      cardHeader: "card3",
      cardId: 3,
      cardStatus: "disabled",
      isSelected: false,
      flavour: "с курой",
      portionsAmount: "100 ",
      portionsText: "порций",
      presentAmount: "5",
      present: "мышей в подарок заказчик доволен",
      weight: "5",
      description: "Филе из цыплят с трюфелями в бульоне.",
      isOver: "Печалька, с курой закончился.",
    },


  ]

  

  return (
    <div className="App">
      <h1 className='App-header'>Ты сегодня покормил кота?</h1>
      <div className='App-content'>
        {
          cardsArr.map(card => <Card card={card} key={card.cardId} />)
        }
      </div>


    </div>
  );
}

export default App;
