var Crawler = require("crawler");
class CrawlerData {
    constructor(url){
        this.url  = url;
    }

    async getChapters (url) {
        var c = new Crawler({
            maxConnections : 10,
            // This will be called for each crawled page
            callback : function (error, res, done) {
                done();
            }
        });
        
        return new Promise((resolve,reject)=>{
            // Queue URLs with custom callbacks & parameters
            c.queue([{
                uri: url,
                jQuery: true,
            
                // The global callback won't be called
                callback: function (error, res, done) {
                    if(error){
                        console.log(error);
                    } else{
                        const $ = res.$;
                        let chapters = [];
                        
                        const infoImage = $('.detail-info .col-image img').attr('src') 
                        const infoName = $('.detail-info .col-image img').attr('alt') 
                        const infoOtherName = $('.detail-info .col-info .othername h2').text(); 
                        const infoAuthor = $('.detail-info .col-info .author a').text()
                        const infoStatus = $('.detail-info .col-info .status .col-xs-8').text();
                        const infoKind = $('.detail-info .col-info .kind .col-xs-8').text()
                        const infoView = $('.detail-info .row p').text().split("Lượt xem")[1].trim();      
                        const infoFollow = $('.detail-info .row .follow span b').text();   
                        let infoContent = $('.detail-content p').text(); 
                        
                        // console.log(res);
                        chapters.push({
                            infoImage,
                            infoName,
                            infoOtherName,
                            infoAuthor,
                            infoStatus,
                            infoKind,
                            infoView,
                            infoFollow,
                            infoContent
                        });


                        $('.list-chapter nav ul li').each(function () {
                            const comicChapter = $(this).find('.chapter a').text();
                            const comicChapterLink = $(this).find('.chapter a').attr('href');
                            const comicDateUpdate = $(this).find('.col-xs-4').text();
                            const comicView = $(this).find('.col-xs-3').text();
                    
                            // console.log('--------------------------------------')
                            // console.log(comicChapter);
                            // console.log(comicChapterLink);
                            // console.log(comicDateUpdate);
                            // console.log(comicView);
                            // console.log();

                            chapters.push({
                                comicChapter,
                                comicChapterLink,
                                comicDateUpdate,
                                comicView
                            });
                            resolve(chapters);
                        });;
                    }
                    done();
                }
            }]);
        });
    }

    async getTruyen(url){
        var c = new Crawler({
            maxConnections: 10,
            // This will be called for each crawled page
            callback: function (error, res, done) {
              done();
            }
        });
        return new Promise((resolve,reject)=>{
            c.queue([{
                uri: url,
                jQuery: true,
            
                // The global callback won't be called
                callback: function (error, res, done) {
                    if (error) {
                        console.log(error);
                    } else {
                        const $ = res.$;
                        let list = [];
                        $('.ModuleContent .items .row .item').each(function () {
                            const comicTittle = $(this).find('figcaption h3 a').text();
                            const comicLink = $(this).find('figcaption h3 a').attr('href');
                            const comicImage = $(this).find('.image a img').attr('data-original');
                            const comicView = $(this).find('.image span').text().trim().split(" ")[0];
                    
                            list.push({
                                comicTittle,
                                comicLink,
                                comicImage,
                                comicView
                            });
                            resolve(list);
                        });
                    }
                    done();
                }
            }])
            
        });
    }

    async getChapterImages(url) {
        var c = new Crawler({
            maxConnections : 10,
            // This will be called for each crawled page
            callback : function (error, res, done) {
                done();
            }
        });
        
        return new Promise((resolve, reject)=>{
            c.queue([{
                uri: url,
                jQuery: true,
    
                // The global callback won't be called
                callback: function (error, res, done) {
                    if(error){
                        console.log(error);
                    }else{
                        const $ = res.$;
                        let list = [];
                        $('.reading-detail img').each(function () {
                            // console.log(this.attribs.src)
                            list.push(this.attribs.src);
                        });;
                        resolve(list);
                    }
                    done();
                }
            }]);
        })
        
    }
}

let data = new CrawlerData();
// data.getChapterImages("http://www.nettruyen.com/truyen-tranh/luon-co-yeu-quai/chap-82/416624").then(data=> console.log(data));
data.getChapters("http://www.nettruyen.com/truyen-tranh/nu-hoang-ai-cap").then(data=>{console.log(data)});
// data.getTruyen("http://www.nettruyen.com/tim-truyen/viet-nam").then(data=>{
//     console.log(data);
// });

// const crawlChapterImages = (url) => {
//     var c = new Crawler({
//         maxConnections : 10,
//         // This will be called for each crawled page
//         callback : function (error, res, done) {
//             done();
//         }
//     });
    
//     let list=[];    
//     // Queue URLs with custom callbacks & parameters
//     c.queue([{
//         uri: url,
//         jQuery: true,

//         // The global callback won't be called
//         callback: function (error, res, done) {
//             if(error){
//                 console.log(error);
//             }else{
//                 const $ = res.$;
//                 $('.reading-detail img').each(function () {
//                     console.log(this.attribs.src)
//                     list.push(this.attribs.src);
//                 });;
//                 return list;
//             }
//             done();
//         }
//     }]);
// };


// const crawlSearchResults = (searchText) => {
//     var c = new Crawler({
//         maxConnections : 10,
//         // This will be called for each crawled page
//         callback : function (error, res, done) {
//             done();
//         }
//     });
    
    
//     // Queue URLs with custom callbacks & parameters
//     c.queue([{
//         uri: 'http://www.nettruyen.com/tim-truyen?keyword=' + searchText,
//         jQuery: true,
    
//         // The global callback won't be called
//         callback: function (error, res, done) {
//             if(error){
//                 console.log(error);
//             }else{
//                 const $ = res.$;
//                 $('.ModuleContent .items .row .item').each(function () {
//                     const comicTittle = $(this).find('figcaption h3 a').text();
//                     const comicLink = $(this).find('figcaption h3 a').attr('href');

//                     console.log('--------------------------------------')
//                     console.log(comicTittle);
//                     console.log(comicLink);
//                     console.log();
//                 });;
//             }
//             done();
//         }
//     }]);
// };



// };

// // crawlSearchResults('tay du ky')
// // crawlComicChapters('http://www.nettruyen.com/truyen-tranh/tay-du-ky-ngoai-truyen');
// // crawlChapterImages('http://www.nettruyen.com/truyen-tranh/tay-du-ky-ngoai-truyen/chap-60/399047')


// const crawlTruyen = (url, callback) => {
  

  
//   // Queue URLs with custom callbacks & parameters
  
//     }
//   }]);
//   //return callback(list);
// };

