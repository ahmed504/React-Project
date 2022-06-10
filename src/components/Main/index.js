import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title, MainSection, Container, Item, Img, ItemTitle, Button, Desc } from "./style";

const Main = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('js/data.json')
        .then(res => {setItems(res.data.items)})
    }, []);
    const itemList = items.map(item => {
        const path = `/${item.title}`;
        return (
            <Item key={item.id}>
                <Img src={item.image}/>
                <ItemTitle>{item.title}</ItemTitle>
                <Desc>{item.ing}</Desc>
                <Button to={path}>LEARN MORE</Button>
            </Item>
        )
    })
    return (
        <MainSection>
            <div className="container">
                <Title>Recipes from all over the world</Title>
                <Container>
                    {itemList}
                </Container>
            </div>
        </MainSection>
    )
}

export default Main;