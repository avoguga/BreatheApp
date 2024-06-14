import { MainButton } from '@/global/components/main-button';
import { authentication } from '@/infra/firebase';
import { View } from 'react-native';

const Home = () => {
  const { createAccount } = authentication;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    </View>
  );
};

export { Home };
