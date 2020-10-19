import { connect } from 'react-redux'
import List from '../components/List'
import { fetchArticles }from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles: () => dispatch(fetchArticles())
    }
}
// write mapDispatchToProps below

// add mapDispatchToProps instead of null
export default connect(mapStateToProps, mapDispatchToProps)(List)