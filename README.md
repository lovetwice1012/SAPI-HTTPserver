# SAPI-HTTPserver
SAPIによるTTSをhttp経由で使用できるようにするサーバーです  
SAPIforVOICEBOXを使用することでVOICEBOXでも使用することが可能です  
CeVio AIでも使用可能です(サーバーを外部公開しないでください)    

localhost:1000 で動作します.  

### パラメーター一覧:

#### name:
読み上げするキャラクターの名前(起動時に利用できるキャラクターの一覧が出ますので、それをコピペしてください)  

#### text:
読み上げたいテキストを入力してください

### アクセス例:
```
http://localhost:1000/?name=Microsoft%20Haruka%20Desktop&text=%E5%88%9D%E3%82%81%E3%81%BE%E3%81%97%E3%81%A6%E3%80%82%E3%81%93%E3%81%AE%E9%9F%B3%E5%A3%B0%E3%81%AFMicrosoft%2520Haruka%2520Desktop%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E8%AA%AD%E3%81%BF%E4%B8%8A%E3%81%92%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82
```
「初めまして。この音声はMicrosoft Haruka Desktopを使用して読み上げています。」  
という音声が出力されるはずです    

###　もし何らかのエラーが発生した場合
error.wavが代わりに送信されます
また、コンソール上にログが表示されます
