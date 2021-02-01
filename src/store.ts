import SubX from 'subx';
import URI from 'urijs';
import axios from 'axios';

const urlSearchParams = new URLSearchParams(
  new URL(window.location.href).search
);
const redirectUri = window.location.origin + window.location.pathname;

const store = SubX.create({
  ready: false,
  hello: 'world',
  authorizeUri: new URI('https://github.com/login/oauth/authorize')
    .search({
      client_id: process.env.GITHUB_NOTE_CLIENT_ID!,
      redirect_uri: redirectUri,
    })
    .toString(),
  async init() {
    const code = urlSearchParams.get('code');
    if (code) {
      console.log('oauth');
      const r = await axios.post(
        'https://github.com/login/oauth/access_token',
        {
          client_id: process.env.GITHUB_NOTE_CLIENT_ID!,
          client_secret: process.env.GITHUB_NOTE_CLIENT_SECRET!,
          code,
        }
      );
      console.log(r.data);
    }
  },
});

export default store;
