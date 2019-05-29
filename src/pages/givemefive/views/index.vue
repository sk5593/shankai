<template>
    <div class="container">
        <article class="content" :class="{'hasAside': state&&state!='5'}">
            <header class="header">
                <img class="img-bg-header" :src="IMGPrefix+'/img/givemefive/bg-header.png'" alt="">
                <div class="bg-title textcenter">
                    <div><img class="img-bg-title" :src="IMGPrefix+'/img/givemefive/bg-title.png'" alt=""></div>
                    <div class="bg-title-word">
                        <img class="img-bg-title-2" :src="IMGPrefix+'/img/givemefive/bg-title-2.png'" alt="">
                    </div>
                </div>
            </header>
            <main class="main-coupon">
                <section v-if="state&&state!=5" class="coupon-quota textcenter">
                    <img class="img-coupon" :src="IMGPrefix+'/img/givemefive/coupon.png'" alt="">
                </section>
                <section v-else-if="state==5" class="coupon-quota textcenter">
                    <div class="coupon-box">
                        <div class="coupon-value">{{self.coupon}}</div>
                        <img class="img-coupon" :src="IMGPrefix+'/img/givemefive/coupon_slices.png'" alt="">
                    </div>
                </section>
                <section class="coupon-title textcenter">
                    <div v-if="state==1" class="coupon-title-main">人气618，省钱攻略来袭</div>
                    <div v-else-if="join===false">
                        <div class="coupon-title-main">您的小伙伴邀您走向省钱巅峰</div>
                        <div class="coupon-title-endtime">2019-06-20 24:00:00结束</div>
                    </div>
                    <div v-else-if="state==2||state==3">
                        <div class="coupon-title-main">瓜分神券进行中</div>
                        <div class="coupon-title-endtime">{{config.validDate}}结束</div>
                    </div>
                    <div v-else-if="state==4">
                        <div class="coupon-title-main">小伙伴已就位，点击拆开</div>
                        <div class="coupon-title-endtime">{{config.validDate}} 24:00:00结束</div>
                    </div>
                    <div v-else-if="state==5">
                        <div class="coupon-title-endtime">优惠券将于6月16日前发放到有品账户，</div>
                        <div class="coupon-title-endtime">可移至有品APP内查看并使用</div>
                    </div>
                </section>
                <section class="user-list" v-if="state==2||state==3||state==4">
                    <ul class="" flex="main:justify">
                        <li class="user-item" v-for="item in teamList" :key="'useritemreal'+item.id">
                            <div class="user-headimg real" flex="main:center cross:center">
                                <img :src="item.avatarUrl" width="100%" alt="">
                            </div>
                            <div v-if="item.role==1" class="user-name textcenter">团长</div>
                        </li>
                        <li class="user-item" v-for="i in 5-teamList.length" :key="'useritemempty'+i">
                            <div class="user-headimg empty" flex="main:center cross:center">
                                <span class="user-headimg-text">?</span>
                            </div>
                        </li>
                    </ul>
                </section>
                <template v-if="state&&state!=5">
                    <section class="coupon-progress">
                        <ul flex="cross:corsss">
                            <li v-for="item in stepList" :key="'stepitemline'+item.id" :flex-box="item.portion" flex="cross:center" class="coupon-item" :class="{'reach': item.key<state, 'current': item.key==state||(item.key==4&&state==5)}">
                                <div class="progress-line-box" flex-box="1" flex="cross:center">
                                    <hr flex-box="1" class="progress-line progress-line-rea">
                                    <div class="progress-line-center" flex="main:center cross:center">
                                        <div class="progress-line-center-point"></div>
                                    </div>
                                    <hr flex-box="1" class="progress-line" :class="{'progress-line-rea': item.key==4}">
                                </div>
                            </li>
                        </ul>
                        <ul flex="cross:top">
                            <li v-for="item in stepList" :key="'stepitemname'+item.id" class="coupon-item" :class="{'reach': item.key<state, 'current': item.key==state||(item.key==4&&state==5)}" :flex-box="item.portion">
                                <div class="progress-name textcenter">
                                    <div>{{item.name}}</div>
                                    <div v-if="item.name2">{{item.name2}}</div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <summary class="summary" v-if="step!='4'">
                        <div class="summary-title" flex="cross:center">
                            <div flex-box="1"><hr class="summary-title-line"></div>
                            <div class="summary-title-word">规则描述</div>
                            <div flex-box="1"><hr class="summary-title-line"></div>
                        </div>
                        <div class="summary-content">
                            <p class="summary-content-p">1. 组团拼手气拆券，开团后成员可邀请好友参与。</p>
                            <p class="summary-content-p">2. 拼团成功：限定日期内，组成五人团，即可瓜分总面值100元的Yeelight有品券。</p>
                            <p class="summary-content-p">3. 拼团失败：限定时间内未组成五人团，即视为拼团失败。</p>
                            <p class="summary-content-p">4. 优惠券发放：拼团成功后将于6月16日前陆续发放到有品账户，请及时关注。优惠券仅限于有品平台使用，使用日期为6月17日-6月18日。</p>
                            <p class="summary-content-p">5. 通过优惠券下单不满免邮门槛，需按照正常规则支付运费。</p>
                            <p class="summary-content-p">6. 优惠券仅限本人使用，不得转让，不兑换现金。</p>
                            <p class="summary-content-p">7. 活动最终解释权归品牌所有。</p>
                        </div>
                    </summary>
                </template>
                
                <summary class="summary-fin" v-else-if="state==5">
                    <div class="summary-title" flex="cross:center">
                        <div flex-box="1"><hr class="summary-title-line"></div>
                        <div class="summary-title-word">看看小伙伴手气如何</div>
                        <div flex-box="1"><hr class="summary-title-line"></div>
                    </div>
                    <div class="summary-content">
                        <ul class="coupondis-list">
                            <li v-for="item in teamList" class="item-coupondis" :key="'usercouponitem'+item.id" flex="cross:center">
                                 <div class="user-item">
                                    <div class="user-headimg real" flex="main:center cross:center">
                                        <img :src="item.avatarUrl" width="100%" alt="">
                                    </div>
                                    <div v-if="item.role==1" class="user-name textcenter">团长</div>
                                </div>
                                <div class="jointeaminfo" flex-box="1">
                                    <div class="weixin-name">{{item.nickName}}</div>
                                    <div class="userjointime">{{formatTime(item.joinTime)}}</div>
                                </div>
                                <div class="item-coupon-value">{{item.coupon}}元</div>
                            </li>
                        </ul>
                    </div>
                </summary>
            </main>
            <footer class="footer">
                <img class="img-bg-bottom" :src="IMGPrefix+'/img/givemefive/bg-bottom.png'" alt="">
            </footer>
        </article>
        <template v-if="state">
            <aside class="aside textcenter" v-if="state==1 || (join==false&&state<4) ">
                <button class="btn-aside btn-openteam" @click="handleBth">
                    <img :src="IMGPrefix+'/img/givemefive/logo.png'" alt="" width="19px"> 
                    <span class="btn-aside-text">立即参团</span>
                </button>
            </aside>
            <aside class="aside textcenter" v-else-if="state==2 || state==3">
                <button class="btn-aside btn-openteam" @click="handleBth">
                    <img :src="IMGPrefix+'/img/givemefive/logo.png'" alt="" width="19px"> 
                    <span class="btn-aside-text">呼唤小伙伴</span>
                </button>
            </aside>
            <aside class="aside textcenter" v-else-if="state==4 && join">
                <button class="btn-aside btn-openteam" @click="handleBth">
                    <img :src="IMGPrefix+'/img/givemefive/logo.png'" alt="" width="19px"> 
                    <span class="btn-aside-text">Give me five</span>
                </button>
            </aside>
        </template>
    </div>
</template>

<script>
    import { getQueryString, validatenull } from '@/util/util';
    import { getToken, setToken } from '@/util/auth'
    import { getteam, jointeam, opencoupon, config } from '@/service/givemefive';
    export default {
        data(){
            return {
                config: {
                    valid: null,
                    validDate: ''
                    },
                    state: 0, // 1.初始状态；2.团长开团；3.有小伙伴加入（不满5人）；4.已满团（满5人）;5.已开券
                    role: 1, // 角色，1.团长；2.团员
                    join: false, // 是否已加入
                    bind: false, //是否已绑定小米账号
                    scene: '', // 来源
                    teamId: '', // 团ID
                    self: {}, //个人信息
                    teamList: [],
                    step: '2', // 当前进行的步骤
                    stepList: [{
                    id: 1,
                    name: '开团',
                    portion: 2,
                    key: 1
                }, {
                    id: 2,
                    name: '邀请好友',
                    name2: '团战',
                    portion: 3,
                    key: 2
                }, {
                    id: 3,
                    name: '限定日期',
                    name2: '满5人成团',
                    portion: 3,
                    key: 3
                }, {
                    id: 4,
                    name: '拆券并领取',
                    portion: 2,
                    key: 4
                }],
                // eslint-disable-next-line no-undef
                IMGPrefix: IMGPrefix
            }
        },
        mounted(){
            let token = getQueryString('timeline') || getToken();
            if(token) setToken(token);
            this.scene = getQueryString('scene');
            this.teamId = getQueryString('teamId');
            this.init();
        },
        methods: {
            init(){
                config().then(res => {
                    if(res.data){
                        this.config = res.data
                    }
                    if(this.config.valid){
                        this.vmGetteam();
                    } else {
                        alert('活动失效');
                    }
                })
               
            },
            vmGetteam() {
                getteam(this.teamId).then(res => {
                    if(!validatenull(res.data)){
                        let data = res.data;
                        this.bind = data.bind;
                        if(this.bind){
                            this.join = data.join;
                            if(this.join) {
                                this.self = data.self;
                                this.role = this.self.role;
                            }
                        }
                        if(validatenull(data.team)){
                            this.state = 1;
                            return;
                        }
                        this.teamList = data.team;
                        this.teamId = this.teamList[0].teamId;
                        if(this.teamList.length == 1) {
                            this.state = 2;
                        } else if(this.teamList.length < 5) {
                            this.state = 3
                        } else if(this.self.openTime) {
                            this.state = 5;
                            return;
                        } else {
                            this.state = 4;
                        }
                        this.initMessage();
                    }
                });
            },
            // initTeamInfo(data) {
            //     this.role = data.role;
            //     this.join = data.join;
            // },
            initMessage() {
                try{
                    // eslint-disable-next-line no-undef
                    wx.miniProgram.postMessage({
                        data: {
                            teamId: this.teamId
                        }
                    });
                }catch(e){
                    // eslint-disable-next-line no-console
                    console.log(e);
                }
            },
            handleBth(){
                if(!this.bind) {
                    try{
                        // eslint-disable-next-line no-undef
                        wx.miniProgram.postMessage({
                            data: {
                                teamId: this.teamId,
                                scene: this.scene,
                                redirect: true
                            }
                        });
                        // eslint-disable-next-line no-undef
                        wx.miniProgram.redirectTo({
                            url: '/pages/oauth/oauth'
                        });
                    } catch(e) {
                        // eslint-disable-next-line no-console
                        console.log(e);
                    }
                    return;
                }
                
                if(this.state == 1) {
                    this.vmJointeam();
                } else if(this.state == 4){
                    if(this.join == false){
                        alert('您不在当前团中，无法领取优惠券');
                        return;
                    }
                    this.vmOpencoupon();
                } else {
                    if(this.join == false){
                        this.vmJointeam();
                    }else{
                        alert('点击右上角转发');
                    }
                }
            },
            vmJointeam(){
                jointeam(this.scene, this.teamId).then(res => {
                    if(res.success){
                        this.vmGetteam();
                    } else {
                        alert(res.msg)
                    }
                    // let data = res.data;
                    // this.role = data.role;
                    // if(!this.teamId){
                    //     this.teamId = data.teamId;
                    //     this.initMessage();
                    // }
                    // this.teamList.push(data);
                })
            },
            vmOpencoupon(){
                opencoupon().then(() => {
                    this.vmGetteam();
                    // if(res.success) {
                    //     this.state = 5;
                    // }
                })
            },
            add0 (m){return m<10?'0'+m:m },
            formatTime(timestamp){
                let time = new Date(parseInt(timestamp)*1000);
                let m = time.getMonth()+1;
                let d = time.getDate();
                let h = time.getHours();
                let mm = time.getMinutes();
                let s = time.getSeconds();
                return this.add0(m)+'.'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
            }
        }
    }
</script>

<style>
    body{
        background: #FAF5EC;
        padding-bottom: env(safe-area-inset-bottom);
        font-family: -apple-system,Helvetica,sans-serif;
    }
</style>

<style lang="scss" scoped>
    .textcenter{
        text-align: center;
    }
</style>

<style lang="scss" scoped>
    $pageWidthMaxPx: 750px;
    $pageWidthMaxRem: 18.75rem;
    $mainFontColor: #333333;
    $userColor: #CEA460;
    $asideBtnHeight: 50px;
    .container{
        position: relative;
        max-width: $pageWidthMaxPx;
        margin: 0 auto;
        color: $mainFontColor;
        min-height: 100vh;
    }
    .content.hasAside{
        padding-bottom: $asideBtnHeight;
    }
    .header{
        position: relative;
    }
    .img-bg-header{
        width: 100%;
    }
    .bg-title{
        position: absolute;
        top: 4.025rem;
        width: 100%;
        .img-bg-title{
            width: 17rem;
        }
        .img-bg-title-2{
            width: 10.75rem;
        }
        .bg-title-word{
            margin-top: 1rem;
            font-size: 1rem;
            font-family:Alibaba-PuHuiTi-M;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height: 1;
        }
    }
    .main-coupon{
        padding: 2.525rem 2.125rem 0;
    }
    .img-coupon{
        width: 100%;
    }
    .coupon-box{
        position: relative;
    }
    .coupon-value{
        position: absolute;
        top: 2rem;
        left: 1.85rem;
        font-size: 3.75rem;
        font-weight:bold;
        color:rgba(255,255,255,1);
        font-family:MIUIEX-Bold;
        line-height: 1;
    }
    .coupon-title{
        margin-top: .9rem;
        line-height: 1;
        .coupon-title-main{
            font-size: .8rem;
            font-family: PingFangSC-Regular;
            color: rgba(155,73,73,1);
        }
        .coupon-title-endtime{
            margin-top: .625rem;
            font-size: .6rem;
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(102,102,102,1);
            line-height: 1;
            letter-spacing: .05rem;
        }
    }

    .user-list{
        margin-top: 1.725rem;
    }
    .user-item{
        position: relative;
    }
    .user-headimg{
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        font-size: 1.25rem;
        color: $userColor;
        overflow: hidden;
        &.real{
            border: 1px solid $userColor;
        }
        &.empty{
            border: 1px dashed $userColor;
        }
    }
    .user-name{
        position: absolute;
        top: 100%;
        left: 50%;
        width: 1.95rem;
        height: 0.65rem;
        line-height: 0.65rem;
        margin-left: -.975rem;
        margin-top: -.325rem;
        border-radius: .325rem;
        color: #fff;
        background: $userColor;
        font-size: .55rem;

    }

    .coupon-progress{
        margin-top: 3rem;
    }
    .coupon-item{
        flex-basis: 0;
    }
    .progress-name{
        margin-top: .3rem;
        font-size: .55rem;
        line-height: .725rem;
    }
    .progress-line{
        margin: 0;
        border: none;
        border-top: 1px dashed #999999;
    }
   
    .progress-line-center-point{
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background: #999999;
    }
    .reach{
        .progress-name{
            color: $userColor;
        }
        .progress-line{
            border-top: 1px solid $userColor;
        }
        .progress-line-center-point{
            background: $userColor;
        }
    }
    .current{
        .progress-name{
            color: $userColor;
        }
        .progress-line-center-point{
            background: $userColor;
        }
        .progress-line-rea{
            border-top: 1px solid $userColor;
        }
        .progress-line-center{
            width: 0.55rem;
            height: 0.55rem;
            border-radius: 50%;
            border: 1px solid $userColor;
        }
    }

    .summary{
        margin-top: 2.5rem;
    }
    .summary-fin{
        margin-top: 2.075rem;
    }
    .summary-title-line{
        margin: 0;
        border: none;
        border-top: 1px solid #CEA460;
    }
    .summary-title-word{
        margin: 0 .2rem;
        font-size: .65rem;
        font-family: PingFangSC-Regular;
        color:rgba(51,51,51,1);
        line-height: 1;
    }
    .summary-content{
        margin-top: 1.225rem;
        .summary-content-p{
            font-size: .6rem;
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(51,51,51,1);
            line-height: 1rem;
            // &+.summary-content-p{
                margin-top: .6rem;
            // }
        }
    }

    .coupondis-list{
        margin-top: 2rem;
    }
    .item-coupondis + .item-coupondis{
        margin-top: 1.65rem;
    }
    .jointeaminfo{
        padding: 0 1rem;
    }
    .weixin-name{
        font-size: .7rem;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(51,51,51,1);
        line-height: 1;
    }
    .userjointime{
        margin-top: .5rem;
        font-size: .55rem;
        font-family: PingFangSC-Light;
        font-weight: 300;
        color: rgba(102,102,102,1);
        line-height: 1;
    }
    .item-coupon-value{
        font-size: .75rem;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(51,51,51,1);
    }

    .img-bg-bottom{
        width: 100%;
    }

    .aside{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding-bottom: env(safe-area-inset-bottom);
        background: #FAF5EC;
    }
    // @supports not(bottom: env(safe-area-inset-bottom)){
    //     .aside{
    //         bottom: 0;
    //     }
    // }
    .btn-aside{
        height: $asideBtnHeight;
        width: 100%;
        max-width: $pageWidthMaxPx;
        background: $userColor;
        color:rgba(255,255,255,1);
        line-height: 1;
        cursor: pointer;
        touch-action: manipulation;
        &:active{
            background: $userColor*.8;
        }
    }
    .btn-aside-text{
        vertical-align: middle; 
        margin-left: 10px;
        font-size: 16px;
        font-family:PingFangSC-Regular;
    }
</style>