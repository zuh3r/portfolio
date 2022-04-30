const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer id="footer">
      <div className="footer_top">
        <a href="#" onClick={() => scrollTop()} className="resumo_fn_totop">
          <span />
        </a>
      </div>
      <div className="footer_content">
        <div className="container">
          <p>
            Zuher Feki
            <br/>
            <a className="fn__link" href="tel:+61411639583">(+61) 411 639 583</a>{" "}
            <br/>
            <a className="fn__link" href="mailto:zuher.feki17@gmail.com">
              zuher.feki17@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
