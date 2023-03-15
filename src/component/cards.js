import React from "react";
import Card from "./card";
 
let Profile = [
  { id:1,nama: "Andi", umur: 25, pekerjaan: "Programmer", lulusan: "ITB" },
  { id:2,nama: "Budi", umur: 30, pekerjaan: "Desainer", lulusan: "Universitas Trisakti" },
  { id:3,nama: "Cindy", umur: 28, pekerjaan: "Marketing", lulusan: "Universitas Indonesia" },
  { id:4,nama: "David", umur: 33, pekerjaan: "Pengusaha", lulusan: "Universitas Gadjah Mada" },
  { id:5,nama: "Eva", umur: 27, pekerjaan: "Akuntan", lulusan: "Universitas Airlangga" },
  { id:6,nama: "Faisal", umur: 29, pekerjaan: "Dokter", lulusan: "Universitas Diponegoro" },
  { id:7,nama: "Gina", umur: 26, pekerjaan: "Jurnalis", lulusan: "Universitas Padjajaran" },
  { id:8,nama: "Hendra", umur: 32, pekerjaan: "Insinyur", lulusan: "Institut Teknologi Bandung" },
  { id:9,nama: "Ika", umur: 31, pekerjaan: "Guru", lulusan: "Universitas Negeri Jakarta" },
  { id:10,nama: "Joko", umur: 28, pekerjaan: "Penulis", lulusan: "Universitas Sebelas Maret" }
];



const Cards = () => {
  const [data] = React.useState(Profile);
  return(
    <div className="cards">
      {data.map(item=><Card key={item.id} name={item.nama} umur={item.umur} job={item.pekerjaan} lulusan={item.lulusan}/>)}
    </div>
  )
  
}
export default Cards;