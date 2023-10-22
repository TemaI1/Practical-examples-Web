<template>
    <div>
        <section class="blog_show">
            <div class="blog_show_content">
                <h2 class="blog_show_content_title">Articles & News</h2>
                <p class="blog_show_content_text">Home / Blog</p>
            </div>
        </section>
        <section class="blog_post center">
            <h2 class="blog_post_title">Latest Post</h2>
            <div class="blog_post_content">
                <div class="blog_post_content_left">
                    <img class="blog_post_content_left_img" src="../assets/blog_photo.jpg" alt="photo">
                </div>
                <div class="blog_post_content_right">
                    <h3 class="blog_post_content_right_title">Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p class="blog_post_content_right_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                    <p class="blog_post_content_right_text">Lorem Ipsum is not simply random text. It has roots in a piece
                        of classica.</p>
                    <div class="blog_post_content_right_transition">
                        <p class="blog_post_content_right_transition_date">26 December, 2022</p>
                        <img class="blog_post_content_right_transition_arrow" src="../assets/arrow.jpg" alt="icon"
                            width="60px" height="60px">
                    </div>
                </div>
            </div>
        </section>
        <section class="news center">
            <div class="news_text">
                <h2 class="news_text_title" style="text-align: left;">Articles & News</h2>
            </div>
            <div class="news_content">
                <div class="news_content_item">
                    <img class="news_content_item_img" src="../assets/news_photo.png" alt="photo">
                    <div class="news_content_item_under">
                        <div class="news_content_item_under_left">
                            <p class="news_content_item_under_title">Let’s Get Solution For Building Construction Work</p>
                            <p class="news_content_item_under_text">26 December,2022</p>
                        </div>
                        <img class="news_content_item_under_arrow" src="../assets/arrow.jpg" alt="arrow" width="50px">
                        <div class="news_content_item_under_right">
                        </div>
                    </div>
                </div>
                <div class="news_content_item news_content_color">
                    <img class="news_content_item_img" src="../assets/news_photo_2.png" alt="photo">
                    <div class="news_content_item_under">
                        <div class="news_content_item_under_left">
                            <p class="news_content_item_under_title">Low Cost Latest Invented Interior Designing Ideas.</p>
                            <p class="news_content_item_under_text">22 December,2022</p>
                        </div>
                        <img class="news_content_item_under_arrow" src="../assets/arrow_white.png" alt="arrow" width="50px">
                        <div class="news_content_item_under_right">
                        </div>
                    </div>
                </div>
                <div class="news_content_item">
                    <img class="news_content_item_img" src="../assets/news_photo_3.png" alt="photo">
                    <div class="news_content_item_under">
                        <div class="news_content_item_under_left">
                            <p class="news_content_item_under_title">Best For Any Office & Business Interior Solution</p>
                            <p class="news_content_item_under_text">25 December,2022</p>
                        </div>
                        <img class="news_content_item_under_arrow" src="../assets/arrow.jpg" alt="arrow" width="50px">
                        <div class="news_content_item_under_right">
                        </div>
                    </div>
                </div>
                <div class="news_content_item">
                    <img class="news_content_item_img" src="../assets/news_photo_4.jpg" alt="photo">
                    <div class="news_content_item_under">
                        <div class="news_content_item_under_left">
                            <p class="news_content_item_under_title">Best For Any Office & Business Interior Solution</p>
                            <p class="news_content_item_under_text">25 December,2022</p>
                        </div>
                        <img class="news_content_item_under_arrow" src="../assets/arrow.jpg" alt="arrow" width="50px">
                        <div class="news_content_item_under_right">
                        </div>
                    </div>
                </div>
                <div class="news_content_item">
                    <img class="news_content_item_img" src="../assets/news_photo_5.jpg" alt="photo">
                    <div class="news_content_item_under">
                        <div class="news_content_item_under_left">
                            <p class="news_content_item_under_title">Best For Any Office & Business Interior Solution</p>
                            <p class="news_content_item_under_text">25 December,2022</p>
                        </div>
                        <img class="news_content_item_under_arrow" src="../assets/arrow.jpg" alt="arrow" width="50px">
                        <div class="news_content_item_under_right">
                        </div>
                    </div>
                </div>
                <div class="news_content_item">
                    <img class="news_content_item_img" src="../assets/news_photo_6.jpg" alt="photo">
                    <div class="news_content_item_under">
                        <div class="news_content_item_under_left">
                            <p class="news_content_item_under_title">Best For Any Office & Business Interior Solution</p>
                            <p class="news_content_item_under_text">25 December,2022</p>
                        </div>
                        <img class="news_content_item_under_arrow" src="../assets/arrow.jpg" alt="arrow" width="50px">
                        <div class="news_content_item_under_right">
                        </div>
                    </div>
                </div>
            </div>
            <div class="news_scrol">
                <p class="news_scrol_num">01</p>
                <p class="news_scrol_num">02</p>
                <p class="news_scrol_num">03</p>
                <p class="news_scrol_num">04</p>
                <img class="news_scrol_arrow" src="../assets/arrow_white.png" alt="icon" width="55px" height="55px">
            </div>
        </section>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.blog_show {
    margin-top: 30px;
    padding-top: 300px;
    background-image: url(../assets/blog_show.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    &_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: #FFF;
        padding: 30px;
        border-radius: 30px 30px 0 0;

        &_title {
            color: #292F36;
            font-size: 50px;
            font-weight: 400;
        }

        &_text {
            color: #4D5053;
            font-size: 22px;
            font-weight: 400;
        }
    }
}

.blog_post {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 30px;

    &_title {
        color: #292F36;
        font-size: 50px;
        font-weight: 400;
    }

    &_content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 60px;

        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        padding: 20px;
        border-radius: 30px;

        &_left {
            &_img {
                border-radius: 30px;
            }
        }

        &_right {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 500px;

            &_title {
                color: #292F36;
                font-size: 25px;
                font-weight: 600;
                margin-bottom: 30px;
            }

            &_text {
                color: #4D5053;
                font-size: 22px;
                font-weight: 400;
            }

            &_transition {
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &_date {
                    color: #534d50;
                    font-size: 16px;
                    font-weight: 400;
                }

                &_arrow:hover {
                    cursor: pointer;
                }
            }
        }
    }
}

.news {
    margin-top: 50px;

    &_text {
        &_title {
            text-align: center;
            color: #292F36;
            font-size: 50px;
            font-weight: 400;
        }

        &_subtitle {
            text-align: center;
            color: #4D5053;
            font-size: 22px;
            font-weight: 400;
        }
    }

    &_content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;

        &_color {
            background: #F4F0EC;
        }

        &_item {
            margin-top: 30px;
            border: 1px solid #E7E7E7;
            box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
            padding: 20px;
            border-radius: 30px;

            &_img {
                border-radius: 30px 30px 0 0;
            }

            &_under {
                display: flex;
                justify-content: space-between;
                align-items: end;
                max-width: 340px;

                &_title {
                    margin-top: 10px;
                    color: #292F36;
                    font-size: 25px;
                    font-weight: 400;
                }

                &_text {
                    margin-top: 40px;
                    color: #4D5053;
                    font-size: 16px;
                    font-weight: 400;
                }

                &_arrow:hover {
                    cursor: pointer;
                }
            }
        }
    }

    &_scrol {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        &_num {
            padding: 20px;
            border-radius: 100%;
            border: 1px solid #CDA274;
            color: #292F36;
            font-size: 16px;
            font-weight: 500;
        }

        &_num:hover {
            cursor: pointer;
            border: 1px solid #88193c;
        }

        &_arrow {
            background-color: #CDA274;
            padding: 1px;
            border-radius: 100%;
        }

        &_arrow:hover {
            cursor: pointer;
            background-color: #88193c;
        }
    }
}
</style>