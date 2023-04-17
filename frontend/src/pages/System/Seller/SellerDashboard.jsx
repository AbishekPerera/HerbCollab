import React from "react";
import "./styles/SellerDashboard.css";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import SellerSidebar from "../../../components/System/Sidebar/SellerSidebar";
import SellerNav from "../../../components/System/SystemNavBar/SellerNav";
import SellerInfoCard from "../../../components/System/DashInfoCard/SellerInfoCard";

const SellerDashboard = () => {
  return (
    <div className="mainContainer">
      <div className="sidebar">
        <SellerSidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <SellerNav />
        </div>
        <div className="content">
          <SellerInfoCard />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et non odio
          incidunt a veritatis voluptatem excepturi, magni, natus harum
          perspiciatis sapiente alias? Ad voluptate tenetur nostrum eveniet
          dolorem. Modi, ipsum. Placeat at voluptate, quisquam vero quibusdam ut
          consequatur, magni beatae autem dolorem illum! Et doloremque eum
          mollitia odit sunt, reiciendis eaque blanditiis. Nulla ad doloribus
          inventore unde voluptatum nisi iusto! Voluptatibus facilis mollitia
          recusandae repellendus nesciunt neque perferendis, exercitationem at
          modi placeat magnam amet tempora cupiditate maiores accusantium iusto,
          nostrum minima saepe voluptatum aut perspiciatis quasi rerum. Rem,
          beatae quod. Odio laborum nihil vero, asperiores, sint facere itaque
          velit iure dignissimos enim repellat quos dolorum harum cupiditate
          facilis, veniam et incidunt delectus sequi. Laboriosam atque
          distinctio nihil, nostrum voluptates ipsa? Magni omnis voluptate
          quidem earum expedita dolore velit distinctio, dolor reprehenderit
          voluptas autem labore dolorem ipsa atque ut? Velit mollitia hic eaque
          aspernatur voluptas veniam recusandae eos similique maxime eligendi!
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default SellerDashboard;
