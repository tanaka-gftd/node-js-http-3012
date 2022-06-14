'use strict';

//httpモジュールのインポート
const http = require('http');

//以下記述方式については、httpモジュールのサイトを参考にしよう
const server = http
  .createServer((req, res) => {

    //console.info...情報のログをコンソールに出力する関数
    console.info(

      //ログに表示する文字列の形式を設定
      //new Date()は、テンプレートリテラルを使って文字列に埋め込むことで、自動的に文字列に変換される
      //req.socket.remoteAddress...リクエストの送信元IP情報
      `[${new Date()}] Request by ${req.socket.remoteAddress}`
    );
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    });
    res.write(req.headers['user-agent']);
    res.end();
  })
  .on('error', e => { //サーバでエラーが発生したら、ログとして表示
    console.error(`[${new Date()}] Server Error`, e)
  })

  .on('clientError', e => { //クライアントでエラーが発生したら、ログとして表示
    console.error(`[${new Date()}] Client Error`, e);
  });
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
