const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const { filter } = require('cheerio/lib/api/traversing');
const fs = require('fs');



(async () => {

    console.time();

    // Starting Browser
    const browser = await puppeteer.launch({ headless: true }); // default is true
    const context = await browser.createIncognitoBrowserContext();
    const page = await browser.newPage();

    // Clear Cookies + Cache 
    const client = await page.target().createCDPSession();
    await client.send('Network.clearBrowserCookies');
    await client.send('Network.clearBrowserCache');


    // Exception Handling 
    process.on('unhandledRejection', (reason, p) => {
        console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
        browser.close();
      });

    // Logging into Facebook
    await page.goto('https://www.facebook.com/login?skip_api_login=1'); 
    await page.waitFor(1000); 
    await page.type('#email', 'bchezin@aol.com'); 
    await page.type('#pass', 'namantestpass123'); 
    await page.keyboard.press('Enter');
    await page.waitFor(2500); 
    await page.goto('https://bumble.com/app/connections'); 
    await page.waitFor(2500); 
    const log_in_path = "(//span[@class='action text-break-words'])[1]";
    const log = await page.$x(log_in_path); 
    await log[0].click(); 
    await page.waitFor(2500); 

    // ------- EVERYTHING BETWEEEN HERE IS FOR PHONE LOG IN 
    
    // Log into Bumble 
    // await page.goto('https://bumble.com/app/connections');
    // await page.waitFor(2500); 
    // const phone_path = '//*[@id="main"]/div/div[1]/div[2]/main/div/div[3]/form/div[3]/div'; 
    // const temp = await page.$x(phone_path); 
    // await temp[0].click(); 
    // await page.waitFor(1500);

    // // Sending Phone Login Credentials 
    // await page.type('#phone', '2027340491');
    // await page.keyboard.press('Enter');
    
    
    // // Wait 30 seconds to log in with code 
    // await page.waitFor(20000); 
    // await page.waitForNavigation();
    
    // ------- EVERYTHING BETWEEEN HERE IS FOR PHONE LOG IN 

    // Temproarily display a message so we know when it's done logging in + waiting
    console.log('Loading: Complete')

    // Disabling Images
        // Note: We do this after log in for now because this would disable captcha which we need
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            if(req.resourceType() == 'image'){
                req.abort();
            }
            else {
                req.continue();
            }
    });



     // Calls the autoScroll function (below)
    //  for (let i = 1; i < 2; i++){
         
    //     await autoScroll(page); 

    //  }
    await autoScroll(page);
    await autoScroll(page);

     // Counts the number of matches
     var matches = await page.$$('.contact');
     var matchNames = await page.$$eval('.contact', el => el.map(x => x.getAttribute('data-qa-name')));
     var numMatches = matchNames.length;

        // this aint workign 
    console.log('matchNames found');
    console.log('numMatches: ' + numMatches);
     

    // Grabbing the Data
    const match_data = [];
    for (let i = 0; i < numMatches; i++){

        if (matchNames[i] == 'Deleted account'){
            console.log('DELETED ACCOUNT FOUND'); 
            continue; 
        }
        else {
            // Clicking the match
            var idx = i+1;
            let idxString = idx.toString(); 
            let match_xpath = '//*[@id="main"]/div/div[1]/aside[1]/div/div[3]/div/div/section[2]/div/div/div[1]/div['+idxString+']'; 
            let elements = await page.$x(match_xpath); 
            await elements[0].click(); 

            /*Plan is we look at the name from the contact tab 
            if it is Deleted Account then we don't click */

            //await page.waitForSelector('.profile__badges'); 

            // wait for the name to load 
            await page.waitForSelector(".pill__image"); 
    

            // Pull Categories and Badges at the same time using Cheerio
            const content = await page.content();
            const $ = cheerio.load(content);
            var categories = [];
            const badges = [];
            $(".pill__image").each(function (index, element) {
                categories.push($(element).attr('src'));
                badges.push($(element).attr('alt'));
            });

            // Clean up the Categories using Regex
            const pattern = /dating_(\w+)v2.png/;
            var categories = categories.map(cat => cat.match(pattern)[1]);
            

            // Combine Categories + Badges to Object
            function arrMerge(k, v) {
                var obj = {};
                for (var i = 0; i < k.length; i++) {
                obj[k[i]] = v[i];
                }
                return obj;
            }
            var match = arrMerge(categories, badges);
            match_data.push(match); 
        }
        console.log(i); 
    
    }
    
    

    await browser.close();


    // Getting the random string 

    // Load the Data 
    const rawdata = fs.readFileSync('logic_female.json');
    const logic =  JSON.parse(rawdata);


    let exercise = match_data.map(a => a.exercise);
    let education = match_data.map(a => a.education);
    
    let drinking = match_data.map(a => a.drinking);
    let smoking = match_data.map(a => a.smoking);
    let cannabis = match_data.map(a => a.cannabis);
    
    let intentions = match_data.map(a => a.intentions);
    let kids = match_data.map(a => a.familyPlans);
    let starSign = match_data.map(a => a.starSign);

    let politics = match_data.map(a => a.Politics);
    let religion = match_data.map(a => a.religion);

    
    let cat_list = [
        exercise, education, drinking, smoking, cannabis, intentions, 
        kids, starSign, politics, religion
    
    ];
    

    let keys = [
        "exercise", "education", "drinking", "smoking", "cannabis", "intentions", 
        "kids", "starSign", "politics", "religion"
    ];

    

    const mostFrequent = arr =>
    Object.entries(
        arr.reduce((a, v) => {
        a[v] = a[v] ? a[v] + 1 : 1;
        return a; 
    }, {})
    ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];


    const common_list = [];
    wordList = []
    for (let i = 0; i < cat_list.length; i++){

        // Filter Nulls
        var array = cat_list[i]; 
        var filtered = array.filter(function (el) {
            return el != null;
          }); 
        
        // error comming here make it a function
        var common = mostFrequent(filtered).replace(/\’/g, "\'");; 
        

        // Fix Apostrophe Issue via regex 
        var idx = keys[i]+"-"+common;
        var options = logic[idx]['options'];
        var randomElement = options[Math.floor(Math.random() * options.length)];
        
        wordList.push(randomElement); 
        
    }
   
    const randomString = wordList.join('-');
    console.log(randomString);


    console.timeEnd();
})();

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 25;
            var timer = setInterval(() => {
                var element = document.getElementsByClassName('scroll__inner')[0];
                var scrollHeight = element.scrollHeight;
                element.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 25);
        });
    });
}