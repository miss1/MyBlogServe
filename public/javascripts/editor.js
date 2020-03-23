let myEditor = ''
ClassicEditor.create( document.querySelector( '#editor' ), {
  image: {
    toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],
    styles: ['full','alignLeft','alignRight']
  },
  ckfinder: {
    uploadUrl: 'uploadFile'   //这里写图片上传的接口，接口返回的格式应该为{ uploaded: true, url: '图片地址' }
  }
}).then(editor => {
  //设置初始值
  myEditor = editor
}).catch( error => {
  console.error( error )
});

$(document).ready(() => {
  myEditor.setData('<p>哈哈哈</p>')
});

let onSubmit = () => {
  console.log(myEditor.getData())
};

let onSave = () => {
  console.log(myEditor.getData())
};
