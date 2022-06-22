import Layout from '../components/Layout'
import Nombre from '../components/Nombre'
import Skill from '../components/Skill'

const Index = () => {
  return (
    <Layout>
      <header className="row">
        <div className="col-md-6">
          <Nombre />
        </div>
        <div className="col-md-6">
          <Skill />
        </div>
      </header>
    </Layout >
  )
}

export default Index