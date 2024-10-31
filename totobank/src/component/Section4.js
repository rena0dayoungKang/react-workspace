import { Button } from "reactstrap";
export default function Section4() {
    return(
        <div style={{ width: "100%", marginTop: "50px" }}>
            <h3 className="section_title">
                함께 도전해서<br />
                재미있는 26주적금
            </h3>
            <p className="section_sub1">
                26주동안 변화하는 재미에 빠져있는 사이 <br />
                어느덧 만기 달성 경험을 맛보게 됩니다.<br />
            </p>
            <Button color="light" size="lg" style={{padding:"15px 30px", color:"gray"}}>26주적금&gt;</Button>&nbsp;&nbsp;<br/><br/><br/>
            <img src="/img/main-26weeks.png" alt="" width="500px" height="400px" />
        </div>
    )
  }