import { useState } from "react";

const FormAddSubs = ({ setType, setPrice, type, price, setSubs, subs }) => {
  const [error, setError] = useState(false);

  const handleSubs = e => {
    e.preventDefault();
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    setError(false);
    const data = {
      type: type,
      price: price,
      id: Date.now()
    }
    setSubs([...subs, data]);
    setType("");
    setPrice("");
    // console.log(subs);
    // console.log(type);
    // console.log(price);
  }

  return (
    <div className="add-subscription">
      <h3>Agregar Suscripciones</h3>
      <form onSubmit={handleSubs}>
        <p>Servicio</p>
        <select onChange={e => setType(e.target.value)} value={type}>
          <option value="">-- Elegir --</option>
          <option value="netflix">Netflix</option>
          <option value="youtube">Youtube</option>
          <option value="disneyplus">Disney Plus</option>
          <option value="starplus">Star Plus</option>
          <option value="hbomax">HBO Max</option>
          <option value="primevideo">Prime Video</option>
          <option value="spotify">Spotify</option>
          <option value="apletv">Aple TV</option>
          <option value="anteltv">Antel TV</option>
          <option value="discord">Discord</option>
          <option value="geforcenow">Geforce Now</option>
          <option value="worldofwarcraft">World Of Warcraft</option>
          <option value="paramount">Paramount</option>
        </select>
        <p>Cantidad</p>
        <input type="number" placeholder="$20" onChange={e => setPrice(e.target.value)} value={price} />
        <input type="submit" value="Agregar" />
      </form>
      {error ? <p className="error">Campos invalidos</p> : null}
    </div>
  );
}

export default FormAddSubs;
