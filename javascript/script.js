// 縣市夜市數據
const countyData = {
    taipei: {
        name: '台北市',
        markets: [
            {
                name: '寧夏夜市',
                openTime: '17:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.5,
                features: ['小吃', '服飾'],
                description: '台北最著名的夜市之一，以傳統小吃聞名'
            },
            {
                name: '士林夜市',
                openTime: '16:00-24:00',
                crowdLevel: '非常擁擠',
                rating: 4.7,
                features: ['小吃', '遊戲', '服飾'],
                description: '台北規模最大的夜市，擁有多樣美食與娛樂'
            }
        ]
    },
    // 可以繼續添加其他縣市的數據...
    NewTaipei: {
        name: '新北市',
        markets: [
            {
                name: '樂華夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '湳雅夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '裕民夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '三和夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中和興南夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '樹林興仁花園夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '樹林夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新莊廟街夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '西盛夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '蘆洲廟口夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '淡水英專夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '淡水沙崙夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '淡水五號橋夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '三芝夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鶯歌夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鶯歌龍鳳夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '林口夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '八里商圈',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '西雲路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '御史路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '金山夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '萬里夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '深坑廟前夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '五股工業區夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '汐止觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '汐止弘道街夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '汐止樟樹夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '五堵夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Taoyuan: {
        name: '桃園市',
        markets: [
            {
                name: '南崁五福夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大竹夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '桃園觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中壢觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁��',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中原夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '興仁花園夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '楊梅觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '埔心後站夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '富岡夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '龍潭觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '菓林夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大園夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大溪夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新屋夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '草漯夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新坡夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '觀音夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '復興夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '觀音工業區夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '山腳夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Hsinchu: {
        name: '新竹市',
        markets: [
            {
                name: '城隍廟夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '清大夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新竹代天府夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '樹林頭夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '慈雲路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '後站夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '青草湖夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '內湖夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中正台夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '竹北���市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '竹東沿河街夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '竹東二重埔夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '湖口夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '關西夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新庄子夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新豐夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新埔夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '北埔夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '竹中夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Miaoli: {
        name: '苗栗市',
        markets: [
            {
                name: '國泰夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中港夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '建國路龍鳳夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '頭份建國夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '頭份尚順夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '苗栗英才觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '公館夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '後龍夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '苑裡夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '苑裡29夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最的美食天堂'
            },
            {
                name: '大湖夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '銅鑼夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '三義夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '卓蘭夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '通霄夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的食天堂'
            }
        ]
    },
    taichung: {
        name: '台中市',
        markets: [
            {
                name: '逢甲夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '一中商圈',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中華路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '忠孝路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '東海別墅夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '霧峰樹仁商圈',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '豐原廟東夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '太平臺中小鎮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '四張犁夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '捷運總站夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '潭子勝利夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '潭子頭家夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大雅(雅潭)夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '葫蘆墩觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: 'SOGO停車場夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '八方國際觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '神岡夜市(北莊星期二夜市)',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '后里夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '外埔夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '東勢夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '旱溪夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '太平東平夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大慶觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大里勝利大夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大里塗城夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大里文化街夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '亞洲大學夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '霧峰四德路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '霧峰德泰街夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大肚夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大肚山龍井自強夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '龍井茄投夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '龍井龍津夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '福順宮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '靜宜夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '梧棲夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '梧棲中港觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '清水五權夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '沙鹿鹿峰夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大甲夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大甲蔣公路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
        ]
    },
    Changhua: {
        name: '彰化市',
        markets: [
            {
                name: '彰化中央陸橋夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '彰化精誠夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '彰化冠天夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '和美東發夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '和美美寮路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '和美仁愛夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鹿港鹿和夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鹿港頂番夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鹿港草港夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '福興夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '線西夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '伸港水尾夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '伸港福安宮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '秀水夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '芬園社口夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '員林龍燈夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '員林大圓林觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '員林林厝夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '社頭芭樂市場夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '永靖觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大村夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '花壇夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '田中夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '田中鐵支路觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '田中高鐵夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '二水夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '田尾夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '田尾海豐崙夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '埤頭夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '埤頭星期四夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '北斗觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '溪州夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '龍井龍津夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '二林王子夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '二林金仔角觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '埔鹽夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '埔鹽新水夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '埔鹽天盛夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '溪湖夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '溪湖成功夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '芳苑草湖夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '芳苑王功夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '竹塘夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大城夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '埤頭星期三夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
        ]
    },
    Nantou: {
        name: '南投市',
        markets: [
            {
                name: '草鞋墩人文觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '國姓夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '南投市家樂福（三和）夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '南崗夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中興新村內轆夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '南投祖祠路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中寮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '松柏嶺夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '名間夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鹿谷夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '竹山夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '集集夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '水裡夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '魚池夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '埔里八德夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '埔里中華夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '埔里城觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Yunlin: {
        name: '雲林市',
        markets: [
            {
                name: '斗六觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '斗六成功夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '斗六石榴班夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大崙夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '虎尾夜市（拜五街夜市）',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '土庫夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '馬光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '同仁夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['���吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '東南夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '吳厝夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '斗南夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，學生最愛的美食天堂'
            },
            {
                name: '石龜夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '林內夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大埤夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '莿桐夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '崙背夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '二崙夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '麥寮泰安宮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '麥寮鎮南宮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '褒忠夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '下崙夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '台西夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '崙豐夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '東勢夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '四湖夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '元長夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Chiayi: {
        name: '嘉義市',
        markets: [
            {
                name: '文化路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '家樂福觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '彌陀夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '美夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Tainan: {
        name: '臺南市',
        markets: [
            {
                name: '花園夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大東夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '武聖夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '小北觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '小北成功夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '仁和夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大益夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '灣裡夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新永華夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '十二佃夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '本淵寮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中州寮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '土城聖母廟夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '國宅夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '樺谷夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新同安夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '永大夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '南工小夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鹽行夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中興里夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '復華夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '聖龍夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰���逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大灣夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鍾厝夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '德南夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '太子廟夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大潭夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '歸仁星期三夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '歸仁星期四夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '關廟夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新市夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '善化夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新化夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '民生夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '隆田夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '六甲夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '下營夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中營夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '麻豆夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '西港夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '安定夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '海寮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '佳里夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '安西夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '仁愛夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '玉井夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '山上夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大內夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛���美食天堂'
            },
            {
                name: '漚汪夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '學甲夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '蚵寮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '北門夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '三寮灣夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新營中華路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新進夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鹽水夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '長安夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '白河夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '白河中正夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '柳營夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '小腳腿夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '果毅後夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '東山夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '龍山夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Kaohsiung: {
        name: '高雄市',
        markets: [
            {
                name: '六合觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '南華夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '瑞豐夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '前鎮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '佛公夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '光華夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '德昌夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '崗山南夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '漢民夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '二苓夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '桂林夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鋼平夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '高松夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '苓雅夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '忠孝夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '興中夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '三民街夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '三民街夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '吉林夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '喜峰街夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '駁二夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '內惟夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鳳山中山路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '前鎮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中華街夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鳳山青年夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '五甲夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '海洋夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大明夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '開漳聖王廟夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '南光街夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '國光路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '南江街夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '中崙夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '會社88夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '翁公園迷你小夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '林園夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鳥松夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '仁武夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '後勁夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '楠都夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '土庫夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大社夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '旗山夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '美濃夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '橋頭星期一夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '橋頭星期六夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '橋頭菁埔廣場夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '���里林夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '九甲圍夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '蚵仔寮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '燕巢夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '岡山中山夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '岡山後紅夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '路竹夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '湖內大廟夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '後勁夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '湖內大湖夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '永安夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '茄萣週四夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '阿蓮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大樹夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '九曲堂週二夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '九曲堂週六夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Pingtung: {
        name: '屏東縣',
        markets: [
            {
                name: '屏東民族路夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '墾丁大街',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '恆春夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '潮州夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '萬丹夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '社皮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新庄夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新園夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新東夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '烏龍夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '高樹夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '東港夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '繁華夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '南州夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '水底寮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '北勢寮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '里港夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '石光見夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鹽埔夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新圍夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '長治夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '九如夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '西勢夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '水門夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '龍泉夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '老埤夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '楓港夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '餉潭夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '七佳夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '望嘉夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Yilan: {
        name: '宜蘭市',
        markets: [
            {
                name: '羅東夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '東門觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '員山夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '冬山夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '清溝夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '南方澳夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '頭城夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '南澳夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '三星夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '蘇澳夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Hualien: {
        name: '花蓮縣',
        markets: [
            {
                name: '花蓮東大門國際觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '崇德夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '太魯閣夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新城夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '北埔廟口夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '北埔夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '美崙夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '太昌夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '南埔夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '志學夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '壽豐夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '林榮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '鳳林夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '光復夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '富源夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '瑞穗夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '玉里夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '富里夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Taitung: {
        name: '臺東縣',
        markets: [
            {
                name: '臺東觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '知本夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '四維夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '太平夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '太麻里觀光夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '金崙夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '大武夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '池上夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛��美食天堂'
            },
            {
                name: '關山夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '長濱夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '新港夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '東清夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Penghu: {
        name: '澎湖縣',
        markets: [
            {
                name: '西文祖師廟夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '北甲宮夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '馬公夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
    Kinmen: {
        name: '金門縣',
        markets: [
            {
                name: '金門體育館夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            },
            {
                name: '金門救國團夜市',
                openTime: '15:00-24:00',
                crowdLevel: '擁擠',
                rating: 4.6,
                features: ['小吃', '飾品'],
                description: '鄰近逢甲大學，是學生最愛的美食天堂'
            }
        ]
    },
};

// 新增防抖動延遲變數
let hoverTimer = null;
const HOVER_DELAY = 100; // 100毫秒的延遲

// 顯示資訊卡片
function showInfoCard(regionId, event) {
    const infoCard = document.getElementById('infoCard');
    const countyInfo = countyData[regionId];
    lastEvent = event;  // 保存最後的事件對象
    
    if (!countyInfo) return;

    // 更新標題
    document.getElementById('regionName').textContent = countyInfo.name;

    // 清空並重新生成夜市列表
    const marketList = document.getElementById('marketList');
    marketList.innerHTML = '';

    // 篩選夜市
    const filteredMarkets = countyInfo.markets.filter(market => {
        if (filters.isOpen && !isMarketOpen(market.openTime)) return false;
        if (filters.hasFood && !market.features.includes('小吃')) return false;
        if (filters.hasAccessories && !market.features.includes('飾品')) return false;
        return true;
    });

    // 如果沒有符合條件的夜市
    if (filteredMarkets.length === 0) {
        marketList.innerHTML = '<div class="text-gray-400 text-center py-4">沒有符合條件的夜市</div>';
        return;
    }

    filteredMarkets.forEach(market => {
        const marketElement = document.createElement('div');
        marketElement.className = 'market-item bg-gray-700 p-3 rounded-lg mb-3';
        marketElement.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <h4 class="font-medium text-blue-400">${market.name}</h4>
                <span class="text-sm text-yellow-400">★ ${market.rating}</span>
            </div>
            <div class="text-sm text-gray-300 mb-2">${market.description}</div>
            <div class="grid grid-cols-2 gap-2 text-sm">
                <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="${isMarketOpen(market.openTime) ? 'text-green-400' : 'text-red-400'}">
                        ${market.openTime}
                    </span>
                </div>
                <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span>${market.crowdLevel}</span>
                </div>
            </div>
            <div class="flex gap-2 mt-2">
                ${market.features.map(feature => 
                    `<span class="text-xs px-2 py-1 bg-gray-600 rounded-full">${feature}</span>`
                ).join('')}
            </div>
        `;
        marketList.appendChild(marketElement);
    });

    const rect = event.target.getBoundingClientRect();
    infoCard.style.display = 'block';
    
    // 確保卡片不會超出視窗邊界
    const cardWidth = 300;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    let left = event.clientX + 20;
    if (left + cardWidth > windowWidth) {
        left = event.clientX - cardWidth - 20;
    }
    
    let top = event.clientY;
    if (top + infoCard.offsetHeight > windowHeight) {
        top = windowHeight - infoCard.offsetHeight - 20;
    }
    
    infoCard.style.left = `${left}px`;
    infoCard.style.top = `${top}px`;
    
    infoCard.classList.add('active');
    isCardVisible = true;
}

// 檢查是否應該隱藏卡片
function shouldHideCard() {
    return !isHoveringRegion && !isHoveringCard;
}

// 隱藏資訊卡片
function hideInfoCard() {
    if (shouldHideCard()) {
        const infoCard = document.getElementById('infoCard');
        infoCard.classList.remove('active');
        isCardVisible = false;
        setTimeout(() => {
            if (!isCardVisible) {
                infoCard.style.display = 'none';
            }
        }, 300);
    }
}

// 綁定事件監聽器
document.addEventListener('DOMContentLoaded', function() {
    const regions = document.querySelectorAll('.region');
    const infoCard = document.getElementById('infoCard');
    
    regions.forEach(region => {
        region.addEventListener('mouseenter', function(e) {
            isHoveringRegion = true;
            if (hoverTimer) {
                clearTimeout(hoverTimer);
            }
            hoverTimer = setTimeout(() => {
                showInfoCard(this.id, e);
            }, HOVER_DELAY);
        });

        region.addEventListener('mouseleave', function(e) {
            isHoveringRegion = false;
            if (hoverTimer) {
                clearTimeout(hoverTimer);
            }
            // 設置短暫延遲，讓滑鼠有時間移動到卡片上
            setTimeout(() => {
                hideInfoCard();
            }, 100);
        });
        
        region.addEventListener('click', function(e) {
            if (isCardVisible) {
                hideInfoCard();
            } else {
                showInfoCard(this.id, e);
            }
        });
    });


    // 資訊卡片的滑鼠事件
    infoCard.addEventListener('mouseenter', function() {
        isHoveringCard = true;
    });

    infoCard.addEventListener('mouseleave', function() {
        isHoveringCard = false;
        setTimeout(() => {
            hideInfoCard();
        }, 100);
    });

    // 點擊其他地方時隱藏卡片
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.region') && !e.target.closest('#infoCard')) {
            isHoveringRegion = false;
            isHoveringCard = false;
            hideInfoCard();
        }
    });
});




// 搜尋夜市功能
let searchResults = [];
let isSearching = false;
let selectedFromSearch = false;  // 新增：標記是否從搜尋結果選擇

function initializeSearch() {
    const searchInput = document.querySelector('.search-container input');
    const searchResultsContainer = document.createElement('div');
    searchResultsContainer.id = 'searchResults';
    searchResultsContainer.className = 'search-results hidden absolute z-10 w-full mt-1 bg-gray-800 rounded-lg shadow-lg max-h-60 overflow-y-auto';
    document.querySelector('.search-container').appendChild(searchResultsContainer);

    // 添加搜尋輸入事件監聽
    searchInput.addEventListener('input', debounce(function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        if (searchTerm === '') {
            hideSearchResults();
            return;
        }
        performSearch(searchTerm);
    }, 300));


    // 添加點擊事件監聽器來處理搜尋結果的選擇
    searchResultsContainer.addEventListener('click', function(e) {
        const resultItem = e.target.closest('.search-result-item');
        if (resultItem) {
            e.stopPropagation(); // 阻止事件冒泡
            const regionId = resultItem.dataset.regionId;
            const marketName = resultItem.dataset.marketName;
            
            selectedFromSearch = true; // 設置標記
            
            // 清空搜尋框並隱藏結果
            searchInput.value = '';
            hideSearchResults();
            
            // 顯示選中的夜市資訊
            showMarketInfo(regionId, marketName);
            
            // 重置標記（使用延時確保其他事件處理完成）
            setTimeout(() => {
                selectedFromSearch = false;
            }, 100);
        }
    });

    // 點擊外部時隱藏搜尋結果
    document.addEventListener('click', function(e) {
        // 檢查是否從搜尋結果選擇
        if (!selectedFromSearch) {
            if (!e.target.closest('.search-container')) {
                hideSearchResults();
            }
            // 只有在不是點擊資訊卡和地圖區域時才隱藏資訊卡
            if (!e.target.closest('#infoCard') && !e.target.closest('.region')) {
                hideInfoCard();
            }
        }
    });


        // 添加搜尋框的鍵盤事件
    searchInput.addEventListener('keydown', function(e) {
        const resultsContainer = document.getElementById('searchResults');
        const results = resultsContainer.querySelectorAll('.search-result-item');
        const currentActive = resultsContainer.querySelector('.search-result-item.active');
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (!currentActive && results.length > 0) {
                    results[0].classList.add('active');
                } else if (currentActive && currentActive.nextElementSibling) {
                    currentActive.classList.remove('active');
                    currentActive.nextElementSibling.classList.add('active');
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentActive && currentActive.previousElementSibling) {
                    currentActive.classList.remove('active');
                    currentActive.previousElementSibling.classList.add('active');
                }
                break;
            case 'Enter':
                if (currentActive) {
                    selectedFromSearch = true; // 設置標記
                    currentActive.click();
                }
                break;
            case 'Escape':
                hideSearchResults();
                break;
        }
    });

    // 添加搜尋框的鍵盤事件
    searchInput.addEventListener('keydown', function(e) {
        const resultsContainer = document.getElementById('searchResults');
        const results = resultsContainer.querySelectorAll('.search-result-item');
        const currentActive = resultsContainer.querySelector('.search-result-item.active');
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (!currentActive && results.length > 0) {
                    results[0].classList.add('active');
                } else if (currentActive && currentActive.nextElementSibling) {
                    currentActive.classList.remove('active');
                    currentActive.nextElementSibling.classList.add('active');
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentActive && currentActive.previousElementSibling) {
                    currentActive.classList.remove('active');
                    currentActive.previousElementSibling.classList.add('active');
                }
                break;
            case 'Enter':
                if (currentActive) {
                    currentActive.click();
                }
                break;
        }
    });
}

// 防抖函數
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 執行搜尋
function performSearch(searchTerm) {
    searchResults = [];
    // 遍歷所有縣市的夜市資料
    for (const regionId in countyData) {
        const region = countyData[regionId];
        const matchedMarkets = region.markets.filter(market => 
            market.name.toLowerCase().includes(searchTerm) ||
            market.description.toLowerCase().includes(searchTerm) ||
            market.features.some(feature => feature.toLowerCase().includes(searchTerm))
        );

        if (matchedMarkets.length > 0) {
            matchedMarkets.forEach(market => {
                searchResults.push({
                    regionId: regionId,
                    regionName: region.name,
                    market: market
                });
            });
        }
    }

    displaySearchResults(searchResults);
}

// 顯示搜尋結果
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    if (results.length === 0) {
        searchResultsContainer.innerHTML = `
            <div class="px-4 py-2 text-gray-400">
                未找到相關夜市
            </div>
        `;
    } else {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'search-result-item px-4 py-2 hover:bg-gray-700 cursor-pointer';
            resultElement.dataset.regionId = result.regionId;
            resultElement.dataset.marketName = result.market.name;
            resultElement.innerHTML = `
                <div class="flex justify-between items-start">
                    <div>
                        <div class="text-white">${result.market.name}</div>
                        <div class="text-sm text-gray-400">${result.regionName}</div>
                    </div>
                    <div class="text-yellow-400">★ ${result.market.rating}</div>
                </div>
            `;
            searchResultsContainer.appendChild(resultElement);
        });
    }

    searchResultsContainer.classList.remove('hidden');
}


// 顯示特定夜市資訊
function showMarketInfo(regionId, marketName) {
    const market = countyData[regionId].markets.find(m => m.name === marketName);
    if (market) {
        // 創建一個模擬的事件對象，定位在更合適的位置
        const mockEvent = {
            target: document.getElementById(regionId),
            clientX: Math.min(window.innerWidth - 350, window.innerWidth / 2), // 確保不會太靠右
            clientY: Math.max(100, window.innerHeight / 4) // 確保不會太靠上
        };
        
        // 如果已經顯示著資訊卡，先隱藏它
        const infoCard = document.getElementById('infoCard');
        if (infoCard.style.display === 'block') {
            infoCard.style.display = 'none';
        }
        
        // 短暫延遲後顯示新的資訊卡
        setTimeout(() => {
            showInfoCard(regionId, mockEvent);
            // 確保資訊卡保持顯示
            isHoveringCard = true;
        }, 50);
    }
}
    

// 隱藏搜尋結果
function hideSearchResults() {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.classList.add('hidden');
    searchResults = [];
}

function hideInfoCard() {
    // 如果是從搜尋結果選擇的，不要立即隱藏
    if (selectedFromSearch) {
        return;
    }
    
    if (shouldHideCard()) {
        const infoCard = document.getElementById('infoCard');
        infoCard.classList.remove('active');
        isCardVisible = false;
        setTimeout(() => {
            if (!isCardVisible && !selectedFromSearch) {
                infoCard.style.display = 'none';
            }
        }, 300);
    }
}

// 在文檔加載完成後初始化搜尋功能
document.addEventListener('DOMContentLoaded', initializeSearch);




// 新增篩選狀態
let filters = {
  isOpen: false,
  hasFood: false,
  hasAccessories: false
};

// 初始化篩選功能
function initializeFilters() {
  const checkboxes = document.querySelectorAll('.filter-item input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const filterType = this.closest('.filter-item').querySelector('span').textContent;
      switch(filterType) {
        case '營業中':
          filters.isOpen = this.checked;
          break;
        case '小吃':
          filters.hasFood = this.checked;
          break;
        case '飾品':
          filters.hasAccessories = this.checked;
          break;
      }
      
      // 如果資訊卡片正在顯示，則更新顯示的內容
      if (isCardVisible) {
        const currentRegion = document.querySelector('.region.active');
        if (currentRegion) {
          showInfoCard(currentRegion.id, lastEvent);
        }
      }
    });
  });
}

// 檢查夜市是否營業中
function isMarketOpen(openTime) {
  const now = new Date();
  const currentHour = now.getHours();
  const [start, end] = openTime.split('-').map(time => parseInt(time.split(':')[0]));
  
  if (end < start) {  // 跨夜營業
    return currentHour >= start || currentHour < end;
  } else {
    return currentHour >= start && currentHour < end;
  }
}

// 在文檔加載完成後初始化篩選功能
document.addEventListener('DOMContentLoaded', function() {
  initializeSearch();
  initializeFilters();
});




