import axios from "axios";
import { useEffect, useState } from "react";
import { Container, ImgItem, Img, TitleSection, Title, TitleDesc, DescItem, Desc, Main } from "./style";
const Ingredients = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('js/data.json')
        .then(res => {setItems(res.data.items)})
    }, []);
    const IngPage = items.filter((item, i) => item.id < 2).map((filteredItem) => {
        return (
            <Container key={filteredItem.id}>
                <ImgItem>
                    <Img src={filteredItem.image}/>
                    <TitleSection>
                        <Title>طريقة عمل</Title>
                        <TitleDesc>{filteredItem.title}</TitleDesc>
                    </TitleSection>
                </ImgItem>
                <DescItem>
                    <Title>المكونات:</Title>
                    <Desc>{filteredItem.ing}</Desc>
                    <Title>طريقة التحضير:</Title>
                    <Desc>{filteredItem.method}</Desc>
                </DescItem>
            </Container>
        )
    });
    return (
        <Main className="container">
            {IngPage}
        </Main>
    );
}

export default Ingredients;

// https://indokhadyaam.smaranjitghose.com/