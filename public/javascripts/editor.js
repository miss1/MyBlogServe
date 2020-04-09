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
})

$(document).ready(() => {
  getArticleDetail()
})

let onSubmit = () => {
  console.log(myEditor.getData())
}

let getArticleDetail = () => {
  let id = getQueryString('id')
  $.ajax({
    type : "get",
    url : '/client/article/detail',
    data: {id: id},
    success : function(data) {
      console.log(data)
      if (data.success){
        myEditor.setData(data.data.content)
      }else {
        console.error(data.message)
      }
    },
    error : function() {
      console.log('err')
    }
  });
}

let onSave = () => {
  console.log(myEditor.getData())
}

let getQueryString = (name) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
