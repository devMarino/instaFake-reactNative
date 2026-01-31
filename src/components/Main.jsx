import { Image, StyleSheet, Text, View } from "react-native";

export default function Main () {
    return (
        <View styles={styles.container}>
            <View style={styles.moldura}>
                <Image
                style={styles.imagem}
                source={{uri: 'https://i.pinimg.com/1200x/8e/78/7a/8e787a22ce536ed71f17c093c9053044.jpg' }}
                />
                <View style={styles.perfil}>
                    <Text style={styles.nome}>Marcelo Marino</Text>
                    <View style={styles.linha}>
                        <View style={styles.coluna}>
                            <Text style={styles.infoNumero}>1</Text>
                            <Text style={styles.info}>posts</Text>
                        </View>
                        <View style={styles.coluna}>
                            <Text style={styles.infoNumero}>71</Text>
                            <Text style={styles.info}>seguidores</Text>
                        </View>
                        <View style={styles.coluna}>
                            <Text style={styles.infoNumero}>114</Text>
                            <Text style={styles.info}>seguindo</Text>
                        </View>
                    </View>
                </View>
            </View>
                <View style={styles.containerBio}>
                    <View style={styles.bioLinha}>
                        <View style={styles.bioColuna}>
                            <Text style={styles.bio}>☀️Fortaleza,CE</Text>
                            <Text style={styles.bioIdentificacao}> @ marcm_cb</Text>
                        </View>
                <View style={styles.caixaPerfil}>
                    {/* vou fazer */}
                </View>

                    </View>


                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBio: {
        flex: 7,
    },
    bioLinha: {
        flexDirection: 'row'
    },
    bioColuna:{
        alignItems: 'left',
        marginHorizontal: 35
    },
    bio: {
        marginBottom: 8,
        color: '#fff',
    },
    bioIdentificacao: {
        color: '#fff',
        fontWeight: 'bold'
    },
    imagem: {
        width: '33%',
        height: 130,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: 'rgb(6, 188, 6)',
        borderStyle: 'solid',
    },
    moldura: {
        flex: 2,
        marginTop: 80, 
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginLeft: 25,
    },
    nome: {
        color: '#fff',
        fontSize: 18,
        paddingLeft: 10.5

    },
    linha: {
        flexDirection: 'row',
        marginTop: 10
    },
    coluna: {
        alignItems: 'left',
        marginHorizontal: 12
    },
    infoNumero:{
        color: '#fff'
    },
    info: {
        color: '#fff',
    },
    perfil: {
        paddingLeft: 20,
    }


})