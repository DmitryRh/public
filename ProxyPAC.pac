function FindProxyForURL(url, host)
 {
 if (isPlainHostName(host))
  return "DIRECT";
 else if (shExpMatch(host, "*vk.com*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*userapi.com*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*vkuseraudio.net*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*vkuservideo.net*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*yandex.ru*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*yandex.ua*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*ya.ru*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*yandex.com*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*yandex.net*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*yandex.org*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*yandex.mobi*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*ok.ru*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*odnoklassniki.ru*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else
  return "DIRECT";
 }