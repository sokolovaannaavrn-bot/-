import { useState } from 'react'

const products = [
  { name: 'ORA Classic', price: '24 900 ₽', image: '/01.webp' },
  { name: 'ORA Minimal', price: '29 900 ₽', image: '/02.webp' },
  { name: 'ORA Gold', price: '34 900 ₽', image: '/03.webp' },
]

function App() {
  const [menu, setMenu] = useState(false)
  const [cart, setCart] = useState(0)

  return (
    <div className="site">
      <header className="header">
        <a className="logo" href="#top">ORA<span>®</span></a>
        <nav className={menu ? 'nav open' : 'nav'}>
          <a href="#collection">Коллекция</a>
          <a href="#story">О бренде</a>
          <a href="#contact">Контакты</a>
        </nav>
        <button className="cart" onClick={() => setCart(cart + 1)}>Корзина ({cart})</button>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Меню">☰</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">SWISS MADE · EST. 1984</p>
            <h1>Время<br /><i>чувствовать.</i></h1>
            <p className="lead">Точные часы с характером. Созданы в Швейцарии для тех, кто выбирает свой ритм.</p>
            <a className="button" href="#collection">Смотреть коллекцию <span>↗</span></a>
          </div>
          <div className="hero-image"><img src="/collection-main.webp" alt="Коллекция часов ORA" /></div>
        </section>

        <section className="ticker"><span>PRECISION</span><b>✦</b><span>CRAFTED FOR LIFE</span><b>✦</b><span>SWISS HERITAGE</span></section>

        <section id="collection" className="collection">
          <div className="section-heading"><p className="eyebrow">01 — КОЛЛЕКЦИЯ</p><h2>Ваше время.<br /><i>Ваш стиль.</i></h2></div>
          <div className="products">{products.map((product) => <article className="product" key={product.name}>
            <div className="product-image"><img src={product.image} alt={product.name} /></div>
            <div className="product-info"><div><h3>{product.name}</h3><p>Swiss automatic · 40 mm</p></div><strong>{product.price}</strong></div>
            <button className="add" onClick={() => setCart(cart + 1)}>Добавить в корзину +</button>
          </article>)}</div>
        </section>

        <section id="story" className="story"><img src="/collection-a.webp" alt="Детали часов ORA" /><div><p className="eyebrow">02 — НАСЛЕДИЕ</p><h2>Создано,<br /><i>чтобы длиться.</i></h2><p>Мы верим, что хорошие вещи не следуют времени — они его создают. Каждая деталь ORA собрана вручную и рассчитана на поколения.</p><a className="text-link" href="#contact">Узнать больше ↗</a></div></section>
      </main>

      <footer id="contact"><div className="logo">ORA<span>®</span></div><p>Часы, которые говорят за вас.</p><small>© 2026 ORA Swiss. Все права защищены.</small></footer>
    </div>
  )
}

export default App