// 文件处理

/**
 * 读取本地文件
 */
export function getLocalFile(accept) {
  return new Promise((resolve) => {
    const fileSelector = document.createElement('input');
    fileSelector.type = 'file';
    fileSelector.accept = accept;

    function onChange() {
      if (!fileSelector.files) {
        return;
      }

      const selectedFile = fileSelector.files[0]; //获取读取的File对象
      const name = selectedFile.name; //读取选中文件的文件名
      const size = selectedFile.size; //读取选中文件的大小
      console.log('文件名:' + name + '大小：' + size);
      resolve(selectedFile);
    }

    fileSelector.addEventListener(
      'change',
      onChange,
      false
    );
    document.body.appendChild(fileSelector);
    fileSelector.click();
    document.body.removeChild(fileSelector);
  });
}

/**
 * 文件流转为 JSON 格式
 */
export async function readAsJSON(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader(); //这里是核心！！！读取操作就是由它完成的。

    reader.readAsText(file); //读取文件的内容

    reader.onload = function () {
      if (reader.result) {
        let json = JSON.parse(String(reader.result));
        resolve(json);
      } else {
        resolve(null);
      }
    };

    reader.onerror = reject;
  });
}

/**
 * 触发下载操作
 */
export function createDownload(fileName,blob) {
  const link = document.createElement('a');
  link.download = fileName;

  link.style.display = 'none';
  link.href = URL.createObjectURL(blob);

  // 触发点击
  document.body.appendChild(link);
  link.click();
  // 然后移除
  document.body.removeChild(link);
}