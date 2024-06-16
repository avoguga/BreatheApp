import { Container } from '@/global/components/container';
import { MainButton } from '@/global/components/main-button';
import { authentication } from '@/infra/firebase';

const Home = () => {
  const { createAccount } = authentication;
  return (
    <Container>
      <MainButton
        onPress={() =>
          createAccount({
            email: 'claudemirmacedo@gmail.com',
            password: '123123123',
          }).then((account) => console.log(account))
        }
      >
        <MainButton.IconView style={{ backgroundColor: 'yellow' }}>
          <MainButton.Icon name="activity" />
        </MainButton.IconView>
        <MainButton.Text>Bom dia</MainButton.Text>
      </MainButton>
    </Container>
  );
};

export { Home };
