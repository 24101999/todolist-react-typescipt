import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Info.module.css";
import { BiLeftArrow } from "react-icons/bi";
import img from "../../logo.svg";

interface d {
  id?: number;
  nome?: string;
  email?: string;
  idade?: number;
}

const Info = () => {
  const [dados, setDados] = useState<Array<d>>();
  const nav = useNavigate();
  const p = useParams();
  const id = p.id;

  useEffect(() => {
    axios.get(`http://localhost:1999/home/item.php?id=${id}`).then((res) => {
      setDados(res.data);
    });
  }, []);

  return (
    <div className={styles.item} style={{ backgroundImage: `url(${img})` }}>
      <button className={styles.back} onClick={() => nav("/home")}>
        <BiLeftArrow />
      </button>
      <div className={styles.block}>
        <div className={styles.elements}>
          <img src={img} alt="" />
          <h3>Nome</h3>
          <p>{dados ? dados[0].nome : ""}</p>
          <div className={styles.line}></div>
          <h3>E-mail</h3>
          <p>{dados ? dados[0].email : ""}</p>
          <div className={styles.line}></div>
          <h3>Idade</h3>
          <p>{dados ? dados[0].idade : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
