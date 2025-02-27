import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.title}>
          LUGARES PARA VIAJAR EM 2026
        </Text>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/san_francisco.png')}
          />
          <Text style={styles.textDescription}>
            São Francisco é uma cidade vibrante e icônica localizada no norte da Califórnia, famosa por sua rica história, arquitetura impressionante e cultura diversa.
            Um dos marcos mais conhecidos é a Ponte Golden Gate, uma maravilha arquitetônica que atravessa o estreito de Golden Gate, oferecendo vistas deslumbrantes da baía.
            A paisagem montanhosa da cidade proporciona panoramas incríveis, especialmente em locais como Twin Peaks.
            Outro destino imperdível é a Ilha de Alcatraz, lar da famosa prisão que já foi um centro de detenção.
            Os visitantes podem pegar um ferry e fazer um tour pela ilha, conhecendo sua fascinante história.
            O Fisherman’s Wharf, uma área movimentada à beira-mar, é famosa por seus frutos do mar, navios históricos e os leões-marinhos que descansam nos cais.
            Os bairros coloridos, como Chinatown e o Mission District, oferecem experiências culturais únicas, desde a culinária autêntica até a arte de rua vibrante.
            Não deixe de andar pelos famosos bondes, que sobem as colinas íngremes da cidade e oferecem uma maneira divertida de explorar as ruas cênicas de São Francisco.
            Com sua combinação de beleza natural, história rica e charme moderno, São Francisco oferece algo para todos os tipos de viajantes.
          </Text>
        </View>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/quebec.png')}
          />
          <Text style={styles.textDescription}>
            Quebec é uma cidade encantadora e histórica localizada na província de Quebec, no Canadá. Conhecida por sua rica herança francesa, Quebec é uma das cidades mais antigas da América do Norte e oferece uma combinação única de charme europeu e cultura canadense.
            A parte mais famosa da cidade é o Vieux-Québec (Velho Quebec), um bairro histórico que foi declarado Patrimônio Mundial da Humanidade pela UNESCO. Suas ruas de paralelepípedos, edifícios coloniais e muralhas imponentes transportam os visitantes para o passado, criando uma atmosfera mágica. No topo da colina, encontra-se o Château Frontenac, um icônico hotel que é um dos edifícios mais fotografados do mundo.
            Quebec também é famosa pela sua vibrante cena cultural, com museus, galerias de arte e teatros. O Carnaval de Quebec, realizado anualmente no inverno, é um dos maiores e mais famosos do mundo, oferecendo desfiles, festas e diversas atividades ao ar livre, como corrida de trenó e esculturas de gelo.
            Além de sua história e cultura, a cidade também é conhecida por sua culinária, com pratos tradicionais como poutine, torta de carne e maple syrup (xarope de bordo), que são destaque em muitos restaurantes locais.
            Com suas paisagens encantadoras, arquitetura histórica e cultura vibrante, Quebec é um destino imperdível para quem deseja explorar a riqueza do Canadá francófono.
          </Text>
        </View>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/victoria.png')}
          />
          <Text style={styles.textDescription}>
            Victoria é um estado localizado no sudeste da Austrália, conhecido por sua diversidade de paisagens, desde praias deslumbrantes até montanhas e florestas exuberantes. A capital de Victoria é Melbourne, uma das cidades mais cosmopolitas e culturais do país, famosa por sua cena artística, restaurantes de classe mundial, lojas independentes e eventos esportivos de destaque, como o Australian Open de tênis.
            Fora da cidade, o estado de Victoria oferece uma infinidade de atrações naturais e culturais. O Great Ocean Road, uma das rotas costeiras mais espetaculares do mundo, serpenteia ao longo do litoral e oferece vistas incríveis do oceano, além de atrações como os Doze Apóstolos, formações rochosas impressionantes que emergem do mar.
            A região de Yarra Valley é famosa por suas vinícolas e paisagens montanhosas, oferecendo aos visitantes a chance de degustar alguns dos melhores vinhos da Austrália. Para quem aprecia atividades ao ar livre, o Parque Nacional Grampians é um local popular para caminhadas e aventuras na natureza, com belas paisagens e vida selvagem local.
            Victoria também é conhecida por suas cidades menores e encantadoras, como Ballarat e Bendigo, que oferecem uma imersão na história da corrida do ouro da Austrália, além de museus e arquitetura vitoriana.
            Seja explorando Melbourne ou desfrutando das belezas naturais do estado, Victoria oferece uma experiência diversificada e inesquecível para os visitantes.
          </Text>
        </View>


      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  title:{
    textShadowColor:"red",
    textShadowOffset:{width:0, height:50},
    textShadowRadius:50,
    color:"white",
    fontSize:50,
    fontStyle:"italic"
  },

  car: {
    maxWidth: "39%",
    margin: "5%",
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  textDescription: {
    flexWrap: "wrap",
    width: '100%',
    textAlign: "left",
    padding: "0.5%",
    color: "white",
    fontStyle: 'italic'
  },

  places: {
    width: "100%",
  }


});
