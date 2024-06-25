import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Merhabalar, Ben <span className="purple">Kağan Eriş </span>
            Full Stack Yazılım Geliştirme Uzmanıyım
            <br />
            <span className="purple">Bursa Uludağ Üniversitesi Makine Mühendisliği </span>
             bölümünden lisans derecesiyle mezun oldum.
            <br />
            Hızla gelişen teknolojiye olan ilgim ve bu gelişmelere katkıda bulunma isteğiyle yazılım alanına yöneldim.
            <br />
            Bu alanda sektöre hızla girebilmek adına <span className="purple">BilgeAdam Yıldız Yazılımcı Geliştirme Programı</span> 'na katıldım ve başarıyla tamamladım.
            <br />
            <br/>
            Kodlama dışında yapmayı sevdiğim diğer aktiviteler
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sportif Aktivitelere Katılmak
            </li>
            <li className="about-activity">
              <ImPointRight /> 3 Boyutlu Modelleme Yapmak
            </li>
            <li className="about-activity">
              <ImPointRight /> Rekabetçi Oyunlar Oynamak
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be Curious Not Judgemental!"{" "}
          </p>
          <footer className="blockquote-footer">Kağan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
