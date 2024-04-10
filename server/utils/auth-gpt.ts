interface YandexConfig {
  YANDEX_OAUTH: string;
  YANDEX_FOLDER_ID: string;
}

export async function getIamToken(config: YandexConfig): Promise<string> {
  const iamTokenResponse = await fetch('https://iam.api.cloud.yandex.net/iam/v1/tokens', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      yandexPassportOauthToken: config.YANDEX_OAUTH
    })
  });

  const { iamToken } = await iamTokenResponse.json();
  
  return iamToken;
}

export async function getRefreshToken(config: YandexConfig) {
  let iamToken = await getIamToken(config);

  const ONE_HOUR = 3600 * 1000;
  const refreshIamToken = async () => {
    iamToken = await getIamToken(config);
  };

  const tokenRefreshInterval = setInterval(refreshIamToken, ONE_HOUR);
  clearInterval(tokenRefreshInterval);

  return iamToken;
}
