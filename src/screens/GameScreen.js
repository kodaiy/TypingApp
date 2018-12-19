import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';

import QUESTIONS from '../../assets/data/questions.json';
import Cloud from '../elements/Cloud';
import Mountain from '../elements/Mountain';
import I01RabbitIcon from '../elements/I01RabbitIcon';
import I02BearIcon from '../elements/I02BearIcon';
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
      correctAnswer: '',
      answer: '',
      pointer: 0,
      apperAnim: new Animated.Value(0),
    };

    this.level = this.props.navigation.state.params.level;
    this.questionList = QUESTIONS.question_list.filter(q => q.level === this.level);
  }

  componentDidMount() {
    timer.setInterval(
      this,
      'test',
      () => {
        this.setState(prevState => ({ restTime: prevState.restTime - 1 }));
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
    const questionNo = Math.floor(Math.random() * this.questionList.length);
    this.setState({
      questionKanji: this.questionList[questionNo].question_kanji,
      questionHiragana: this.questionList[questionNo].question_hiragana,
    });
  }

  inputAnswer(text) {
    // 入力文字列から未正解部分を取得
    const answer = text.slice(this.state.pointer);
    let revisedPointer = this.state.pointer;

    // 取得文字列をstateのanswerに代入
    this.setState({ answer });

    // 複数文字入力時に先頭から1文字ずつ判定
    for (let i = 0; i < answer.length; i += 1) {
      // ひらがなかつ正解文字列と入力文字列が一致する場合（つまり正解の場合）
      if (answer[0].match((/^[ぁ-ん、。]$/)) && this.state.questionHiragana[this.state.pointer] === answer[0]) {
        // pointerの移動と、正解文字列をcorrectAnswerへ移し替え
        // setState直後にstateが更新されないため、一旦別変数に格納
        revisedPointer += 1;
        this.setState({ pointer: revisedPointer });
        this.setState(prevState => ({ correctAnswer: prevState.correctAnswer + answer[0] }));
        this.setState(prevState => ({ answer: prevState.answer.slice(1) }));
      } else {
        // はずれだったら、最初から入力を待つためforを抜ける
        break;
      }
    }

    if (this.state.questionHiragana.length === revisedPointer) {
      // 最後まで正解文字列を入力し終わったら、次の問題を読み込む
      Animated.timing(
        this.state.apperAnim,
        {
          toValue: 1,
          duration: 1000,
        },
      ).start(
        () => {
          Animated.timing(
            this.state.apperAnim,
            {
              toValue: 0,
              duration: 0,
            },
          ).start();
          this.setQuestion();
          this.setState({ correctAnswer: '' });
          this.setState({ pointer: 0 });
          this.setState(prevState => ({ count: prevState.count + 1 }));
        },
      );
    }
  }

  render() {
    let { apperAnim } = this.state;

    return (
      <View style={styles.container}>
        <BannerAd />

        <KeyboardAvoidingView style={styles.body} behavior="height" enable>
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

          <View style={styles.qaArea}>
            <View style={styles.question}>
              <View style={styles.questionKanji}>
                <Text style={styles.questionKanjiText}>
                  {/* 最大33字 */}
                  {this.state.questionKanji}
                  {/* 徳川家康は関ヶ原の戦いに勝利し、その後江戸幕府を開いたテストテスト */}
                </Text>
              </View>
              <View style={styles.questionHiragana}>
                <Text style={styles.questionHiraganaText1}>
                  {/* 最大60字 */}
                  {this.state.questionHiragana.substr(0, this.state.pointer)}
                  <Text style={styles.questionHiraganaText2}>
                    {this.state.questionHiragana.substr(this.state.pointer)}
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.answer}>
              <TextInput
                style={styles.answerText}
                multiline
                autoFocus
                onChangeText={text => this.inputAnswer(text)}
                value={this.state.correctAnswer + this.state.answer}
              />
            </View>

            <Animated.View style={{ ...styles.circle, opacity: apperAnim }}>
              <Text style={styles.circleText}>
                ○
              </Text>
            </Animated.View>
          </View>

          <I02BearIcon style={{ left: 20, bottom: 10 }} />
          <I02BearIcon style={{ right: 20, bottom: 10 }} />

        </KeyboardAvoidingView>

        <View style={styles.buttonArea}>
        </View>
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
  qaArea: {
    height: 240,
    width: 200,
    marginTop: 20,
  },
  question: {
    backgroundColor: 'rgba(255, 173, 50, 0.8)',
    flex: 2,
    width: '100%',
  },
  questionKanji: {
    padding: 3,
  },
  questionKanjiText: {
    lineHeight: 18,
    fontSize: 16,
    textAlign: 'center',
  },
  questionHiragana: {
    padding: 3,
  },
  questionHiraganaText1: {
    lineHeight: 18,
    fontSize: 15,
    textAlign: 'center',
    color: '#0000ff',
  },
  questionHiraganaText2: {
    color: '#000000',
  },
  answer: {
    backgroundColor: 'rgba(33, 183, 247, 0.8)',
    flex: 1,
    width: '100%',
    padding: 3,
  },
  answerText: {
    textAlign: 'center',
    fontSize: 15,
  },
  circle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent:
    'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 200,
    color: '#ff0000',
  },
  buttonArea: {
    backgroundColor: '#7FE21D',
    flex: 5,
  },
});

export default GameScreen;
