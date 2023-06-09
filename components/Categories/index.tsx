import styles from "./categories.module.scss"
import CategoryCard from "../CategoryCard"
import camera from "../../public/assets/images/camera.png"

const Categories = () => {
  return (
    <div className={ styles["categories"] }>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-ms-12 col-xs-12">
                    <div className={ styles["categories__header"] }>
                    <h1>Find verified services providers on the go</h1>
                    <p>Do not walk the entire street aimlessly looking for service providers.We have got you covered. Find service men from our pool of talents</p>
                </div>
            </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className={ styles["categories__content"] }>
                        <CategoryCard 
                            title='Photography'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium?'
                            thumbnail={ camera }
                            label='Find Photographers'
                        />
                        <CategoryCard 
                            title='Photography'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium?'
                            thumbnail={ camera }
                            label='Find Photographers'
                        />
                        <CategoryCard 
                            title='Photography'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium?'
                            thumbnail={ camera }
                            label='Find Photographers'
                        />
                        <CategoryCard 
                            title='Photography'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium?'
                            thumbnail={ camera }
                            label='Find Photographers'
                        />
                        <CategoryCard 
                            title='Photography'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium?'
                            thumbnail={ camera }
                            label='Find Photographers'
                        />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Categories