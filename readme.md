# Coding Files

* package.jsonおよびgulp(gulpfile.js)を使い、Webコーディングに便利なデータを入れています。
* サンプル画像やCSSも入っています。

## 作業の流れ

1. Coding Filesを自分のパソコンにclone（ダウンロード）します。

``git clone https://github.com/blockworks/codingFiles.git``

2. ダウンロードしたディレクトリへ移動します。

``cd codingFiles``

3. gulpの関連ファイルをインストールします。（package.jsonの内容を元に自動でインストールされます）

``npm install``

4. 対象ファイルを監視します。（ブラウザが起動します）

``gulp``


## ファイル構成の説明

* distディレクトリ…コンパイルやコピーした最終納品ファイル郡がここにまとめられます
* gulpfile.js…gulpプラグインを使用するためのプログラムが記述されています
* LICENSE…このファイル郡のライセンスです
* package.json…関連gulpファイルをインストールするための設定ファイルです
* readme.md…このファイルです
* srcディレクトリ…こちらの中のファイル群を編集します。gulpを起動していれば、修正は全てdistディレクトリに反映されます。
