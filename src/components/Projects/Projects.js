import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kaerblog from "../../Assets/Projects/kaerblogg.jpg";
import maka from "../../Assets/Projects/maka.jpg";
import ekite from "../../Assets/Projects/ekite.png";
import baexampapp from "../../Assets/Projects/baexamapp.png";
import calorietrack from "../../Assets/Projects/calorietracker.jpg";
import jinji from "../../Assets/Projects/jinji.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projelerim </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baexampapp}
              isBlog={false}
              title="BAExamApp Sınav Yönetim Sistemi"
              description="ASP.NET MVC Core tabanlı web uygulaması, akademik kurumların sınavları yönetmelerini sağlar. Öğretmenler sınavlar düzenler, öğrenci performansını izler ve sınıflar oluşturabilir. Öğrenciler sınavlara katılır ve sonuçlarını görüntüler. Admin paneli, sistem yöneticilerine kullanıcıları yönetme yetkisi verir. Bu uygulama, sınav süreçlerini dijitalleştirerek öğretmenlere ve öğrencilere daha etkin bir deneyim sunar."
              ghLink="https://github.com/kaganeris/BAExamApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jinji}
              isBlog={false}
              title="Jinji Shop"
              description="Modern ve Verimli Bir Alışveriş Deneyimi Sunan Çok Katmanlı ASP.NET MVC .NET 6 Projesi. Admin Paneli sayesinde site içindeki ürünleri yönetebilir, istenmeyen içerikleri denetleyebilir ve genel sistemi kontrol edebilirsiniz. Admin panelden direkt olarak yapacağınız değişiklikler ile site görünümünde etki sahibi olabilirsiniz."
              ghLink="https://github.com/kaganeris/JinjiProject"
              demoLink="https://jinji.com.tr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ekite}
              isBlog={false}
              title="EKITE İnsan Kaynakları Yönetim Sistemi"
              description="Asp.NET API ve React.js ile geliştirilen uygulamamız modern bir iş yönetimine adım atmış şirketler için özel olarak tasarlanmış bir üründür. İş süreçlerini optimize etmeyi amaçlar ve şirket yöneticilerine, çalışanlara ve site yöneticilerine özel olarak tasarlanmış kullanıcı arayüzleri sunarak iş yönetimini daha verimli ve etkili hale getirir. "
              ghLink="https://github.com/kaganeris/Ekite"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kaerblog}
              isBlog={false}
              title="KaeR Blog"
              description="Asp.NET MVC ile geliştirilen bu uygulama, kullanıcılara üye ve yazar olarak iki ayrı rolde katılma imkanı sunuyor! Sisteme üye olanlar, sevdikleri yazarları takip edebilir, makaleleri okuyabilir ve ilgi çekici konuları yakından takip edebilirler. Ayrıca, yazarlar kendi makalelerini oluşturup paylaşma özgürlüğüne sahip.
              "
              ghLink="https://github.com/kaganeris/KaeRBlogProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calorietrack}
              isBlog={false}
              title="Calorie Tracker Diyet Otomasyonu"
              description="Bu projemizde .NET CORE 6.0 Windows Forms kullanarak kullanıcıların günlük öğün olarak aldıkları kalorilerini kolay bir şekilde oluşturup takibini yapabilecekleri bir windows form uygulaması oluşturmayı amaçladık."
              ghLink="https://github.com/kaganeris/CalorieTrackerDietProgram"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maka}
              isBlog={false}
              title="MAKA Burger"
              description="Bu projemizde Asp.Net MVC kullanarak hayali bir hamburger dükkanının aktif bir şekilde kullanabileceği sipariş web sitesi oluşturmayı amaçladık. Projemizi admin ve kullanıcı olmak üzere iki area'ya böldük. Admin olarak authorize ettiğimiz kullanıcılara admin panel üzerinden farklı yetkiler verdik"
              ghLink="https://github.com/kaganeris/HamburgerSiparisProjesi"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
