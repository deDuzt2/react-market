

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between p-45">
        <div className="header-left d-flex align-center">
          <img width={40} height={40} src="img/header/logo.png" alt="logo" />
          <div className="header-info">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="header-right d-flex align-center">
          <div className="header-buy d-flex align-center mr-30">
            <img className="mr-10" src="img/header/basket.svg" alt="basker" />
            <div className="price">1205 руб.</div>
          </div>
          <img className="mr-30" src="img/header/heart.svg" alt="heart" />
          <img src="img/header/user.svg" alt="user" />

        </div>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="cards">
          <div className="card">
            <img width={133} height={112} className="img-snkrs" src="img/sneakers/1.jpg" alt="sneakers" />
            <div className="snkrs-name">Мужские Кроссовки Nike Blazer Mid Suede</div>
            <div className="bottom-card">
              <div className="info-card">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="img/card/add.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} className="img-snkrs" src="img/sneakers/2.jpg" alt="sneakers" />
            <div className="snkrs-name">Мужские Кроссовки Nike Air Max 270</div>
            <div className="bottom-card">
              <div className="info-card">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="img/card/add.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} className="img-snkrs" src="img/sneakers/3.jpg" alt="sneakers" />
            <div className="snkrs-name">Мужские Кроссовки Nike Blazer Mid Suede</div>
            <div className="bottom-card">
              <div className="info-card">
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button>
                <img src="img/card/add.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} className="img-snkrs" src="img/sneakers/4.jpg" alt="sneakers" />
            <div className="snkrs-name">Кроссовки Puma X Aka Boku Future Rider</div>
            <div className="bottom-card">
              <div className="info-card">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button>
                <img src="img/card/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
