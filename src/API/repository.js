import axios from 'axios';



export class Repository {
    url = 'https://sas4nzx8f6.execute-api.us-east-2.amazonaws.com/Default/'


    getMentions(ticker) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getMentions`, {params: {ticker}})
                .then(x => resolve(x['data']))
                .catch(err => {
                    alert(err);
                    reject(err);
                })
        });
    }
}