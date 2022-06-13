import { Component } from "react";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList/list";
import RecipeForm from "./components/RecipeForm/form";

class App extends Component {
  state = {
    userTitle: '',
    userIng: '',
    userMethod: '',
    recipes: [
      {
        id: 1,
        image: "images/img-1.jfif",
        title: "بودينج الشيكولاتة",
        ing: "٢ كوب لبن - ١/٢ كوب سكر - ٣ ملاعق كبيرة نشا - ٢ ملعقة كبيرة دقيق - ١/٢ بار شيكولاتة خام( ١٠٠ جرام)",
        method: "بنضيف السكر للبن ونقلب كويس علي البارد، ثم نضيف النشا والدقيق ونقلب كويس ثم نرفعها علي النار ونقلب باستمرار ونضيف الشيكولاتة ونستمر في التقليب لحد ما الشيكولاتة تدوب والخليط يتقل معانا،نرفعه من علي النار ونسيبه شوية يبرد ( ممكن نحطه في التلاجة نص ساعة) ونطلعه وكدا يبقي جاهز للتقديم للتزيين: ممكن نضيف أي نوع كريمة،زي كريم شانتيه وعليه أي نوع فاكهة بنحبه"
      },
      {
        id: 2,
        image: "images/img-2.jfif",
        title: "الكريب",
        ing: "2 كوب دقيق – 2كوب لبن – رشة سكر – معلقة ملح صغيرة – ½ معلقة صغيرة خل",
        method: "نضيف السكر والملح علي الدقيق، ونضيف الخل علي اللبن في الخلاط نضع اللبن ثم نضيف المكونات الجافة ونضرب كويس علشان مايبقاش فيه أي تكتلات، بعدين نصفيه بالمصفاة ونسيب الخليط يرتاح من ربع ل نص ساعة، بعدين في طاسة غير لاصقة ندهنها دهنة بسيطة بالزيت، بمغرفة متوسطة نملاها بالخليط ونبدأ نفردها في الطاسة ونوزع الخليط بالتساوي ، واول ما يبدأ يمسك نفسه نقلبه علي الناحية التانية، ونطلعه علي طبق ونغطيه بفوطة نضيفة وهكذا باقي الكمية"
      },
      {
        id: 3,
        image: "images/img-3.jpg",
        title: "سمك فيليه",
        ing: "كيلو سمك فيليه ( أي نوع سمك تحبوه) – كاتشب - عصير خمس لمونات - فلفل أسود - ملح - كمون – كسبرة ناشفة  :الغطاء بيضة ١/٤ كوب لبن - كوب دقيق ١/٢ كوب نشا - كمون - كسبرة ناشفة",
        method: "نحط كل مكونات التتبيلة علي بعضها ونخلطها مع السمك كويس ونسيبها ساعة ، نحط البيضة في طبق ،والدقيق والكمون والكسبرة مع بعض في طبق نحط السمك في البيض وبعدين في الدقيق وبعدين نحمرها في الزيت"
      }
    ]
  }

  updateTitle = (e) => {
    this.setState({
      userTitle: e.target.value
    })
  }

  updateIng = (e) => {
    this.setState({
      userIng: e.target.value
    })
  }

  updateMethod = (e) => {
    this.setState({
      userMethod: e.target.value
    })
  }

  // addRecipe
  addRecipe = (e) => {
    e.preventDefault();
    let userTitle = this.state.userTitle;
    let userIng = this.state.userIng;
    let userMethod = this.state.userMethod;
    let recipes = this.state.recipes;
    if (e.target.title.value === '') {
      return false;
    }else{
      recipes.unshift({title: userTitle, ing: userIng, method: userMethod});
      this.setState({
        userTitle: '',
        userIng: '',
        userMethod: '',
        recipes
      })
    }
  }

  render() {
  const {recipes} = this.state;
  const recipeList = recipes.map((recipe, index) => {
    return (
      <RecipeList details={recipe}/>
    )
  });
    return (
      <div>
        <RecipeForm userTitle={this.state.userTitle} userIng={this.state.userIng} userMethod={this.state.userMethod} updateTitle={this.updateTitle} updateIng={this.updateIng} updateMethod={this.updateMethod} addRecipe={this.addRecipe}/>
        <div className="container">{recipeList}</div>
      </div>
    );
  }
}

export default App;
