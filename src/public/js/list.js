// 发送 post 请求
function post(url, data = {}) {
    return $.ajax({
        type: 'post',
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json",
    })
}
//生成表格
function createrList(data) {
    let str = "<table id='showListTB' style='border: 1px solid black;'>";
    str += "<tr><th>id</th><th>account</th><th>password</th><th>mark</th><th>typeId</th><th>修改</th></tr>";
    for (let i = 0; i < data.length; i++) {
        str += "<tr>";
        for (let key in data[i]) {
            str += "<td class='showListTD' data-clipboard-text='" + data[i][key] + "'>" + JSON.stringify(data[i][
                key
            ]) + "</td>";
        }
        str += "<td class='showListDelTD'><button class='button-delete' value='" + data[i]['id'] + "'>删除</button></td>";
        str += "</tr>"
    }
    str += "</table>";
    return str;
}

//删除数据
function onDel() {
    $btnSLTB = $('#showListTB')
    $btnSLTB.click((e) => {
        console.info(e.target.className)
        if(e.target.className!=="button-delete"){
            return;
        }
        $id = e.target.value;
        console.info($id)
        if (!confirm("确定删除改数据？")) {
            return;
        }
        const url = '/api/account/delete'
        const data = {
            "id": $id,
        }
        post(url, data).then(res => {
            if (res.errno !== 0) {
                alert('操作错误')
                return
            }
            alert('删除成功')
        })
    })
}