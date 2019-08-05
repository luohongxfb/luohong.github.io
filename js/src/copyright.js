(() => {
  //增加去除的文章名
  var exceptUrl = ["Centos-7利用yum安装apache-mysql-8-php7"];
  var url = window.location.href;
  var flag = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/i.test(url)
  if (flag) {
    var str = decodeURI(url.slice(url.search(/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/i) + 11, url.length - 1))
    flag = exceptUrl.indexOf(str) < 0
  }
  if (document.getElementsByClassName("post-copyright").length > 0 && flag) {
    const author = document.getElementsByClassName("author")[0].textContent;
    document.addEventListener('copy', e => {
      let clipboardData = e.clipboardData || window.clipboardData;
      if (!clipboardData) {
        return;
      }

      e.preventDefault();

      const selection = window.getSelection().toString();

      const textData = selection + '\n-----------------------\n'
        + (author ? `作者: ${author}\n` : '')
        + '原文: ' + window.location.href + '\n'
        + '版权声明：本博客所有文章除特别声明外，均采用 CC BY-NC-SA 3.0 许可协议。转载请注明出处！\n\n';

      const htmlData = selection + '<br/>-----------------------<br/>'
        + (author ? `<b>作者</b>: ${author}<br/>` : '')
        + `<b>原文</b>: <a href="${window.location.href}">${window.location.href}</a><br/>`
        + '版权声明：本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY-NC-SA 3.0</a> 许可协议。转载请注明出处！<br/>';

      clipboardData.setData('text/html', htmlData);
      clipboardData.setData('text/plain', textData);
    });
  }
})();
