

### style

inline style 將樣式寫在個別的屬性裡，比較少使用的寫法，因維護、彈性與修改都較不方便

style 一般寫在 Head 裡面

選取器 {
  屬性: 屬性的值;
  屬性: 屬性的值;
}

### Float 浮動

從資料中抽離浮動，很難解釋。

若 div 下所有物件都是 float 可以使用 clearfix 技巧撐高，在最後一個物件後面增加一個 style 為 `clear: both;` 的物件。

### Box Model

Box Model (區塊模型)

width / height 區塊大小
padding 區塊內距
border 區塊邊框

margin 區塊外距

填寫一個值表示 上下左右
填寫兩個值表示 上下 左右
填寫三個值表示 上 左右 下
填寫四個值表示 上 右 下 左

若子區塊大小大於父區塊就會跑版，所以以上四樣尺寸要計算清楚。

父物件沒有高度時，會被子物件撐高。但此時若子物件為浮動而父物件不是，父物件就無法抓取子物件的高度。

高度好像都不用特別設定，限制寬度後由內容稱高即可。

#### box-sizing

box-sizing 控制盒模型的計算方式，將寬度值設定給...

border-box 設定給邊框到邊框之間
content-box 設定給內容物

### Reset

CSS Reset :
* {
  padding: 0;
  margin: 0;
}

垂直置中: margin: auto; // auto 只影響左右

假文: lorem
假圖: https://fakeimg.pl/

### flex 彈性盒子(神器)

學習資源: https://flexboxfroggy.com/

`display: flex`

flex 使用時，若子元素的寬度是由內容產出，可能會造成個別寬度不一，設定過寬的寬度讓 flex 自動調整。

#### 項目對齊

**justify-content** 定義項目水平對齊容器中的位置

**align-items** 定義項目垂直對齊容器中的位置

**algin-self** 定義單一項目的 **align-items** 方法

**align-content** 定義多行時，每條水平線的對齊位置，單行時會失去功能。

1. flex-start: 對齊容器左側

2. flex-end: 對齊容器右側

3. center: 對齊容器中間

4. space-between: 項目之間的距離相等

5. space-around: 項目周圍的距離相等

#### 項目排序

**flex-direction** 定義項目放置在容器中的方向

1. row: 項目從左到右排序

2. row-reverse: 項目從右到左排序

3. column: 項目從上到下排序

4. column-reverse: 項目從下到上排序

**使用 column 改變項目排序會影響項目對齊方式，justify-content 與 align-items 會顛倒**

**order** 定義項目在容器中的排序權重

預設為 0，可以設定任何正負整數。

#### 項目換行

**flex-wrap** 定義項目在容器中的排列行數

1. nowrap: 項目排列在單行裡

2. wrap: 項目排列在多行裡

3. wrap-reverse: 項目排列在多行裡，但由下排。

#### 組合屬性

**flex-flow** 結合 **flex-direction** 與 **flex-wrap** 用法。

### display

網頁兩大特性：block, inline

block 占據一整列，h1, p, div 等

inline 會跟其他物件排在一起

可以使用 display 改變物件特性

block 可以設定寬高，inline 無法，只能由內容決定，所以想要排在一起又想設定寬高則使用 inline-block

inline-block 會有字跟字之間的距離，可以將上層 font-size 設成 0，本層設回原大小即可解決。

### position 定位

控制物件依據誰來做位置對齊、排序

定位之後 left, top, bottom, right, z-index 才會有作用

定位之後會改變畫面順序，後方物件蓋前方物件，若前方有定位後方沒有則前蓋後。

可由 z-index 改變順序，預設為 0

#### fixed 固定定位

1. 從資料中抽離獨立一層。

2. 沒有設定上右下左的距離，定在原來物件距離視窗頂端與左側的位置。

3. 永遠固定在視窗範圍內。

預設不會自動抓取空間寬度，設定了寬度之後就會去取得空間寬度並與空間等寬。

#### relative 相對定位

1. 在資料中的位置進行偏移，區塊佔據的空間沒有改變，但是畫面顯示在其他地方

#### Absolute 絕對定位

1. 從資料中抽離，在資料原本所在的位置，fixed 固定在視窗，而 Absolute 只定一次

2. left, top 等位置依照父層位置判斷，若父層不是 fixed, relative, Absolute 其中一種定位則繼續往上找，直到視窗。

### Transition 動畫

`transition: 屬性 轉換時間 延遲執行時間 速度;`

### Animation 動畫

Animation: 動畫名稱 播放時間 延遲執行的時間 速度 次數 方向 填充模式 播放狀態;

動畫名稱需要由 @keyframes 事先編寫劇本。

次數可設無限為 infinite

方向可設來回為 alternate

### media 媒體

@media screen and (條件){CSS樣式}

需注意加上`<meta name="viewport" content="width=device-width, initial-scale=1.0">`，否則有些媒體在計算解析度的寬度時會不一樣。

### 常見問題

img 會有底部小小的空間，若要解決可以添加 style 為 `vertical-align: bottom;`