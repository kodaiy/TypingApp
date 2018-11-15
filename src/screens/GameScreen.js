import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

import QUESTIONS from '../../assets/data/questions.json';
import Cloud from '../elements/Cloud';
import Mountain from '../elements/Mountain';
import BannerAd from '../components/BannerAd';

const timer = require('react-native-timer');

class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      restTime: 3000,
      questionKanji: '',
      questionHiragana: '',
      answer: '',
    };

    this.level = this.props.navigation.state.params.level;
    this.questionList = QUESTIONS.question_list.filter(q => q.level === this.level);
  }

  componentDidMount() {
    timer.setInterval(
      this,
      'test',
      () => {
        this.setState({ restTime: this.state.restTime - 1 });
        if (this.state.restTime === 0) {
          this.props.navigation.navigate('Result');
        }
      },
      1000,
    );

    this.setQuestion();
  }

  componentWillUnmount() {
    timer.clearInterval(this);
  }

  setQuestion() {
    this.setState({
      questionKanji: this.questionList[0].question_kanji,
      questionHiragana: this.questionList[0].question_hiragana,
    });
  }

  inputAnswer(answer) {
    this.setState({ answer });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Cloud style={{ left: 20, top: 35 }} />
          <Cloud style={{ right: 20, top: 65 }} />
          <Mountain />

          <View style={styles.questionNo}>
            <Text style={styles.questionNoText}>
              {this.state.count}
              問目
            </Text>
          </View>
          <View style={styles.restTime}>
            <Text style={styles.restTimeText}>
              残り：
              {this.state.restTime}
              秒
            </Text>
          </View>
          <View>
            <View style={styles.question}>
              <View style={styles.questionKanji}>
                <Text style={styles.questionKanjiText}>
                  {/* 最大33字 */}
                  {this.state.questionKanji}
                  {/* 徳川家康は関ヶ原の戦いに勝利し、その後江戸幕府を開いたテストテスト */}
                </Text>
              </View>
              <View style={styles.questionHiragana}>
                <Text style={styles.questionHiraganaText}>
                  {/* 最大60字 */}
                  {this.state.questionHiragana}
                  {/* とくがわいえやすはせきがはらのたたかいにしょうりし、そのごえどばくふをひらいたてすとてすとてすとてすとてすとてすとてすと */}
                </Text>
              </View>
            </View>

            <View style={styles.answer}>
              <TextInput
                style={styles.answerText}
                multiline
                autoFocus
                contextMenuHidden={true}
                onChangeText={text => this.inputAnswer(text)}
                value={this.state.answer}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonArea}>
        </View>
        <BannerAd />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  body: {
    backgroundColor: '#08F1F1',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionNo: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  questionNoText: {
    fontSize: 15,
    textAlign: 'left',
  },
  restTime: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  restTimeText: {
    fontSize: 15,
    textAlign: 'right',
  },
  question: {
    backgroundColor: 'rgba(255, 173, 50, 0.8)',
    height: 200,
    width: 200,
  },
  questionKanji: {
    padding: 5,
  },
  questionKanjiText: {
    lineHeight: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  questionHiragana: {
    padding: 5,
  },
  questionHiraganaText: {
    lineHeight: 20,
    fontSize: 15,
    textAlign: 'center',
  },
  answer: {
    backgroundColor: 'rgba(33, 183, 247, 0.8)',
    height: 100,
    width: 200,
    padding: 5,
  },
  answerText: {
    textAlign: 'center',
    fontSize: 15,
  },
  buttonArea: {
    backgroundColor: '#7FE21D',
    flex: 2,
  },
});

export default GameScreen;
