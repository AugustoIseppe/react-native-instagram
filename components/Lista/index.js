import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        }
        this.mostrarLikes = this.mostrarLikes.bind(this);
        this.like = this.like.bind(this);
    }

    mostrarLikes(likers) {
        let feed = this.state.feed;

        if (feed.likers <= 0) {
            return;
        }

        return (
            <Text style={styles.nomeRodape}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        );
    }

    like() {
        let feed = this.state.feed;

        if (feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            });
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            });
        }
    }

    render() {
        return (
            <View style={styles.areaFeed}>
                <View style={styles.viewProfile}>
                    <Image source={{ uri: this.state.feed.imgperfil }} style={styles.fotoPerfil} />
                    <Text style={styles.userName}>{this.state.feed.nome}</Text>
                </View>
                <Image
                    style={styles.fotoPublicacao}
                    source={{ uri: this.state.feed.imgPublicacao }}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image source={this.state.feed.likeada === false ? require('./../../assets/images/like.png') : require('./../../assets/images/likeada.png')} style={
                            styles.iconeLike
                        } />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSend}>
                        <Image source={require('./../../assets/images/send.png')} style={
                            styles.iconeLike
                        } />
                    </TouchableOpacity>
                </View>

                {
                    this.mostrarLikes(this.state.feed.likers)
                }

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>

                    <Text style={styles.descRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    areaFeed: {
        marginBottom: 10
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5
    },
    viewProfile: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    userName: {
        fontSize: 12,
        textAlign: 'left',
        color: '#000000',
        marginLeft: 8
    },
    fotoPerfil: {
        width: 30,
        height: 30,
        borderRadius: 25
    },
    fotoPublicacao: {
        resizeMode: 'cover',
        flex: 1,
        height: 400,
        alignItems: 'center',
    },
    iconeLike: {
        width: 33,
        height: 33
    },
    btnSend: {
        paddingLeft: 5
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nomeRodape: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5
    },
    descRodape: {
        fontSize: 15,
        paddingLeft: 5,
        color: '#000'
    },
});

export default Lista;