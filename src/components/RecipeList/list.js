import { Container, ImgItem, Img, TitleSection, Title, TitleDesc, DescItem, Desc, Main } from "./style";

const RecipeList = (props) => {
    return (
        <Container key={props.details.id}>
            <ImgItem>
                <Img src={props.details.image}/>
            </ImgItem>
            <DescItem>
                <TitleDesc>{props.details.title}</TitleDesc>
                <Title>المكونات:</Title>
                <Desc>{props.details.ing}</Desc>
                <Title>طريقة التحضير:</Title>
                <Desc>{props.details.method}</Desc>
            </DescItem>
        </Container>
    )
}

export default RecipeList;