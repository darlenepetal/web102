import Card from "./Card";

const RecipeList = () => {
    return (
        <div className="container">
            <Card
                link="https://pinaenlacocina.com/tacos-dorados-picadillo/"
                image="https://pinaenlacocina.com/wp-content/uploads/2025/09/IMG_1868-320x321.jpg"
                title="Tacos Dorados"
                author="Sonia Mendez" />
            <Card
                link="https://pinaenlacocina.com/caldillo-verde-to/"
                image="https://pinaenlacocina.com/wp-content/uploads/2022/08/IMG_3566-320x321.jpg"
                title="Caldillo Verde"
                author="Sonia Mendez" />
            <Card
                link="https://www.mexicanplease.com/spicy-chicken-tinga/"
                image="https://www.mexicanplease.com/wp-content/uploads/2018/03/chicken-tinga-making-bean-cheese-tostadas-with-cilantro-680x450.jpg"
                title="Chicken Tinga"
                author="Patrick Calhoun" />
            <Card
                link="https://www.mexicanplease.com/tinga-tostadas/"
                image="https://www.mexicanplease.com/wp-content/uploads/2019/10/Tinga-Tostadas-12.jpg"
                title="Tinga Tostadas"
                author="Patrick Calhoun" />
            <Card
                link="https://gran.luchito.com/recipes/traditional-mexican/pollo-asado/"
                image="https://gran.luchito.com/wp-content/uploads/2021/05/New-Landscape-Hero-Pollo-Asado-660x500.jpg"
                title="Pollo Asado"
                author="Gran Luchito" />
            <Card
                link="https://gran.luchito.com/recipes/fajitas/chicken-fajitas-chipotle/"
                image="https://gran.luchito.com/wp-content/uploads/2018/10/Chicken-Fajitas-7-1-660x500.jpg"
                title="Chicken Fajitas"
                author="Gran Luchito" />
            <Card
                link="https://gran.luchito.com/recipes/nachos/street-corn-nachos/"
                image="https://gran.luchito.com/wp-content/uploads/2021/07/Landscape-Hero-Street-Corn-Nachos-1-660x500.jpg"
                title="Street Corn Nachos"
                author="Gran Luchito" />
            <Card
                link="https://gran.luchito.com/recipes/tacos/slow-cooker-lamb/"
                image="https://gran.luchito.com/wp-content/uploads/2018/12/Slow-Cooker-Chipotle-Lamb-1-950x700.jpg"
                title="Chipotle Lamb"
                author="Gran Luchito" />
            <Card
                link="https://www.muydelish.com/chicken-tortilla-soup-low-fat/"
                image="https://www.muydelish.com/wp-content/uploads/2021/09/sopa-de-tortilla-1.jpg"
                title="Tortilla Soup"
                author="Ana Frias" />
            <Card
                link="https://www.muydelish.com/tres_leches_cake/"
                image="https://www.muydelish.com/wp-content/uploads/2021/01/pastel-de-tres-leches-360x360.jpg"
                title="Tres Leches"
                author="Ana Frias" />
            <Card
                link="https://www.muydelish.com/enchiladas-rojas/"
                image="https://www.muydelish.com/wp-content/uploads/2022/01/enchiladas-mexican.jpg"
                title="Enchiladas Rojas"
                author="Ana Frias" />
            <Card
                link="https://www.muydelish.com/tortas-cochinita-pibil/"
                image="https://www.muydelish.com/wp-content/uploads/2023/09/torta-pibil-torta.jpg"
                title="Pork Tortas"
                author="Ana Frias" />
        </div>
    )
}

export default RecipeList;