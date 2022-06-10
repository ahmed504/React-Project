import { Form, Input, IngInput, MethodInput, Button } from "./style";

const RecipeForm = (props) => {
    return (
        <Form className="container" onSubmit={props.addRecipe}>
            <Input type="text" id='title' value={props.userTitle} onChange={props.updateTitle} placeholder='Title'/>
            <IngInput type="text"  value={props.userIng} onChange={props.updateIng} placeholder='Ingrdients'/>
            <MethodInput type="text"  value={props.userMethod} onChange={props.updateMethod} placeholder='Method'/>
            <Button type="submit">Add Recipe</Button>
        </Form>
    )
}

export default RecipeForm;