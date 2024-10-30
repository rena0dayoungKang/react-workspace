import { Card, CardImg, CardText, CardHeader, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function ReactstrapCard() {
    return (
        <div style={{width:'300px', height:'500px'}}>
            <Card style={{ backgroundColor: 'white'}}>
                <CardImg bottom height="100%" src="/user.png" alt="user"/>
                <CardBody>
                    <CardTitle><b>유저</b></CardTitle>
                    {/* <CardSubtitle>기본 유저 이미지</CardSubtitle> */}
                    {/* <CardText>개인정보 설정에서 유저 이미지를 원하는 이미지로 변경할 수 있습니다</CardText> */}
                    <CardText>기본 유저 이미지</CardText>
                    <Button>자세히 보기</Button>
                </CardBody>
            </Card>
        </div>
    )
}