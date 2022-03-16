import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

import { useTransactionModal } from '../../hooks/useTransactionModal';

export function Header() {
  const{handleOpenModal} = useTransactionModal()

  return (
    <Container>
      <Content>
        <img src={ logoImg } alt="dt.money" />
        <button 
          type="button"
          onClick={() => handleOpenModal('newTransaction')}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  )
} 