import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'

export const Home = ({ greeting }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemListContainer />
        </div>
    )
}