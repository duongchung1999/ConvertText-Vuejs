<template>
     <!-- <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0&appId=1591174101628609" nonce="7cYWbTTJ"></script> -->
    <div id="main">
        <div class="header js-header">
            <ul id="nav">
                <!-- <li>
                    <a href="../index.html" id="translationLink">
                        <img src="../assets/image/Home.png" alt=""> 
                        <i class="menu-hidden">
                            Home
                            <i class="nav-icon ti-home"></i>
                        </i>
                        
                        
                        
                    </a>
                </li> -->
                <li><a href="https://book.bfnn.org/books/0486.htm" onclick="openInNewTab(event)">
                    <img src="../../assets/image/book1.png" alt="中文"> 
                    <i class="menu-hidden">教程</i>
                    
                    <!-- <i class="nav-icon ti-book"></i> -->
                </a></li>
                <li>
                    <a href="https://nhidonghocphat.com/tinh-khong-phap-su-gia-ngon-luc-ds" onclick="openInNewTab(event)">
                        <img src="https://ava-grp-talk.zadn.vn/2/b/e/8/2/360/056059ce9cbe0aa7b902032495aef1c6.jpg" alt="Website"> 
                  
                    <i class="menu-hidden">Website</i>
                </a></li>
                <li><a href="https://hanzii.net/?hl=vi" onclick="openInNewTab(event)">
                    <img src="../../assets/image/ic_logo.png" alt="汉字"> 
                   
                    <i class="menu-hidden"> Từ điển</i>
                </a></li>
                <li><a href="https://tudiendich.com/" onclick="openInNewTab(event)">
                    <img src="../../assets/image/convert.jpg" alt="Convert"> 
                    
                    <i class="menu-hidden">Chữ Hán</i>
                    <!-- <i class="nav-icon ti-reload"></i> -->
                </a></li>
                <li><a href="https://tv.nhidonghocphat.com/gttd/CH21-010-03.pdf" onclick="openInNewTab(event)">
                    <img src="../../assets/image/pdf1.png" alt="PDF"> 
                   
                    <i class="menu-hidden"> Giáo trình</i>
                </a></li>
                <li><a href="#">
                    <img src="../../assets/image/book2.jpg" alt="PDF"> 
                    
                    <i class="menu-hidden">Bài dịch</i>
                </a></li>
            </ul>
        </div>

        <div id="slider"></div>
        <div class="content js-content">
            <div id="header-select">
                <h1>
                    <i class="menu-icon ti-angle-double-left" >1</i>
                    <i class="menu-icon ti-angle-double-right" >2</i>
                    To Do List
                </h1>

        
            <select id="fileList" class="menu-fileList" v-model="selectedFile">
                <!-- <option v-for="file in fileList" :value="file.id">{{ file.name }}</option> -->
            </select>
        
            <button id="add-section" class="buttoncss add-section" onclick="addSection()"> 
                <i class="ti-plus" ></i>
                <div class="add-section-note">Thêm bài mới</div>
            </button>
            <button id="delete-section" class="buttoncss" onclick="deleteSection()"> <i class="ti-trash" ></i></button>
            <button class="btn-save buttoncss" id="btn-right" ><i class="nav-icon ti-download"></i></button>
            </div>
            <div class="container">
                <!-- <button class="btn-save" id="btn-left" ><i class="nav-icon ti-download"></i></button> -->
                <textarea class="left-textbox content-left richtext" placeholder="Bài viết tiếng trung"></textarea>
                <!-- <button id="btn-content">Text Convert</button>
                <button id="btn-save" ><i class="nav-icon ti-download"></i></button> -->
                <textarea class="right-textbox content-right richtext" placeholder="Bài dịch"></textarea>
              
            </div>

            <div id="output"></div>
            <div class="fbcomment text-xs-center">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>Phản hồi</h2>
                    </div>
                    <div class="col-sm-8 push-sm-2">
                        <div class="fb-comments" data-href="https://duongchung1999.github.io/Convert-Text-Web/contents/ContentViewer.html" data-width="576" data-numposts="5"></div>
                    </div>
                </div>
                
            </div>
        </div>

        <div id="footer">
           
        </div>

        <div class="confirm js-confirm">
            <div class="confirm-container js-confirm-container">
                <div class="container-close js-close">
                    <i class="ti-close"></i>
                </div>
                <div class="confirm-header js-confirm-header">123
                </div>

                <div class="confirm-body js-confirm-body">
                    <div class="confirm-no js-confirm-no">
                        <h1>No</h1>
                    </div>
                    <div class="confirm-yes js-confirm-yes js-delete-yes">
                        <h1>Yes</h1>
                    </div>
                </div>

                <div class="confirm-footer js-confirm-footer">

                </div>
            </div>
        </div>

        <div class="add-sections js-add-sections">
            <div class="add-sections-container js-add-sections-container">
                <div class="add-sections-close js-add-sections-close">
                    <i class="ti-close"></i> 
                </div>
                <div class="add-sections-header js-add-sections-header">
                   <h2>Tạo bài dịch mới</h2>
                    
                </div>
                <div class="add-sections-body js-add-sections-body">
                    <div class="add-sections-input">
                        <h3>Nhập tên bài học:</h3>
                        <input type="text" placeholder="Nhập tên bài mới bạn muốn tạo" />
                    </div>
                    <div class="add-sections-no js-add-sections-no">
                        <h1>No</h1>
                    </div>
                    <div class="add-sections-yes js-add-sections-yes">
                        <h1>Yes</h1>
                    </div>
                </div>
                <div class="add-sections-footer js-add-sections-footer"></div>
            </div>
        </div>
    </div>
</template>

<!-- <script src="./main.js"></script> -->



<style>
/* Reset CSS */
*{
    /* Enmet*/
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}



html {
    font-family: Arial, Helvetica, sans-serif;

}

.header {
    /* height: 46px;
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0; */
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    float: left;
    width: 230px;
    background-color: #000;
    z-index: 1;
}

#nav {
    display: inline-block;
}
#nav > li {
    display: inline-block;
}

#nav li {
    /* display: inline-block; */
    /* display: list-item; */
    position: relative;
    width: 100%;
    
}
#nav li img {
    max-width: 100%; /* Đặt kích thước tối đa cho ảnh là 100% của phần tử cha */
    border-radius: 50%;
    height: 34px; /* Cho phép chiều cao tự động điều chỉnh để giữ tỷ lệ khung hình */
    margin-right: 5px; /* Tạo khoảng cách giữa ảnh và văn bản */
    margin-bottom: -9px;
}

#nav > li > a{
    color: #fff;
    text-transform: uppercase;
}

#nav li a {
    text-decoration: none;
    line-height: 31px;
    padding: 10px 18px;
    display: block;
    /* width: 300px; */
    font-size: 15px;
}
#nav > li:hover > a {
    color: #000;
    background-color: #ccc;
}




.content,.footer{
    margin-left: 230px;
}
/* .ti-angle-double-right{
    display: none;
} */


#header-select>h1{
    height: 50px;
}
.ti-angle-double-right{
    display: none;
}
.container {
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    width: 100%;
    margin: 0 auto;
    /* padding: 20px; */
}
#fileList,#add-section,.buttoncss{
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(209, 105, 0);
    font-size: 25px;
    font-style: italic;
    margin: 5px;
    color: #fff;
    border-style: none;

}

#add-section {
    position: relative;
}
#add-section:hover .add-section-note {
    /* position: relative; */
    display: block;
}
.add-section-note {
    position: absolute;
    background: #333;
    width: 150px;
    font-size: 20px;
    padding: 10px;
    margin-top: 5px;
    margin-left: -10px;
    border-radius: 10px;
    opacity: 95%;
    display: none;
}
.add-section-note:hover{
    background: #090707;
}
.btn-save{
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(209, 105, 0);
    font-size: 25px;
    font-style: italic;
    margin: 0 5px;
    color: #fff;
    border-style: none;
}
.menu-icon{
    padding: 10px;
    /* background-color: #fff; */
    border-radius: 5px;
    color: #333;
    font-size: 20px;
    margin-left: 1px;
    /* margin-top: -10px; */
}
.menu-icon:hover{
    /* background-color: darkorange; */
    background: rgb(209, 105, 0);
    color: #fff;
    font-size: 20px;
    cursor: pointer;

}

#add-section:hover,
#fileList:hover,
.btn-save:hover,
.container-close:hover,
.buttoncss:hover{
    background: rgb(209, 70, 0);
    color: #fff;
    /* font-size: 20px; */
    cursor: pointer;
}


textarea {
    font-family: 'Source Han Sans', sans-serif;
    background-color: #d4ff6d33;
    margin: 0 5px;
    /* Thay 'Your-Chinese-Font' bằng tên phông chữ tiếng Trung bạn muốn sử dụng */
}

/* Tùy chỉnh kích thước và kiểu chữ */
.richtext {
    font-size: 20px; /* Thay đổi kích thước font chữ theo ý muốn */
    font-weight: normal; /* hoặc bold tùy thuộc vào ý muốn của bạn */
    line-height: 1.5;
    padding: 10px;
}

.left-textbox,
.right-textbox {
    width: 50%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    height: 800px;
    resize: vertical; /* Cho phép thay đổi kích thước theo chiều dọc */
}

.text-xs-center{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.confirm.js-confirm {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    /* display: flex; */
    display: none;
    align-items: center !important;
    justify-content: center !important;
    z-index: 2;
}

.confirm-container.js-confirm-container {
    position: relative;
    background-color: #ffffff;
    width: 900px;
    min-height: 200px;
    max-width: calc(100%-32px);
    animation: modalTransY ease 0.5s;
    border-radius: 25px;
}
.container-close{
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    font-size: 30px;
    z-index: 2;
    border-radius: 10px;
}
.confirm-header{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
    width: 100%;
    text-align: center;
    height: 125px;
    font-size: 36px;
    left: 0;
    right: 0;
    padding: 20px;
}
.confirm-yes,
.confirm-no,
.add-sections-yes,
.add-sections-no{
    position: absolute;
    align-items: center;
    display: flex;
    bottom: 10px;
    height: 50px;
    width: 44%;
    color: #fff;
    text-align: center;
    border-radius: 25px;
}
.confirm-no,
.add-sections-no{
    left: 40px;
    background: #ab3612;
}
.confirm-yes,
.add-sections-yes{
    right: 40px;
    background: #0f7906;
}
.confirm-no:hover,
.add-sections-no:hover{
    background: #d34114;
    cursor: pointer;
    height: 55px;
}
.confirm-yes:hover,
.add-sections-yes:hover{
    background: #12ae03;
    cursor: pointer;
    height: 55px;
}
h1{
    display: inline-block;
    margin: 0 auto;
}
/* End css confirm */

/* Add Sections Begin */
.add-sections{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    /* display: flex; */
    display: none;
    align-items: center !important;
    justify-content: center !important;
    z-index: 2;
}

.add-sections-container{
    position: relative;
    background-color: #ffffff;
    width: 700px;
    min-height: 200px;
    max-width: calc(100%-32px);
    animation: modalTransY ease 0.5s;
    border-radius: 25px;
}
.add-sections-close{
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    font-size: 30px;
    z-index: 2;
    border-radius: 10px;
}
.add-sections-header{
    position: absolute;
    width: 100%;
    margin-top: 14px;
    align-items: center;
}
.add-sections-header h2 {
    margin: 0; /* Loại bỏ margin của thẻ h3 để tránh khoảng trắng thừa */
    margin-right: 10px; /* Khoảng cách giữa thẻ h3 và input */
    font-size: 28px;
    font-family: 'Arial', sans-serif; /* Đặt kiểu phông chữ cho thẻ h3 */
    text-align: center;
    /* display: flex; */
}

.add-sections-input {
    display: flex; /* Sử dụng flexbox để căn chỉnh phần tử con */
    width: 83%;
    position: absolute;
    top: 63px;
    margin-left: 51px;
    align-items: center; /* Căn giữa theo chiều dọc */
}


.add-sections-input h3 {
    margin: 0; /* Loại bỏ margin của thẻ h3 để tránh khoảng trắng thừa */
    margin-right: 10px; /* Khoảng cách giữa thẻ h3 và input */
    font-size: 21px; /* Đặt kích thước chữ cho thẻ h3 */
    font-family: 'Arial', sans-serif; /* Đặt kiểu phông chữ cho thẻ h3 */
    color: #4d4747;
}
.add-sections-input input {
    flex-grow: 1; /* Để ô nhập liệu mở rộng ra và chiếm hết không gian còn lại */
    font-size: 25px; /* Đặt kích thước chữ cho ô nhập liệu */
    padding: 11px; /* Tăng khoảng đệm để làm cho ô nhập liệu dài ra và to hơn */
    border: 1px solid #ccc; /* Thêm đường viền để phân biệt ô nhập liệu */
    border-radius: 5px; /* Độ cong viền để tạo hình dạng hấp dẫn */
    /* text-align: center; */
    font-family: 'Arial', sans-serif; /* Đặt kiểu phông chữ cho ô nhập liệu */
    font-style: italic;
}

.add-sections-close:hover{
    background-color: #d34114;
}
/* Add Sections End */

/* Javascript menu */
.hidden{
    display: none;
}

.shower{
    display: inline-block;
}

.js-changewidth{
    width: 70px;
}
.js-changemargin{
    margin-left: 70px;
}
.add-animation{
    animation: modalTrans ease 0.5s;
}
.add-animation1{
    animation: modalTrans1 ease 0.5s;
}
/* End Javascript menu */
@keyframes modalTrans{
    from{
        opacity: 0.6;
        transform: translateX(10px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
}
@keyframes modalTrans1{
    from{
        opacity: 0.6;
        transform: translateX(-150px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
}

@keyframes modalTransY{
    from{
        opacity: 0.6;
        transform: translateY(-300px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>

<script>
import { fetchData, addData, updateData, deleteData } from '@/services/firebaseService';
export default{
    data() {
    return {
      fileList: [] // Khai báo biến fileList để lưu trữ danh sách tệp
    }
    },

    mounted() {
    this.loadData('users/user1/contents'); // Gọi hàm loadData khi component được mounted
    },

    methods: {
    async loadData(path) {
      const data = await fetchData(path);
      this.fileList = data;
    //   console.log(data);
      this.updateFileList();
    },

    async addNewData() {
      const newData = { /* your data */ };
      await addData(newData);
    },

    async updateExistingData(id) {
      const updatedData = { /* updated data */ };
      await updateData(id, updatedData);
    },

    async deleteExistingData(id) {
      await deleteData(id);
    },

    updateFileList() {
      const selectElement = document.getElementById('fileList');
      
      // Xóa tất cả các mục hiện có trong phần tử <select>
      selectElement.innerHTML = '';
      
      // Thêm một mục cho mỗi tệp trong fileList
      this.fileList.forEach(file => {
        console.log(file);
        const optionElement = document.createElement('option');
        optionElement.text = file; // Sử dụng tên của tệp làm nội dung của mục
        // console.log(optionElement);
        selectElement.add(optionElement);
      });
    }
  },

  
}

</script>