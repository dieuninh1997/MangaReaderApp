var Crawler = require("crawler");
export class CrawlerData {
    constructor(url){
        this.url  = url;
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
}



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


// const crawlComicChapters = (url) => {
//     var c = new Crawler({
//         maxConnections : 10,
//         // This will be called for each crawled page
//         callback : function (error, res, done) {
//             done();
//         }
//     });
    
    
//     // Queue URLs with custom callbacks & parameters
//     c.queue([{
//         uri: url,
//         jQuery: true,
    
//         // The global callback won't be called
//         callback: function (error, res, done) {
//             if(error){
//                 console.log(error);
//             } else{
//                 const $ = res.$;
//                 $('.list-chapter nav ul li').each(function () {
//                     const comicChapter = $(this).find('.chapter a').text();
//                     const comicChapterLink = $(this).find('.chapter a').attr('href');

//                     console.log('--------------------------------------')
//                     console.log(comicChapter);
//                     console.log(comicChapterLink);
//                     console.log();
//                 });;
//             }
//             done();
//         }
//     }]);
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

