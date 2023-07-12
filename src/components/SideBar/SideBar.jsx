import React from "react";
import { SidebarWrapper, IconImage, IconLink } from "./SideBar_Style";

function Sidebar() {
  return (
    <SidebarWrapper>
      <IconLink href="https://instagram.com/uwon9305?igshid=Y2I2MzMwZWM3ZA==">
        <IconImage src="instargram.png" alt="Instagram" />
      </IconLink>
      <IconLink href="https://cafe.naver.com/banham2020">
        <IconImage src="Naver.png" alt="Naver Cafe" />
      </IconLink>
    </SidebarWrapper>
  );
}

export default Sidebar;
