<template>
    <div>
        <section class="details_show">
        </section>
        <section class="details_content center">
            <div class="details_content_left">
                <h3 class="details_content_left_title">Let’s Get Solution for Building Construction Work</h3>
                <img class="details_content_left_img" src="../assets/details_content_photo.png" alt="photo">
                <div class="details_content_left_underimg">
                    <p class="details_content_left_underimg_text">26 December,2022</p>
                    <p class="details_content_left_underimg_text">Interior / Home / Decore</p>
                </div>
                <p class="details_content_left_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Exercitationem unde dicta, quae assumenda, odio quis ipsam dolor excepturi eos inventore ad, tenetur
                    necessitatibus illum in. Ea, voluptatibus officia laudantium praesentium qui accusamus tempora
                    provident. Reprehenderit, atque saepe maxime, labore harum neque ipsam a sapiente facilis aperiam dolore
                    quis est excepturi corporis obcaecati soluta. Odio incidunt suscipit cupiditate fuga, voluptas porro,
                    officiis a beatae ducimus unde autem optio illo vero. Explicabo sed et odit tempore doloremque natus
                    placeat quae, ea voluptate porro fugiat necessitatibus repellendus exercitationem animi itaque, magni,
                    deserunt eos nemo provident earum facere accusamus unde iste! Aliquam dolorem nemo a hic ex doloribus.
                    Esse, expedita fugit ipsa iure accusamus perspiciatis fugiat quam magni labore repellendus cupiditate
                    libero officiis commodi!</p>
                <div class="details_content_left_gap">
                    <img class="details_content_left_gap_photo" src="../assets/details_commas.jpg" alt="photo" width="80px"
                        height="60px">
                    <h3 class="details_content_left_gap_title">The details are not the details.
                        They make the design.</h3>
                </div>
                <div class="details_content_left_second">
                    <h3 class="details_content_left_title">Let’s Get Solution for Building Construction Work</h3>
                    <p class="details_content_left_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Exercitationem unde dicta, quae assumenda, odio quis ipsam dolor excepturi eos inventore ad, tenetur
                        necessitatibus illum in. Ea, voluptatibus officia laudantium praesentium qui accusamus tempora
                        provident. Reprehenderit, atque saepe maxime, labore harum neque ipsam a sapiente facilis aperiam
                        dolore quis est excepturi corporis obcaecati soluta. Odio incidunt suscipit cupiditate fuga,
                        voluptas porro, officiis a beatae ducimus unde autem optio illo vero. Explicabo sed et odit tempore
                        doloremque natus placeat quae, ea voluptate porro fugiat necessitatibus repellendus exercitationem
                        animi itaque, magni, deserunt eos nemo provident earum facere accusamus unde iste! Aliquam dolorem
                        nemo a hic ex doloribus. Esse, expedita fugit ipsa iure accusamus perspiciatis fugiat quam magni
                        labore repellendus cupiditate libero officiis commodi!</p>
                    <img class="details_content_left_img" src="../assets/details_content_photo_2.png" alt="photo">
                </div>
            </div>
            <div class="details_content_right">
                <h3 class="details_content_right_title">Tags</h3>
                <div class="details_content_right_buttons">
                    <button class="details_content_right_buttons_btn">Kitchen</button>
                    <button class="details_content_right_buttons_btn">Bedroom</button>
                    <button class="details_content_right_buttons_btn">Building</button>
                    <button class="details_content_right_buttons_btn">Architecture</button>
                    <button class="details_content_right_buttons_btn">Kitchen Planning</button>
                    <button class="details_content_right_buttons_btn">Bedroom</button>
                </div>
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

.details_show {
    margin-top: 30px;
    padding-top: 300px;
    background-image: url(../assets/details_show.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.details_content {
    margin-top: 100px;
    display: flex;
    gap: 40px;
    justify-content: center;

    &_left {
        max-width: 800px;
        display: flex;
        flex-direction: column;
        gap: 15px;

        &_title {
            color: #292F36;
            font-size: 50px;
            font-weight: 400;
        }

        &_img {
            border-radius: 30px;
        }

        &_underimg {
            display: flex;
            justify-content: space-between;

            &_text {
                color: #4D5053;
                font-size: 16px;
                font-weight: 400;
            }
        }

        &_text {
            color: #4D5053;
            font-size: 22px;
            font-weight: 400;
        }

        &_gap {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 10px 20px;
            border-radius: 50px;
            border: 2px solid #4D5053;

            &_title {
                color: #CDA274;
                text-align: center;
                font-size: 25px;
                font-weight: 400;
            }
        }

        &_second {
            max-width: 800px;
            display: flex;
            flex-direction: column;
            gap: 15px;

            &_title {
                color: #292F36;
                font-size: 50px;
                font-weight: 400;
            }

            &_img {
                border-radius: 30px;
            }

            &_text {
                color: #4D5053;
                font-size: 22px;
                font-weight: 400;
            }
        }
    }

    &_right {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &_title {
            color: #292F36;
            font-size: 25px;
            font-weight: 400;
        }

        &_buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            &_btn {
                padding: 10px 30px;
                border-radius: 10px;
                border: none;
                background: #F4F0EC;
                color: #292F36;
                text-align: center;
                font-size: 18px;
                font-weight: 400;
            }

            &_btn:hover {
                cursor: pointer;
                color: #F4F0EC;
                background: #292F36;
            }
        }
    }
}
</style>