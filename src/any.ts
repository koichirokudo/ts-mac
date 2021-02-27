import axios from 'axios';
export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// axios.get で https の GET method が使用できる
axios.get(url).then(function (response) {
    // interface を使用することでオリジナルの型を作成できる
    interface Article {
      id: number;
      title: string,
      description: string,
    }
    // let data: any; // エラーがでないのでいかん 一時的に使うだけ。 やむを得ない場合のみ使うこと。
    let data: Article[];
    data = response.data;
    data = [
      {
        id: 1,
        title: 'title1',
        description: 'description'
      }
    ]
    console.log(data);
});