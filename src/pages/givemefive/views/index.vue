<template>
    <div class="container">
        <article class="content">
            <header class="header">
                <img class="img-bg-header" src="../lib/bg-header.png" alt="">
                <div class="bg-title textcenter">
                    <div><img class="img-bg-title" src="../lib/bg-title.png" alt=""></div>
                    <div class="bg-title-word">
                        <span>五人团战，抢“光”618</span>
                    </div>
                </div>
            </header>
            <main class="main-coupon">
                <section class="coupon-quota textcenter">
                    <img class="img-coupon" src="../lib/coupon.png" alt="">
                </section>
                <section class="coupon-title textcenter">
                    <div v-if="step=='1'" class="coupon-title-main">人气618，省钱攻略来袭</div>
                    <div v-else-if="step=='2'">
                        <div class="coupon-title-main">瓜分神券进行中</div>
                        <div class="coupon-title-endtime">2019-06-20 24:00:00结束</div>
                    </div>
                </section>
                <section class="user-list" v-if="step!='1'">
                    <ul class="" flex="main:justify">
                        <li class="user-item">
                            <div class="user-headimg real" flex="main:center cross:center">
                                <img src="../lib/coupon.png" height="100%" alt="">
                            </div>
                            <div class="user-name textcenter">团长</div>
                        </li>
                        <li class="user-item" v-for="i in 4" :key="i">
                            <div class="user-headimg empty" flex="main:center cross:center">
                                <span class="user-headimg-text">?</span>
                            </div>
                        </li>
                    </ul>
                </section>
                <section class="coupon-progress">
                    <ul flex="cross:corsss">
                        <li v-for="item in stepList" :key="'stepitemline'+item.id" :flex-box="item.portion" flex="cross:center" class="coupon-item" :class="{'reach current': item.id==1}">
                            <div class="progress-line-box" flex-box="1" flex="cross:center">
                                <hr flex-box="1" class="progress-line">
                                <div class="progress-line-center" flex="main:center cross:center">
                                    <div class="progress-line-center-point"></div>
                                </div>
                                <hr flex-box="1" class="progress-line">
                            </div>
                        </li>
                    </ul>
                    <ul flex="cross:top">
                        <li v-for="item in stepList" :key="'stepitemname'+item.id" class="coupon-item reach current" :flex-box="item.portion">
                            <div class="progress-name textcenter">
                                <div>{{item.name}}</div>
                                <div v-if="item.name2">{{item.name2}}</div>
                            </div>
                        </li>
                    </ul>
                </section>
                <aside class="aside">
                    <div class="aside-title" flex="cross:center">
                        <div flex-box="1"><hr class="aside-title-line"></div>
                        <div class="aside-title-word">规则描述</div>
                        <div flex-box="1"><hr class="aside-title-line"></div>
                    </div>
                    <div class="aside-content">
                        <p class="aside-content-p">1.组团拼手气拆券，开团后成员可邀请好友参与。</p>
                        <p class="aside-content-p">2. 拼团成功：限定日期内，组成五人团，即可瓜分总面值80元的Yeelight有品券。</p>
                        <p class="aside-content-p">3. 拼团失败：限定时间内未组成五人团，即视为拼团失败。</p>
                        <p class="aside-content-p">4. 优惠券发放：拼团成功后将于6月16日前发放到有品账户，优惠券仅限于有品平台使用。</p>
                        <p class="aside-content-p">5. 通过优惠券下单不满免邮门槛，需按照正常规则支付运费。</p>
                        <p class="aside-content-p">6. 优惠券仅限本人使用，不得转让、不兑换现金。</p>
                        <p class="aside-content-p">7. 活动最终解释权归品牌所有。</p>
                    </div>
                </aside>
            </main>
            <footer class="footer">
                <img class="img-bg-bottom" src="../lib/bg-bottom.png" alt="">
            </footer>
        </article>
    </div>
</template>

<script>
    import { getQueryString } from '@/util/util'
    export default {
        data(){
            return {
                step: '2',
                stepList: [{
                    id: 1,
                    name: '开团',
                    portion: 2
                }, {
                    id: 2,
                    name: '邀请好友',
                    name2: '团战',
                    portion: 3
                }, {
                    id: 2,
                    name: '限定日期',
                    name2: '满5人成团',
                    portion: 3
                }, {
                    id: 2,
                    name: '拆券并领取',
                    portion: 2
                }]
            }
        },
        mounted(){
            let p = getQueryString('param');
            // alert(p)
        },
    }
</script>

<style>
    body{
        background: #FAF5EC;
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
    .container{
        max-width: $pageWidthMaxPx;
        margin: 0 auto;
        color: $mainFontColor;
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
        .progress-line-center{
            width: 0.55rem;
            height: 0.55rem;
            border-radius: 50%;
            border: 1px solid $userColor;
        }
    }

    .aside{
        margin-top: 2.5rem;
    }
    .aside-title-line{
        margin: 0;
        border: none;
        border-top: 1px solid #CEA460;
    }
    .aside-title-word{
        margin: 0 .2rem;
        font-size: .65rem;
        font-family: PingFangSC-Regular;
        color:rgba(51,51,51,1);
        line-height: 1;
    }
    .aside-content{
        margin-top: 1.025rem;
        font-size: .6rem;
        font-family:PingFangSC-Light;
        font-weight:300;
        color:rgba(51,51,51,1);
        line-height: 1rem;
        .aside-content-p+.aside-content-p{
            margin-top: .6rem;
        }
    }
    .img-bg-bottom{
        width: 100%;
    }
</style>