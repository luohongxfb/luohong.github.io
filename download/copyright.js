(() => {
  if (document.getElementsByClassName("post-copyright").length>0) {
    const author=document.getElementsByClassName("author")[0].textContent;
    document.addEventListener('copy', e => {
      let clipboardData = e.clipboardData || window.clipboardData;
      if(!clipboardData) {
        return;
      }

      e.preventDefault();

      const selection = window.getSelection().toString();

      const textData = selection + '\n-----------------------\n'
        + (author ? `作者: ${author}\n` : '')
        + '原文: ' + window.location.href + '\n'
        + '版权声明：本博客所有文章除特别声明外，均采用 CC BY-NC-SA 3.0 许可协议。转载请注明出处！\n\n';

      const htmlData = selection + '<br>-----------------------<br>'
        + (author ? `<b>作者</b>: ${author}<br>` : '')
        + `<b>原文</b>: <a href="${window.location.href}">${window.location.href}</a><br>`
        + '版权声明：本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank" rel="noopener">CC BY-NC-SA 3.0</a> 许可协议。转载请注明出处！<br>';

      clipboardData.setData('text/html', htmlData);
      clipboardData.setData('text/plain', textData);
    });
  }
})();
