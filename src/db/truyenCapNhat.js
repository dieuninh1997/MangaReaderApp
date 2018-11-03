import _ from 'lodash';


const truyenCapNhat = [
    {   comicTittle: 'Người Đi Săn',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/nguoi-di-san',
        comicImage: 'https://3.bp.blogspot.com/-U-xjkiKUVWA/V5ZMndj_xgI/AAAAAAAABEM/TrfAXpkSgog/nguoi-di-san.jpg',
        comicView: '1.393.014' 
    },
    {   comicTittle: 'Higanjima SS3',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/higanjima-ss3',
        comicImage: 'https://3.bp.blogspot.com/-k__wUa6UAnE/W0FnzY3cGZI/AAAAAAAAW00/mzvH2TIglXkqXKJ_vavhnjwFCOQUVJZBgCHMYCw/higanjima-ss3',
        comicView: '1.815.854' 
    },
    {   comicTittle: 'Dungeon ni Deai o Motomeru no wa Machigatte Iru Darou ka',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/dungeon-ni-deai-o-motomeru-no-wa-machigatte-iru-darou-ka',
        comicImage: 'https://3.bp.blogspot.com/-sU4dP6w5bpE/V5ZKPureJ6I/AAAAAAAAAIE/qyvDU0Z9P1w/dungeon-ni-deai-o-motomeru-no-wa-machigatte-iru-darou-ka.jpg',
        comicView: '328.371'
    },
    {   comicTittle: 'Oink - Đồ Tể Thiên Đường',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/oink-do-te-thien-duong',
        comicImage: '//st.nettruyen.com/Data/Comics/5/oink-do-te-thien-duong.jpg',
        comicView: '972' 
    },
    {   comicTittle: 'Luôn Có Yêu Quái',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/luon-co-yeu-quai',
        comicImage: 'https://3.bp.blogspot.com/-OoE5hS24f6U/Wpqy6tSCAcI/AAAAAAAAQ-4/bDDZ8IunsW47AtiPPXVlue1mK3b4Hj4yQCHMYCw/luon-co-yeu-quai',
        comicView: '981.241' 
    },
    {   comicTittle: 'Higanjima',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/higanjima',
        comicImage: 'https://3.bp.blogspot.com/-xuba5MsXbIw/WwGLjyGW0OI/AAAAAAAAT-c/8XmwAnl5RJcBlC2amA0Oe16JbgO6JcgAwCHMYCw/higanjima',
        comicView: '3.910.675' 
    },
    {   comicTittle: 'Nữ Thần Tại Thượng',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/nu-than-tai-thuong',
        comicImage: 'https://3.bp.blogspot.com/-3Rt7p8h3g7g/WzCo1Z95tFI/AAAAAAAAV5I/AVD_K7hBljs7KYDy1rGkG-Q2Yp9d8qJLQCHMYCw/nu-than-tai-thuong',
        comicView: '67.622' 
    },
    {   comicTittle: 'Mùa Hè Của Tổng Tài',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/mua-he-cua-tong-tai',
        comicImage: 'https://3.bp.blogspot.com/-_yaT7mw7kQU/W09xym-DK2I/AAAAAAAAXaU/7XS96hvYGIkydB05dxz95fNmBAGE25BdgCHMYCw/mua-he-cua-tong-tai',
        comicView: '172.778' 
    },
    {   comicTittle: 'Nữ hoàng Ai Cập',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/nu-hoang-ai-cap',
        comicImage: 'https://3.bp.blogspot.com/-ilal9FDyrZg/WzDymKxIN8I/AAAAAAAAV6o/uzGcCIH3DOouV28EuldDvDuyhX2k4rFxQCHMYCw/nu-hoang-ai-cap',
        comicView: '2.813.874' 
    },
    {   comicTittle: 'Tổng tài đại nhân tâm thiếu nữ',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/tong-tai-dai-nhan-tam-thieu-nu',
        comicImage: 'https://3.bp.blogspot.com/-vC0HZf9M8Yc/W9V5p8vR2EI/AAAAAAAAaZk/aolSV7LXoZMmiwuzmD93FkzADXCxQCwOACHMYCw/tong-tai-dai-nhan-tam-thieu-nu',
        comicView: '52.277' 
    },
    {   comicTittle: 'Hào Môn Thiên Giới Tiền Thê',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/hao-mon-thien-gioi-tien-the',
        comicImage: 'https://3.bp.blogspot.com/-ZQRy2Hhpdgc/WBNE0nEVhlI/AAAAAAAAMoQ/Tx5SSQmGdzg/hao-mon-thien-gioi-tien-the.jpg',
        comicView: '18.261.174' 
    },
    {   comicTittle: 'Bí mật bóng đêm',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/bi-mat-bong-dem',
        comicImage: 'https://3.bp.blogspot.com/-tb5tD0lH0U8/W9R40sjYvDI/AAAAAAAAaXQ/NlB8qcdEF3AH9Op5qCIsTPGoCmNjbI3GgCHMYCw/bi-mat-bong-dem',
        comicView: '61.297' 
    },
    {   comicTittle: 'Onii-Chan Wa Oshimai',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/onii-chan-wa-oshimai',
        comicImage: 'https://3.bp.blogspot.com/-q6Ox0QS1m9k/Wo9pytY68qI/AAAAAAAAN1Y/SPNFl1_2d9Yk_lVc0RSNa8TrsH9fQznYACHMYCw/onii-chan-wa-oshimai',
        comicView: '276.384' 
    },
    {   comicTittle: 'Broken Moon: Legends Of The Deep - Trăng Tàn: Huyền Kỳ Nơi Sâu Thẳm',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/broken-moon-legends-of-the-deep-trang-tan-huyen-ky-noi-sau-tham',
        comicImage: 'https://3.bp.blogspot.com/-TWN3TC-7s78/W9g9DRegoPI/AAAAAAAAacU/WZ45UWHwHkQaOPxFwuMKM-MI5cEQjytNwCHMYCw/broken-moon-legends-of-the-deep-trang-tan-huyen-ky-noi-sau-tham',
        comicView: '2.582' 
    },
    {   comicTittle: 'Hôn xuống bằng bất cứ giá nào',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/hon-xuong-bang-bat-cu-gia-nao',
        comicImage: 'https://3.bp.blogspot.com/-pFCSeC42oHo/W9R0iaP8pjI/AAAAAAAAaWc/rw4c-CqWNV8_qce3capOLTXEnjxj54ovACHMYCw/hon-xuong-bang-bat-cu-gia-nao',
        comicView: '77.664' 
    },
    {   comicTittle: 'Ông Xã Thú Tính Đêm Đêm Gợi Tình',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/ong-xa-thu-tinh-dem-dem-goi-tinh',
        comicImage: 'https://3.bp.blogspot.com/-zgxxXKEQzr8/WvFFq-LhCmI/AAAAAAAATJQ/nROzMJ5BRCMoTOj1pk6y2p_b6IQEL1AagCHMYCw/ong-xa-thu-tinh-dem-dem-goi-tinh',
        comicView: '5.541.244' 
    },
    {   comicTittle: 'Liv',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/liv',
        comicImage: '//st.nettruyen.com/Data/Comics/4/liv.jpg',
        comicView: '1.259' 
    },
    {   comicTittle: 'Billy Bat',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/billy-bat',
        comicImage: 'https://3.bp.blogspot.com/-GGimTsbVSRw/V5ajEvqiT5I/AAAAAAAAC-U/GRXWY2cCbXQ/billy-bat.jpg',
        comicView: '58.557' 
    },
    {   comicTittle: 'Em Vẫn Còn Nhỏ',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/em-van-con-nho',
        comicImage: 'https://3.bp.blogspot.com/-jUFpA2qOx7k/WssVNTbsTpI/AAAAAAAASK0/j5j3VFcfP1IcT_6ONDVHa5QB8JhrwEuzgCHMYCw/em-van-con-nho',
        comicView: '3.058.580' 
    },
    {   comicTittle: 'Mai Nữ Đồng Tiểu Nộ',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/mai-nu-dong-tieu-no',
        comicImage: 'https://3.bp.blogspot.com/-WyyzfVwAXlk/Wo9qkAWFq3I/AAAAAAAAODw/vBJeJGv45XAKAzt2EfFpBQP1r3x6pnTuQCHMYCw/mai-nu-dong-tieu-no',
        comicView: '1.001.232' 
    },
    {   comicTittle: 'Thái Tử Phi Ở Hiện Đại',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/thai-tu-phi-o-hien-dai',
        comicImage: 'https://3.bp.blogspot.com/-DCf6Q6koeck/W2ccgdBvn0I/AAAAAAAAYX4/Sczk5PJJJ-Up2n6eCyLEEGXOURSpBEfywCHMYCw/thai-tu-phi-o-hien-dai',
        comicView: '780.644' 
    },
    {   comicTittle: 'Enen no Shouboutai',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/enen-no-shouboutai',
        comicImage: 'https://3.bp.blogspot.com/-WoRSxtbWIVY/WwGVJthskeI/AAAAAAAAT_E/N3R_NApDzB4drPD6-f2NvBmkJYCdRsXjQCHMYCw/enen-no-shouboutai',
        comicView: '962.204' 
    },
    {   comicTittle: 'Dường như tình yêu đã đến',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/duong-nhu-tinh-yeu-da-den',
        comicImage: 'https://3.bp.blogspot.com/-4huhmraVmJY/Wysi3fL2afI/AAAAAAAAVrQ/if_YDZtFBS4_z-zEPiL2PniTqPZcnm-rwCHMYCw/duong-nhu-tinh-yeu-da-den',
        comicView: '1.566.038' 
    },
    {   comicTittle: 'Sử Thượng Đệ Nhất Chưởng Môn',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/su-thuong-de-nhat-chuong-mon',    
        comicImage: 'https://3.bp.blogspot.com/-DAzZ_rVzWkI/W50ZhTBGSZI/AAAAAAAAZlM/jK9OyvXhMC0u86COqZ9LRLXM4dxuXVOvgCHMYCw/su-thuong-de-nhat-chuong-mon',
        comicView: '724.248' 
    },
    {   comicTittle: 'Vạn Giới Tiên Tung',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/van-gioi-tien-tung',
        comicImage: 'https://3.bp.blogspot.com/-HlYQIVtcdqQ/W2PRAlt_PeI/AAAAAAAAYS4/kIGTbqcVgTk0sakpfM6jp5nn5EtAdCC_ACHMYCw/van-gioi-tien-tung',
        comicView: '4.803.212' 
    },
    {   comicTittle: 'Hiệp Khách Giang Hồ',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/hiep-khach-giang-ho',
        comicImage: 'https://3.bp.blogspot.com/-i6kC0GnGnxg/Wo9o09jHUfI/AAAAAAAANpI/Enb2Mn0v-_YkxYsfSp2pEUAQkSz9JyC8QCHMYCw/hiep-khach-giang-ho',
        comicView: '15.890.918' 
    },
    { comicTittle: 'Gantz Full Color',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/gantz-full-color',
        comicImage: 'https://3.bp.blogspot.com/-_aNS8pvEcr4/W2fgfBO1GFI/AAAAAAAAYaU/a3q_Zm3H0Hk6_pST3O_zMKpGmw1BFFSwQCHMYCw/gantz-full-color',
        comicView: '602.034' 
    },
    {   comicTittle: 'Lăng Thiếu!  Nhẹ Một Chút,  Đau',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/lang-thieu-nhe-mot-chut-dau',
        comicImage: 'https://3.bp.blogspot.com/-qduck98nh2U/W9bo3xPxVII/AAAAAAAAabk/NZeVtS8cFTQWnXp1IonKlpT53KG2ucXGwCHMYCw/lang-thieu-nhe-mot-chut-dau',
        comicView: '45.486' 
    },
    {   comicTittle: 'Shokuryo Kyoshitsu',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/shokuryo-kyoshitsu',
        comicImage: 'https://3.bp.blogspot.com/-DHacxWHBgPo/Wq8crfxqYwI/AAAAAAAARhk/pyD78yKGtzUnwy98zV5AlvWnUqlTD1hVQCHMYCw/shokuryo-kyoshitsu',
        comicView: '250.726' 
    },
    {   comicTittle: 'Team Medical Dragon - Y Đội Rồng',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/team-medical-dragon-y-doi-rong',
        comicImage: 'https://3.bp.blogspot.com/-GqXx2MGrtIw/Wo9wzuQ32PI/AAAAAAAAPOc/rC6Cp4zu2XwEBr0a4h9PAUQI8m-mWZVDQCHMYCw/team-medical-dragon-y-doi-rong',
        comicView: '362.965' 
    },
    {   comicTittle: 'Shamo',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/shamo',
        comicImage: 'https://3.bp.blogspot.com/-oGOCCrgvP5c/V5bFjVJB9OI/AAAAAAAAHsk/i7Tgcf1I7RE/shamo.jpg',
        comicView: '92.966' 
    },
    {   comicTittle: 'Mighty Morphin Power Rangers',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/mighty-morphin-power-rangers',    comicImage: 'https://3.bp.blogspot.com/-4O7J1QDG9v4/Wriq4vuE_cI/AAAAAAAARwM/L0uvnkGK39oWzDcGVwaLw8eGUmd2iafBACHMYCw/mighty-morphin-power-rangers',
        comicView: '30.965' 
    },
    {   comicTittle: 'Ông Kẹ sau 6h tối!',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/ong-ke-sau-6h-toi',
        comicImage: 'https://3.bp.blogspot.com/-YYalcN4QJ_U/W7TT_2qdiXI/AAAAAAAAZ2E/0kNZJ-yxi-kgQVVNFb_sw2qXE7o7FuxnACHMYCw/ong-ke-sau-6h-toi',    comicView: '191.901' 
    },
    {   comicTittle: 'Đại Kiếm Thần',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/dai-kiem-than',
        comicImage: 'https://3.bp.blogspot.com/-L4TzDwjqm1E/W2KnLVVHDwI/AAAAAAAAYQk/rqWAgLLTMCUFzGApzsGF9M-S0dhaJy4fgCHMYCw/dai-kiem-than',
        comicView: '2.752.723' 
    },  
    {   comicTittle: 'Dendrobates',
        comicLink: 'http://www.nettruyen.com/truyen-tranh/dendrobates',
        comicImage: 'https://3.bp.blogspot.com/-SHtY4JHW9Wo/V5ZPX38Kx0I/AAAAAAAACMw/5hj6KOpKDug/dendrobates.jpg',
        comicView: '177.487' 
    },
    {   comicTittle: 'Luyện Ngục Trọng Sinh',    
        comicLink: 'http://www.nettruyen.com/truyen-tranh/luyen-nguc-trong-sinh',
        comicImage: 'https://3.bp.blogspot.com/-eo95ImHPKEs/Wo9qLy-lbmI/AAAAAAAAN8w/fD1YsstEUUMVLePFy_5Powy6MpdZx01kwCHMYCw/luyen-nguc-trong-sinh',
        comicView: '3.153.357' 
    }
];

export default truyenCapNhat;
