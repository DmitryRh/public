function FindProxyForURL(url, host)
 {
 if (isPlainHostName(host))
  return "DIRECT";
// VK
 else if (shExpMatch(host, "*vk.com*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*userapi.com*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*vkuseraudio.net*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*vkuservideo.net*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*vkcdnservice.com*"))
  return "SOCKS5 socks.zaborona.help:1488";
// Yandex
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
 else if (shExpMatch(host, "*nayndex.net*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*yandex.org*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*yandex.mobi*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*yadi.sk*"))
  return "SOCKS5 socks.zaborona.help:1488";
// Ok.Ru
 else if (shExpMatch(host, "*ok.ru*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*odnoklassniki.ru*"))
  return "SOCKS5 socks.zaborona.help:1488";
// Mail.Ru
 else if (shExpMatch(host, "*mail.ru*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*imgsmail.ru*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else if (shExpMatch(host, "*mradx.net*"))
  return "SOCKS5 socks.zaborona.help:1488";
 else
  return "DIRECT";
 }
