function Recommended() {
  return (
    <div className="Recommended">
      <div className="Recommended-header">
        <h3>Sugestões para você</h3>
      </div>
      <ul>
        <li>
          <img src="/avatar/kairos.png" alt="kairos" />
          <div className="Recommended-info">
            <span>@Kairos</span>
            <span>atualmente - Vagando</span>
          </div>
          <button className="Recommended-follow">Seguir</button>
        </li>
        <li>
          <img src="/avatar/max.png" alt="" />
          <div className="Recommended-info">
            <span>@tldrMax</span>
            <span>atualmente - 2015</span>
          </div>
          <button className="Recommended-follow">Seguir</button>
        </li>
        <li>
          <img src="/avatar/mcfly.png" alt="" />
          <div className="Recommended-info">
            <span>@mcflying</span>
            <span>atualmente - 2015?</span>
          </div>
          <button className="Recommended-follow">Seguir</button>
        </li>
        <li>
          <img src="/avatar/crono.webp" alt="" />
          <div className="Recommended-info">
            <span>@cronoTHEtrigger</span>
            <span>atualmente - Fim do Tempo</span>
          </div>
          <button className="Recommended-follow">Seguir</button>
        </li>
        <li>
          <img src="/avatar/outerwilds.png" alt="" />
          <div className="Recommended-info">
            <span>@OWVentures</span>
            <span>incapaz de rastrear</span>
          </div>
          <button className="Recommended-follow">Seguir</button>
        </li>
      </ul>
    </div>
  );
}

export default Recommended;