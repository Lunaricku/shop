var product = new Vue({
    el : '#product',
    data:{
        title: 'Màn hình tivi ultra HD 4K 50inch',
        price: 200000,
        sale: 0.4,
        codeSale: 0.05,
        statusTransport: 'Miễn phí vận chuyển',
        selectedProduct: 0,
        cartNumber: 1,
        styleObject:{
            backgroundImage :  'url(https://cf.shopee.vn/file/3e68462ec4865b936c56182673ef5cb2)'
        },
        listProductDetail: [
            {
                id: 1,
                image: './assets/img/tivi1.jpg',
                quantity : 10,
                textVariation : 'màu đỏ'
            },
            {
                id: 2,
                image: './assets/img/tivi2.jpg',
                quantity : 150,
                textVariation: 'màu xanh'
            },
            {
                id: 3,
                image: './assets/img/tivi3.jpg',
                quantity : 100,
                textVariation : 'màu vàng'
            },
            {
                id: 4,
                image: './assets/img/tivi4.jpg',
                quantity : 0,
                textVariation : 'màu tím'
            },
            {
                id: 4,
                image: './assets/img/tivi4.jpg',
                quantity : 20,
                textVariation : 'màu trắng'
            }

        ],
        listDescription:[
            'Product Name: Mini LED mirror clock',
            'Material: ABS',
            'Size: 7.2cm*4cm',
            'Shell color: white',
            'Light color: white, green, blue, pink',
            'Weight: about 55g',
            'Power supply mode: external power supply',
            '-CR2032 3V not included - for memory time',
            '-dc 5V USB cable included',
            'Features: -LED displays time, date and temperature; 2.2 brightness display'
        ],
        description: '<p>M&ocirc; tả: &Aacute;o thun cổ tr&ograve;n thể thao Hiye chuy&ecirc;n được may từ chất liệu nilon tho&aacute;ng m&aacute;t v&agrave; tho&aacute;t mồ h&ocirc;i tốt, kết hợp th&ecirc;m sợi thun tạo độ co gi&atilde;n gi&uacute;p người ti&ecirc;u d&ugrave;ng thoải m&aacute;i khi mặc</p> ',
        
        
    },
    methods:{
        handleClickColor(e, index) {
            this.selectedProduct = index;
            // console.log(e, index, this);
        },
        classActive(index){
            return{
                active : this.selectedProduct === index
            }            
        },
        handleUpToCart(e) {
            if(this.cartNumber + 1 > this.getProduct.quantity) {
                alert('So luong khong du');
            } else {
                this.cartNumber = this.cartNumber + 1;
            }
            console.log(e.target)
        },
        handleDowntoCart(e){
            if(this.cartNumber - 1 > 0){
                this.cartNumber = this.cartNumber - 1;
            }else{
                this.cartNumber = 0;
            }
        }
        
    },
    computed:{
        formatOriginalPrice(){
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
    }

})