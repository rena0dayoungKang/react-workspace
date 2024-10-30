import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src:'/main.jpg',
        caption:'메인'
    },
    {
        src:'/logo192.png',
        caption:'로고'
    },
    {
        src:'/logo512.png',
        caption:'메인'
    }
]
export default function CarouselEx() {
    return(
        <>
            <UncontrolledCarousel items={items}/>
        </>
    )
}