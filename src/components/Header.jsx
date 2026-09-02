function Header() {
  return (
    <header>
        <div className="logo">🌞 weather</div>
        <nav>
            <ul>
                <li><a href="/">Today</a></li>
                <li><a href="/tomorrow">Tomorrow</a></li>
                <li><a href="/monthly">Monthly Forecast</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;