const makeClasses = (...classes) => classes.filter(i => Boolean(i)).join(' ');

export default React => {

  const CardListItem = ({card, currentCardId}) => (
    <li key={card.id}
      className={ makeClasses('card-list-item',
      card.id === currentCardId ? 'current-card' : '')
    }>{ card.name }</li>
  );

  return ({ courseTitle, cardContent, isCompleted, cardsList, currentCardId }) => (
    <div className="card-player">
      <div className="nav-bar">
        <h1 className="course-title">{ courseTitle }</h1>
      </div>
      <div className="card-container">
        <div className="card-content">{ cardContent }</div>
        <div className="next-card"><div className="spacer"></div>
          <button className={ makeClasses(
            'button btn',
            isCompleted ? 'btn-success' : ''
           ) }
           disabled={ !isCompleted }>Continue</button>
        </div>
      </div>
      <ul className="card-list">
        {
          cardsList.map(card => {
            return CardListItem({ card, currentCardId });
          })
        }
      </ul>
    </div>
  );
};
