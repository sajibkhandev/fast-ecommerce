import Container from "../components/Container"
import Flex from "../components/Flex"
import Pagination from "../components/Pagination"
const Products = () => {
  return (
    <section className="py-20">
      <Container>
        <Flex>
          <div className="w-3/12"> 
          Shop by Category
          </div>



          <div className="w-9/12">
          
             <Pagination itemsPerPage={9} />

          
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Products