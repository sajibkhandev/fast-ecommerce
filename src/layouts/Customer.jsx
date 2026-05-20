
import Container from '../components/Container'
import CustomerCard from '../components/CustomerCard'
import Flex from '../components/Flex'
import Icon from '../assets/customericon1.png'


const Customer = () => {
  return (
    <section className='pb-[140px]'>
        <Container>
            <Flex className='justify-between'>
            <CustomerCard icon={Icon} title="FREE AND FAST DELIVERY" text="Free delivery for all orders over $140" />
            <CustomerCard icon={Icon} title="FREE AND FAST DELIVERY" text="Free delivery for all orders over $140" />
            <CustomerCard icon={Icon} title="FREE AND FAST DELIVERY" text="Free delivery for all orders over $140" />
            </Flex>
            
        </Container>
    </section>
  )
}

export default Customer