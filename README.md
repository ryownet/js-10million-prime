# JSでN個目の素数を出力する

## node.js v0.12


## 実行
## ターミナルで

```
$ node prime.js [inputNumber]

ex) 100個目の素数を出力する
$ node prime
100
　ただし inputNumberは2以上の自然数
　入力は1行のみとし、改行が入る

　入力を終えるときはCtrl-Dとか
```

```
入力例
$ node prime
100

出力
100,th prime:541(100番目の素数は541)
t: 1ms
```

```
入力例
$ node prime
1000

出力
1000,th prime:7919
t: 4ms
```

```
入力例
$ node prime
10000

出力
10000,th prime:104729
t: 188ms
```

### 残念
- このプログラムではせいぜい10万個目くらいまでが限界っぽい。
- 10万個目の素数 1299709 16568ms（16.6秒)フリーズしたかと思った

